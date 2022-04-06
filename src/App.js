import './App.css'
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
    return (
        <div className={'wrap'}>
            {/*<Actor*/}
            {/*    name={'Tom'}*/}
            {/*    img={"https://i.pinimg.com/474x/ba/74/6a/ba746a5ad203704cbac746f2c23314da.jpg"}*/}
            {/*/>*/}
            {/*<Actor*/}
            {/*    name={'Jerry'}*/}
            {/*    img={"https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png"}*/}
            {/*/>*/}

            <div className={'wrap2'}>
                <div className={'users'}>< Users  name={'Users :'}/></div>
                <hr/>
                <div className={'posts'}><Posts name={'Posts :'}/></div>
            </div>
            <hr/>
            <div className={'comments'}><Comments name={'Comments :'}/></div>
        </div>
    );
}

export default App;
