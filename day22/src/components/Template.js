import './styles/Template.scss'
const Template = (props) =>{
    return(
        <div className={"mainPage"}>
            <div className={"mainPageTitle"}>
                <h1>Choose any Templates</h1>
            </div>
            <div className={"templates"}>
                {
                    props.templates.map(template => (
                        <div key={template.id} className={"template"} onClick={() =>{
                            props.setMeme(template);
                        }
                        }>
                            <div style={{"backgroundImage": `url(${template.url})`}} className={"image"}>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Template;