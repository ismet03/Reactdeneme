import React from 'react'
import './css/baslık.css';

function Baslık() {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

            <div className='baslık' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='title'>YAZILIM</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <a href="https://www.instagram.com/pltwebtasarim/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" style={{ fontSize: '20px' }}></i>
                    </a>
                    <a href="https://www.facebook.com/Pltyzlmjns" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook" style={{ fontSize: '20px' }}></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Baslık