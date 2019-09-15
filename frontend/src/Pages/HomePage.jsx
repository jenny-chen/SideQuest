import React from 'react'
import Navbar from '../Components/Navbar';
import logo from '../logo.png';

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <div className='container my-5 text-center'>
                <img src={logo} width='80%' />
                <div className='my-5'>
                    <h4>A place for people who don't know what side projects to make.</h4>
                </div>
                <div className='mt-5'>
                    <a className='btn btn-secondary mr-3' href='/search'>Browse Projects</a>
                    <a className='btn btn-secondary ml-3' href='/submit'>Submit Project</a>
                </div>
            </div>
        </div>
    )
}
