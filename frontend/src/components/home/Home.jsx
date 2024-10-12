import React from 'react'
import "./Home.css"
const Home = () => {
    return (
        <div className='home d-flex justify-content-center align-items-center'>
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <h1 className='text-center'>
                    Lorem ipsum dolor <br /> sit amet consectetur.
                </h1>
                <p className='text-center'>
                    Lorem ipsum dolor sit amet consectetur <br /> Nemo esse ex nam obcaecati ullam laboriosam.
                </p>
                <button className="home-btn p-2">Make Todo List</button>
            </div>
        </div>
    )
}

export default Home
