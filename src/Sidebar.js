export default function Sidebar (){
    const sugestoes = [{
        nome:'bad.vibes.memes',
        imagem:"assets/img/bad.vibes.memes.svg",
        razao:'Segue você',
    },
        {
            nome:'bad.vibes.memes',
            imagem:"assets/img/bad.vibes.memes.svg",
            razao:'Segue você',
        },
        {
            nome:'bad.vibes.memes',
            imagem:"assets/img/bad.vibes.memes.svg",
            razao:'Novo no Instagram',
        },
        {
            nome:'bad.vibes.memes',
            imagem:"assets/img/bad.vibes.memes.svg",
            razao:'Segue você',
        },
        {
            nome:'bad.vibes.memes',
            imagem:"assets/img/bad.vibes.memes.svg",
            razao:'Novo no Instagram',
        },
        {
            nome:'bad.vibes.memes',
            imagem:"assets/img/bad.vibes.memes.svg",
            razao:'Segue você',
        },
    ]

    return (
        <div className="sidebar">
            <div className="usuario">
                <img src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
                <div className="texto">
            <span>
              <strong>catanacomics</strong>
              <ion-icon name="pencil"></ion-icon>
            </span>
                </div>
            </div>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoes.map((sugestao) => <Sugestao sugestaoNome = {sugestao.nome} sugestaoImagem = {sugestao.imagem}
                    sugestaoRazao={sugestao.razao}/>)}

            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais
                relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Sugestao({sugestaoImagem,sugestaoNome,sugestaoRazao}){
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={sugestaoImagem} alt={sugestaoNome}/>
                <div className="texto">
                    <div className="nome">{sugestaoNome}</div>
                    <div className="razao">{sugestaoRazao}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}