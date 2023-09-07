import React from 'react'
import "./PopUp.css"



function PopUp({ message, close, stay, navigate }) {
    return (
        <div className='pop-background'>
            <div className='pop-body'>

                <p className='pop-text'>
                    {message}
                </p>

                <button onClick={closePopUp}>Go to Log In</button>

            </div>
        </div>
    )
}

export default PopUp