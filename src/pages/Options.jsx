import React from 'react';
import referencePageImage from '../assets/reference-no-page.jpg';
import cashSendImg from "../assets/cashSend-successful.jpg";
import confirmationPage1 from "../assets/confirmation-page-1.jpg";
import nedBankImg from "../assets/nedbank-page.jpg";
import referenceSuccessPage from "../assets/reference-no-success-page.jpg";

const OptionsPage = ({
    refNoPage,
    eWalletPage,
    cashSend,
    confirmationPage
}) => {
    return ( <section id="options-page">
        <h1>Select page</h1>
        <div className="options">
            <div className="option">
                <h5>Reference Page</h5>
                <div className="img-container">
                    <img src={referencePageImage} alt="Reference page" />
                </div>
                <div className="buttons">
                    <button onClick={()=>{refNoPage()}}>View</button>
                    <button>Edit</button>
                </div>
            </div>
            <div className="option">
                <h5>eWallet Success Page</h5>
                <div className="img-container">
                    <img src={referenceSuccessPage} alt="Reference page" />
                </div>
                <div className="buttons">
                    <button onClick={()=>{eWalletPage()}}>View</button>
                    <button>Edit</button>
                </div>
            </div>
            <div className="option">
                <h5>CashSend Page</h5>
                <div className="img-container">
                    <img src={cashSendImg} alt="Reference page" />
                </div>
                <div className="buttons">
                    <button onClick={cashSend}>View</button>
                    <button>Edit</button>
                </div>
            </div>
            <div className="option">
                <h5>Transaction Confirmation Page</h5>
                <div className="img-container">
                    <img src={confirmationPage1} alt="Reference page" />
                </div>
                <div className="buttons">
                    <button onClick={confirmationPage}>View</button>
                    <button>Edit</button>
                </div>
            </div>
            <div className="option">
                <h5>NedBank Page</h5>
                <div className="img-container">
                    <img src={nedBankImg} alt="Reference page" />
                </div>
                <div className="buttons">
                    <button>View</button>
                    <button>Edit</button>
                </div>
            </div>
            
        </div>
    </section> );
}
 
export default OptionsPage;