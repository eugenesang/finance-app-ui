import { useState } from 'react';
import OptionsPage from './pages/Options';
import "./styles/main.css"
import SuccessfulRefNo from './pages/SuccessfulRefNo';
import EWalletTransaction from './pages/EWalletTransaction';
import CashSendPage from './pages/CashSendPage';
import ConfirmationPage from './pages/ConfirmationPage';
import NedBankPage from './pages/NedBank';

function App() {
  const ReadyOptionsPage = ()=>(<OptionsPage 
    refNoPage={openSuccessfulRefNoPage} 
    eWalletPage={openEWalletPage}
    cashSend={openCashSend}
    confirmationPage={openConfirmationPage}
    nedBankPage={openNedBank}
    />)
  const [content, setContent] = useState(<ReadyOptionsPage/>);
  function backToHome(){
    setContent(<ReadyOptionsPage/>);
  }
  function openSuccessfulRefNoPage(){
    setContent(<SuccessfulRefNo backHome={backToHome}/>)
  }
  function openEWalletPage(){
    setContent(<EWalletTransaction backHome={backToHome}/>)
  }
  function openCashSend(){
    setContent(<CashSendPage backHome={backToHome} />)
  }
  function openConfirmationPage(){
    setContent(<ConfirmationPage backHome={backToHome} />)
  }
  function openNedBank(){
    setContent(<NedBankPage backHome={backToHome} />)
  }
  return (
    <div className="App">
     {content && content}

     <div className="home-button-container">
      <button>BUTTON</button>
     </div>
    </div>
  );
}

export default App;
