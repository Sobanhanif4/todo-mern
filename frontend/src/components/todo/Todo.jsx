import { useState } from 'react';
import './todo.css';
import TodoCards from './TodoCards';
const Todo = () => {
    const [Inputs, setInputs] = useState({ title: "", body: "" });
    const [Array, setArray] = useState([]);
    const show = () => {
        document.getElementById("textarea").style.display = "block"
    }
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    }
    const submit = () => {
        // console.log(Inputs);
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "" });
    }
        const del = (id) => {
            // console.log(id);
            Array.splice(id, 1);
            setArray([...Array]);
        };
    // console.log(Arrays);
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
            <div className="todo-body">
                <div className="container-fluid">
                    <div className="row">
                        {Array &&
                            Array.map((item, index) => (
                                <>
                                    <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                                        <TodoCards title={item.title} body={item.body} id={index} delid={del}/>
                                    </div>

                                </>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Todo
