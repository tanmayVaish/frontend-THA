
import './styles/Templates.css'

const Templates = (props) =>{

    return(
        <div>
            <h1>Tanmay's Meme Generator</h1>
            <div className={'templates'}>
                {
                    props.templates.map(template=>(<div key={template.id}>
                        <div onClick={() => props.setMeme(template)} className={'images'} style={{backgroundImage: `url(${template.url})`}}/>
                    </div>))
                }
            </div>
        </div>
    )


}
export default Templates;