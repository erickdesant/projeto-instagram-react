import {useState} from "react";

export default function Posts(){
    const posts = [
        {
            imagemAutor:"assets/img/meowed.svg",
            nomeAutor:'meowed',
            imagemPost:"assets/img/gato-telefone.svg",
            imagemCurtida:"assets/img/respondeai.svg",
            autorCurtida:'respondeai',
            numeroCurtidas: '108.426',
        },
        {
            imagemAutor:"assets/img/meowed.svg",
            nomeAutor:'meowed',
            imagemPost:"assets/img/gato-telefone.svg",
            imagemCurtida:"assets/img/respondeai.svg",
            autorCurtida:'respondeai',
            numeroCurtidas: '108.426',
        },
        {
            imagemAutor:"assets/img/meowed.svg",
            nomeAutor:'meowed',
            imagemPost:"assets/img/gato-telefone.svg",
            imagemCurtida:"assets/img/respondeai.svg",
            autorCurtida:'respondeai',
            numeroCurtidas: '108.426',
        },
        {
            imagemAutor:"assets/img/meowed.svg",
            nomeAutor:'meowed',
            imagemPost:"assets/img/gato-telefone.svg",
            imagemCurtida:"assets/img/respondeai.svg",
            autorCurtida:'respondeai',
            numeroCurtidas: '108.426',
        },
    ]

    return (
        <div className="posts">
            {posts.map((post) =>
                <Post imagemAutor = {post.imagemAutor} nomeAutor={post.nomeAutor} imagemPost = {post.imagemPost} imagemCurtida={post.imagemCurtida} autorCurtida ={post.autorCurtida}/>)}
        </div>
    )
}

function Post({imagemAutor,nomeAutor,imagemPost,imagemCurtida,autorCurtida})  {
    const [iconSave,setIcon] = useState("bookmark-outline")
    const [heartIcon,setHeartIcon] = useState("heart-outline")
    const [color,setColor] = useState("black")
    const [numeroCurtidas,setNumeroCurtidas] = useState("108400")
    function handleHeart(){
        if(heartIcon === 'heart-outline'){
            setHeartIcon('heart')
            setColor('red')
            let aux = parseInt(numeroCurtidas) + 1
            setNumeroCurtidas(aux.toString())
        }else{
            setHeartIcon('heart-outline')
            setColor('black')
            let aux = parseInt(numeroCurtidas) - 1
            setNumeroCurtidas(aux.toString())
        }
    }
    function handleSave(){
        iconSave === 'bookmark-outline' ? setIcon('bookmark') : setIcon('bookmark-outline')
    }
    function handleImgLike(){
        setHeartIcon('heart')
        setColor('red')
        if(color !== 'red'){
            let aux = parseInt(numeroCurtidas) + 1
            setNumeroCurtidas(aux.toString())
        }
    }
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={imagemAutor} alt={nomeAutor}/>
                    {nomeAutor}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img onClick = {handleImgLike} src={imagemPost} alt="gato-telefone"/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={heartIcon} onClick={handleHeart} style={{color: color}}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={iconSave} onClick={handleSave}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={imagemCurtida} alt={autorCurtida}/>
                    <div className="texto">
                        Curtido por <strong>{autorCurtida}</strong> e <strong>outras {numeroCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
