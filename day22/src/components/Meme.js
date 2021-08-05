import './styles/Meme.scss'
import {useState} from "react";

const Meme = (props) => {

    const [form, setForm] = useState({
        template_id: props.meme.id,
        username: "TanmayVaish",
        password: "1234!1234",
        boxes: []
    })

    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        form.boxes.map((box, i) => {
            url += `&boxes[${i}][text]=${box.text}`;
        })
        fetch(url).then(res => res.json()).then(data => {
            if (data.success)
                props.setMeme({...props.meme, url: data.data.url})
        })
    }

    return (
        <div className={"memePage"}>
            <div className={"container"}>
                <div className={"memePageImg"}>
                    <img src={props.meme.url} alt={"lol"}/>
                </div>
                <div className={"memePageInp"}>
                    {
                        [...Array(props.meme.box_count)].map((_, i) => (
                            <input key={i} type="text" placeholder={`Caption ${i + 1}`}
                                   onChange={(event) => {
                                       const newBoxes = form.boxes;
                                       newBoxes[i] = {text: event.target.value};
                                       setForm({...form, boxes: newBoxes})
                                   }}/>
                        ))
                    }

                </div>
                <div className={"memePageBtns"}>
                    <div className={"goBack"} onClick={() => props.setMeme(null)}>Go Back</div>
                    <div className={"generateMeme"} onClick={generateMeme}>Generate Meme</div>
                    <div className={"download"} onClick={()=>{

                    }}>Download</div>
                </div>
            </div>
        </div>
    )

}

export default Meme;