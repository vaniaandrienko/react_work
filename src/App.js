import {Users} from "./components";
import css from './App.module.css'
import SingleUser from "./components/SingleUser/SingleUser";
import {useState} from "react";
import {Posts} from "./components";

const App = () => {
    const [singleUser, setSingleUser] = useState(null);
    const [singIdPost, setSinglePost] = useState(null);

    return (
        <div>
        <div className={css.do}>
            <div>
            <Users getUser={setSingleUser}/>

            </div>
            <div>

            {singleUser && <SingleUser user={singleUser} setSinglePost={setSinglePost}/>}
            </div>

        </div>
            <div>
                {singIdPost && <Posts singIdPost={singIdPost}/>}
            </div>
        </div>
    );
}

export default App;
