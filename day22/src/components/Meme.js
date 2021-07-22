import './styles/Meme.css'
const Meme = (props) => {

    console.log(props.meme.box_count)

    return(
        <div>
            <h1>Tanmay's Meme Generator</h1>
            <div className={'container'}>
                {
                    <img className={'image'} src={props.meme.url}/>
                }
                <div className={'inputs'}>
                    {
                        [...Array(props.meme.box_count)].map((_,i) => (<input key={i}/>))
                    }
                </div>
                <div className={'buttons'}>
                    <button onClick={() =>
                        props.setMeme(null)}>Go Back</button>
                    <button>Generate Meme</button>
                </div>
            </div>
        </div>
    )

}

export default Meme;