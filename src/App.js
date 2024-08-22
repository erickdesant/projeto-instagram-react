import Navbar from "./Navbar";
import Body from "./Body";

function App() {
  return (
    <>
        <Navbar/>
        <Body/>
    </>
  )
}

export default App

      /*  App
        Body
        SideBar
        NavBar
        User
        Stories (onde cada item será um componente diferente, o Story)
        Posts (onde cada item será um componente diferente, o Post)
        Suggestions (onde cada item será um componente diferente, o Suggestion)

        <Body>
            <Stories/>
            <Post/>
            <SideBar>
                <User/>
                <Suggestions>
                    <Suggestion/>
                </Suggestions>
            </SideBar>
        </Body>


        */