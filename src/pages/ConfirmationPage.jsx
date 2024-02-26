import React from 'react';

const ConfirmationPage = ({ backHome, edit }) => {
    return (<div id="confirmation-page">
        <nav>
            <div className="left">
                Confirmation
            </div>
            <div className="right" onClick={backHome}>DONE</div>
        </nav>
        <div className="content">
            <div className="from">
                <p className='start-text'>From</p>
                <article className="card">
                    <div className="head">
                        <div className="left one">
                            <i className="fas fa-wallet"></i>
                        </div>
                        <div className="right">
                            <div className="name">MYMOACC</div>
                            <div className="acc">+27 74 801 540 1</div>
                        </div>
                    </div>
                    <div className="amount-strip">R 3 800.00</div>
                    <div className="foot">
                        <div className="rl">
                            <div className="right">Available balance</div>
                            <div className='left fee'>R 480.98</div>
                        </div>
                    </div>
                </article>
            </div>
            <div className="to">
                <p className='start-text'>To</p>
                <article className='card'>
                    <div className="head">
                        <div className="left two">
                            <i className="fas fa-circle-check"></i>
                        </div>
                        <div className="right">
                            <div className="name">ms brown</div>
                            <div className="acc">+27 71 825 6085</div>
                        </div>
                    </div>
                    <div className="transaction-details">
                        <div className="rl">
                            <div className="right">Amount</div>
                            <div className="left">R 3 800.00</div>
                        </div>
                        <div className="rl">
                            <div className="right">Voucher number</div>
                            <div className="left">8359 337170</div>
                        </div>
                        <div className="rl">
                            <div className="right">Cash Collection PIN</div>
                            <div className="left">2540</div>
                        </div>
                        <hr />
                        <div className="rl">
                            <div className="right">My reference</div>
                            <div className="left">ms brown</div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <footer>
            <div className="container">
                <div className="right">Voucher created</div>
                <div className="left">VIEW VOUCHERS</div>
            </div>
        </footer>
    </div>);
}

export default ConfirmationPage;