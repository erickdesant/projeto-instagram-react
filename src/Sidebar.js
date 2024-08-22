import {useState} from "react";

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
    const [avatar,setAvatar]  = useState("https://i.scdn.co/image/ab6761610000e5eb19c2790744c792d05570bb71")
    const [name,setName] = useState('Travis Scott')
    function handleAvatar(){
        const newAvatar = prompt("Escolha um novo avatar")
        setAvatar(newAvatar)
    }
    function handleName(){
        let newName = prompt("Escolha um novo nome").trim()
        while(!newName){
            newName = prompt("Nome inválido. Escolha um novo nome.")
        }
        setName(newName)
    }
    return (
        <div className="sidebar">
            <div className="usuario">
                <img onClick ={handleAvatar} src={avatar} alt="imagem de perfil"/>
                <div className="texto">
            <span>
              <strong>{name}</strong>
              <ion-icon name ="pencil" onClick ={handleName}></ion-icon>
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