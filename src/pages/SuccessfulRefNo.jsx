import React from 'react';

const SuccessfulRefNo = ({ backHome, editContent }) => {
    return (<div className="ref-no-page" id="ref-no-page">
        <div className="body">
            <div className="header">
                <p>Successful</p>
            </div>
            <div className="check-mark">
                <div className="rounded-border">
                    <i className="fas fa-check"></i>
                </div>
            </div>
            <div className="content">
                <div className="ref-no">
                    <div className="txt">Reference Number</div>
                    <div className="code">C0737303859</div>
                </div>
            </div>
            <div className="msg-card">
                <div className="left-strip"></div>
                <div className="center-content">
                    <p>We no longer SMS the reference number to you</p>
                    <p>Tap share Reference Number bellow to send the details</p>
                </div>
                <div className="right-icon">
                    <div className="icon-container">
                        <i className="fas fa-circle-info"></i>
                    </div>
                </div>
            </div>
            <div className="points">
                <ul>
                    <li>Send the secret code in a separate message</li>
                    <li>Cash not collected within 30 days will be paid back into our account</li>
                </ul>
                <button className="history">View History</button>
            </div>
            <div className="buttons">

                <button className="share">Share Reference Number</button>
                <button>Done</button>
            </div>
        </div>
        <div className="bottom-section"></div>
        <nav className="navbar">
            <div className="tab" onClick={backHome}>
                <div className="icon"><i className="fas fa-home"></i></div>
                <div className="text">Home</div>
            </div>
            <div className="tab">
                <div className="icon"><i className="fas fa-credit-card"></i></div>
                <div className="text">Cards</div>
            </div>
            <div className="tab active">
                <div className="icon"><i className="fa-solid fa-down-left-and-up-right-to-center"></i></div>
                <div className="text">Transact</div>
            </div>
            <div className="tab">
                <div className="icon"><i className="fas fa-comment-dots"></i></div>
                <div className="text">Messages</div>
            </div>
            <div className="tab">
                <div className="icon"><i className="fas fa-binoculars"></i></div>
                <div className="text">Explore</div>
            </div>
        </nav>
    </div>);
}

export default SuccessfulRefNo;