import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Update = ({ display, update }) => {
    useEffect(() => {
        setInputs({
            title: update.title,
            body: update.body,
    })
    }, [update])

    const [Inputs, setInputs] = useState({ title: "", body: "" })
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    }
    const submit = async () => {
        await axios.put(`http://localhost:1000/api/v2/updateTask/${update.id}`)
        console.log(Inputs);
        display("none")
    }
    return (
        <div className="p-5 d-flex justify-content-center align-items-start flex-column update" >
            <h3 >UpDate</h3>
            <input type="text" className="todo-inputs my-4 w-100 p-3" value={Inputs.title} name="name" onChange={change} />
            <textarea className="todo-inputs my-4 w-100 p-3" value={Inputs.body} name="body" onChange={change} />
            <div>
                <button className="btn btn-dark my-4" onClick={submit}>Update</button>
                <button className="btn btn-danger my-4 mx-3" onClick={() => { display("none") }}>close</button>
            </div>
        </div>
    )
}

export default Update
