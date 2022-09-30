import React from 'react';
import './Menu.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menu = ({ showMenu }) => {


    let totalTime = 0;
    for (const t of showMenu) {
        totalTime = totalTime + t.time;
    }

    const notify = () => {
        toast.warn('Activity Completed', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className='menu'>
            <div className='pic-name'>
                <h2>Fahim Ferdous</h2>
            </div>
            <div className='info'>
                <div>
                    <h4>75kg</h4>
                    <h5>Weight</h5>
                </div>
                <div>
                    <h4>5'7"</h4>
                    <h5>Height</h5>
                </div>
                <div>
                    <h4>25years</h4>
                    <h5>Age</h5>
                </div>
            </div>
            <h2>Add A Break</h2>
            <div className='break'>
                <button className='button-time'>10s</button>
                <button className='button-time'>20s</button>
                <button className='button-time'>30s</button>
                <button className='button-time'>40s</button>
            </div>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <h4>Exercise time: {totalTime}s</h4>
            </div>
            <div className='break-time'>
                <h4>Break time</h4>
            </div>
            <button onClick={notify} className='btn-complete'>Activity Completed</button>
            <ToastContainer
                theme='colored'
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Menu;