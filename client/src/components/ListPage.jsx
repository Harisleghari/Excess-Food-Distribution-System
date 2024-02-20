/* eslint-disable react-hooks/exhaustive-deps */
import "./listpage.css";
import ListBodyPart from "./ListBodyPart";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Loader from "../Loader/Loader";

const ListPage = (props) => {
  const [detailList, setDetailList] = useState({});
  // let [isLoding, setIsLoading] = useState(true);

  // Get the Id param from the URL.
  const { id } = useParams();
  const product = id;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/food/" + product)
      .then((response) => {
        setDetailList(response.data.food);
        // setIsLoading((isLoding = false));
      })
      .catch((e) => console.log(e));
  }, [product]);

  return (
    <div>
        <div>
          <div className="wallpaper-ad-body-1-a wallpaper-ad-body-1-b">
            <div className="wallpaper-ad-body-1-a wallpaper-ad-body-1-b">
              <div className="wallpaper-ad-body-2-a wallpaper-ad-body-2-b">
                <ListBodyPart detailList={detailList} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ListPage;
