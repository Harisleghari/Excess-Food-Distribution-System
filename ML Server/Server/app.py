from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForCausalLM
def loadModel():
    print("model loading")
    tokenizer = AutoTokenizer.from_pretrained("../tokenizer")
    print("model loaded")
    model = AutoModelForCausalLM.from_pretrained("../model")
    print("model loaded")
    return tokenizer,model
tokenizer,model = loadModel()

app = FastAPI()


class ChatRequest(BaseModel):
    # For user's selection of topic
    chat: str


@app.post("/chat")
async def chat(request:ChatRequest):
    prompt = f"ingredients>> {request.chat}; recipe>>"
    input_ids = tokenizer.encode(prompt, return_tensors="pt")
    output = model.generate(input_ids, max_length=512)
    result = tokenizer.decode(output[0])
    while("<|endoftext|>" not in result):
        input_ids = tokenizer.encode(result, return_tensors="pt")
        output = model.generate(input_ids, max_length=1024)
        result = tokenizer.decode(output[0])
    ingredients_text, recipe_text = result.split(';')

# Extracting ingredients and recipe content
    ingredients = ingredients_text.split('>>')[1].strip().split(', ')
    recipe = recipe_text.split('>>')[1].strip()
    return {"ingredients": ingredients,"recipe":recipe}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
