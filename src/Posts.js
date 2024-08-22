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
                <Post imagemAutor = {post.imagemAutor} nomeAutor={post.nomeAutor} imagemPost = {post.imagemPost} imagemCurtida={post.imagemCurtida} autorCurtida ={post.autorCurtida}
                numeroCurtidas={post.numeroCurtidas}/>)}
        </div>
    )
}

function Post({imagemAutor,nomeAutor,imagemPost,imagemCurtida,autorCurtida,numeroCurtidas})  {
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
                <img src={imagemPost} alt="gato-telefone"/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <Acoes/>
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

function Acoes(){
    return (
        <>
        <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
            <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        </>
    )
}