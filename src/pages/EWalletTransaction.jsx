import React from 'react';

const EWalletTransaction = ({ backHome, editContent }) => {
    return (
        <div id="e-wallet">
            <nav>
                <div className="left">
                    eWallet
                </div>
                <div className="right">
                    <i className="fas fa-xmark" onClick={()=>{backHome()}}></i>
                </div>
            </nav>
            <div className="content">
                <p className='opening-text'>YOU HAVE SUCCESSFULLY</p>
                <div className="transaction-info">
                    <p><span className="key">Sent: </span><span className="val">R1,500.00</span></p>
                    <p><span className="key">To: </span><span className="val">0786496786</span></p>
                    <p><span className="key">From: </span><span className="val">Slhtrading & Projects</span></p>
                </div>
                <div className="reference-no">
                    <p><span className="key">Reference: </span><span className="val">VODSZZK5PJTL</span></p>
                </div>
                <div className="thankyou-icon">
                    <div className="icon">
                        <svg viewBox="0 0 512 512">
                            <circle
                                cx={256}
                                cy={256}
                                r={246}
                                fill="none"
                                strokeWidth="20px"
                                strokeLinejoin="round"
                                stroke="white"
                                strokeLinecap="round"
                            />
                            <polyline
                                points="115.54 268.77 200.67 353.9 396.46 158.1"
                                fill="none"
                                strokeWidth="20px"
                                strokeLinejoin="round"
                                stroke="white"
                                strokeLinecap="round"
                            />
                        </svg>

                    </div>
                    <div className="text">
                        <p>Thank</p>
                        <p>you</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button onClick={()=>{ backHome()}}>
                    Finish
                </button>
            </div>
        </div>
    );
}

export default EWalletTransaction;