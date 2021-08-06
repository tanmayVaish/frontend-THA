import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {updateUsernameInput, updatePasswordInput} from "./redux/userData/userDataActions";

function App() {

    const username = useSelector((state) => state.username);
    const password = useSelector((state) => state.password);

    const dispatch =  useDispatch();

    return (
        <div className={'page'}>
            <div className={"inputs"}>
                <input
                    placeholder={'username'}
                    type={'text'}
                    value={username}
                    onChange={(e)=>{
                        dispatch(updateUsernameInput(e.target.value));
                    }}
                />
                <input
                    placeholder={'password'}
                    type={'password'}
                    value={password}
                    onChange={(e)=>{
                        dispatch(updatePasswordInput(e.target.value));
                    }}
                />
            </div>
            <div className={"res"}>
                <h2>UserName:{username}</h2>
                <h2>Password:{password}</h2>
            </div>
        </div>
    );
}

export default App;
