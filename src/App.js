import {Users} from "./components";
import css from './App.module.css'
import SingleUser from "./components/SingleUser/SingleUser";
import {useState} from "react";
import './App.css'
import {Posts} from "./components";

const App = () => {
    const [singleUser, setSingleUser] = useState(null);

    return (
        <div>
        <div className={'do'}>
            <div>
            <Users getUser={setSingleUser}/>

            </div>
            <div>

            {singleUser && <SingleUser user={singleUser}/>}
            </div>

        </div>
            <div>
                <Posts/>
            </div>
        </div>
    );
}

export default App;
