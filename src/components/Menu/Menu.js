import React from 'react';
import './Menu.css'

const Menu = ({ showMenu }) => {

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
                <h4>Exercise time {showMenu.length}s</h4>
            </div>
            <div className='break-time'>
                <h4>Break time</h4>
            </div>
            <button className='btn-complete'>Activity Completed</button>
        </div>
    );
};

export default Menu;