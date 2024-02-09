import { useEffect } from 'react';

const CustomGPTBot = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.customgpt.ai/js/chat.js';
        script.async = true;
        document.body.appendChild(script);

        window.onload = function () {
            window.CustomGPT.init({
                p_id: "21299",
                p_key: "f676f280635e8777c7fa64076dc41534",
                auto_popup: "1"
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default CustomGPTBot;
