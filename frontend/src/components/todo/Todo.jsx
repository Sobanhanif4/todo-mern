import { useState } from 'react';
import './todo.css';
const Todo = () => {
    const show = () => {
        const [Inputs, setInputs] = useState({title: "",body: ""});
        document.getElementById("textarea").style.display = "block"
    }
    const change = () => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]: value});
    }
    const submit = () => {
        console.log(Inputs);
        
    }
    return (
        <div className='todo'>
            <div className="todo-main container d-flex justify-content-center align-items-center flex-column my-5">
                <div className="d-flex flex-column todo-inputs-div w-50 p-1">
                    <input type="text"
                        placeholder='TITLE' className='my-2 p-2 todo-inputs'
                        name='title'
                        value={Inputs.title}
                        onClick={show}
                        onChange={change}
                    />
                    <textarea 
                    id='textarea'
                    type="text"
                    placeholder='BODY' 
                    className='p-2 todo-inputs'
                    name='body'
                    value={Inputs.body}
                    onChange={change}
                    />
                

                </div>
                <div className='w-50 d-flex justify-content-end my-3'>
                    <button className="home-btn px-2 py-1" onClick={submit}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Todo
