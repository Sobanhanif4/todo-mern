import { useEffect, useState } from 'react';
import './todo.css';
import TodoCards from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
// import { useSelector } from 'react-redux';
import axios from "axios";
let id = sessionStorage.getItem("id")
let updatedArray = [];
const Todo = () => {
    const [Inputs, setInputs] = useState({ title: "", body: "" });
    const [Array, setArray] = useState([]);

    // const isLoggedIn = useSelector((state) => state.isLoggedIn);
    // if (isLoggedIn) {
    //     console.log(id);

    // }

    const show = () => {
        document.getElementById("textarea").style.display = "block"
    }
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    }
    const submit = async () => {
        if (Inputs.title === "" || Inputs.body === "") {
            toast.error("Title or Body Can't be Empty!")
        } else {
            if (id) {
                await axios.post("http://localhost:1000/api/v2/addTask", { title: Inputs.title, body: Inputs.body, id: id, })
                    .then((response) => {
                        console.log(response);
                    })
                setInputs({ title: "", body: "" });
                toast.success("Your Task is Added!")
            } else {
                setArray([...Array, Inputs]);
                setInputs({ title: "", body: "" });
                toast.success("Your Task is Added!")
                toast.error("Your Task is Not Saved! Please Signup")
            }

        }

    }
    const del = async (Cardid) => {

        if (id) {
            await axios.delete(`http://localhost:1000/api/v2/deleteTask/${Cardid}`, { data: { id: id } }).then((response) => {
                toast.success("Your Task is Deleted")
            })

        } else {
            toast.error("Please Signup First")

        }

    };
    const dis = (value) => {
        console.log(value);
        document.getElementById("todo-update").style.display = value;
    }

    const update = (value) => {
        updatedArray = Array[value];

    }

    useEffect(() => {
        if (id) {
            const fetch = async () => {
                await axios.get(`http://localhost:1000/api/v2/getTasks/${id}`)
                    .then((response) => {
                        setArray(response.data.list);
                    });
            };
            fetch();
        }
    }, [submit]);

    return (
        <>
            <div className='todo'>
                <ToastContainer />
                <div className="todo-main container d-flex justify-content-center align-items-center flex-column my-5">
                    <div className="d-flex flex-column todo-inputs-div w-100 p-1">
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
                    <div className='w-lg-50 w-100 d-flex justify-content-end my-3'>
                        <button className="home-btn px-2 py-1" onClick={submit}>Add</button>
                    </div>
                </div>
                <div className="todo-body">
                    <div className="container-fluid">
                        <div className="row">
                            {Array &&
                                Array.map((item, index) => (
                                    <>
                                        <div className="col-lg-3 col-11 mx-lg-5 mx-3 my-2" key={index}>
                                            <TodoCards title={item.title} body={item.body} id={item._id} delid={del}
                                                updateId={index}
                                                toBeUpdate={update}
                                                display={dis} />
                                        </div>

                                    </>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="todo-update" id='todo-update'>
                <div className="container update">
                    <Update display={dis} update = {updatedArray} />
                </div>
            </div>
        </>
    )
}
export default Todo
