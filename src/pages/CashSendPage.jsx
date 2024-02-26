import React from 'react';
import img from "../assets/cashSend-successful-graphic.jpg";

const CashSendPage = ({backHome}) => {
    return ( <div id="cash-send-page">
        <div className="header">
            <img src={img} alt="CashSend grphic" />
        </div>
        <div className="details">
            <h2>CashSend Successful</h2>
            <p className="transaction-details">You just sent Ms Brown Zinhle R 1 500,00 on 084 527 9961 .</p>
            <p>The ATM access PIN is 585264</p>
        </div>
        <div className="buttons">
            <button className="done" onClick={backHome}>Done</button>
            <button className="share">Share ATM access PIN</button>
        </div>
    </div> );
}
 
export default CashSendPage;