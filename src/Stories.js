export default function Stories(){
    const stories = [
        {
            nome:"meowed",
            imagem:"assets/img/meowed.svg"
        },
        {
            nome:"barked",
            imagem:"assets/img/barked.svg"
        },
        {
            nome:"nathanwpylestrangeplanet",
            imagem:"assets/img/nathanwpylestrangeplanet.svg"
        },
        {
            nome:"wawawicomics",
            imagem:"assets/img/wawawicomics.svg"
        },
        {
            nome:"respondeai",
            imagem:"assets/img/respondeai.svg"
        },
        {
            nome:"filomoderna",
            imagem:"assets/img/filomoderna.svg"
        },
        {
            nome:"filomoderna",
            imagem:"assets/img/filomoderna.svg"
        },


        ]


    return (
        <div className="stories">
            {stories.map((story) => <Story nome = {story.nome} imagem = {story.imagem}/>)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story({imagem,nome}){
    return (
        <div className="story">
            <div className="imagem">
                <img src={imagem} alt={nome}/>
            </div>
            <div className="usuario">
                {nome}
            </div>
        </div>
    )
}