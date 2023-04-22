import './App.css';
import algosdk from "algosdk";
import { useEffect } from 'react';

// Bitcoin Logo
import logo from './Logo.png';
// Celtics Logo
//import Clogo from './CLogo.png';
// Hawks Logo
//import Hlogo from './HLogo.png';

// Wallet Connect
import { DeflyWalletConnect } from '@blockshake/defly-connect';

// deflywallet instantiating
const deflywallet = new DeflyWalletConnect()

// algoClient
const algod_address = "https://node.algoexplorerapi.io" 
const algod_token = "" 
const headers = {"X-API-Key": algod_token }
const algodClient = new algosdk.Algodv2(algod_token, algod_address, headers);

//get address
const address = localStorage.getItem('address');

//MaintNet
const voteAddress1 = 'WMUU2ORNPYDKXYCQTZZN3HSS367TDKYYR7MGO4DHHJGWJWQVPSNBHNPDPU'
const voteAddress2 = 'THVZOP7FWCQO37QLNO26DFANRP7ZJIGZI5UHPOXK6BB232MVOKGRX2QSLQ'

// Asset ID
// Bitcoin ID
const ASSET_ID = 386192725;

// Algorand Wallet
// Wallet Connect
async function walletConnect() {
  const newAccounts= await deflywallet.connect()
  localStorage.setItem("address", newAccounts[0]);
  window.location.reload()
  }
// wallet disconnect
const disconnect = () => {
  deflywallet.disconnect()
  localStorage.removeItem("address");
  window.location.reload()
  }
//////////////////////////////////

/////////////////////////
const vote_transaction1 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress1,
      amount: 1000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await deflywallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

/////////////
const vote_transaction2 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress2,
      amount: 1000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await deflywallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }


(async () => {
  let account_info7 = (await algodClient.accountInformation(voteAddress1).do());
  let asset_value7 = account_info7['assets']
  let asset_amount7 = asset_value7[0]["amount"]
  let asset_amount13 = asset_amount7 
  document.getElementById('message8').textContent = asset_amount13 + "  Sats"

  let account_info29 = (await algodClient.accountInformation(voteAddress2).do());
  let asset_value29 = account_info29['assets']
  let asset_amount29 = asset_value29[0]["amount"]
  let asset_amount33 = asset_amount29 
  document.getElementById('message9').textContent = asset_amount33 + "  Sats"

  })().catch(e => {
    console.log(e);
  });


// React functions must return a React component
function App() {
  useEffect(() => {
    deflywallet.reconnectSession().then((accounts) => {
      if (accounts.length) {
        localStorage.setItem("address", accounts[0]);
      }
      deflywallet.connector?.on("disconnect", () => {
        localStorage.removeItem("address");
      });
    })
    .catch((e) => console.log(e));
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <h1>
          <div id = "displaytext" style={{ color: "orange" }}> Bitcoin Bets </div>
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <a href="">
              <button id='button2'>Rules</button>
          </a>
           <button id='button1' onClick={walletConnect}> Connect</button>
           <button id='button2' onClick={disconnect}> Disconnect</button>
          <h3 id = "displaytext" style={{ color: "orange" }}> ______________________ </h3>
        </p>
        </p>
        <div>
          <h3 id = "displaytext" style={{ color: "orange" }}> NBA Playoffs Eastern Conferance </h3>
          <break>
          <h4 id = "displaytext" style={{ color: "orange" }}> Bets End Monday April 24th </h4>
        </break>
          <h4 id = "displaytext" style={{ color: "orange" }}> Celtics </h4>
          <h5 id='message8'></h5>
          <div>
            <button id='button3' onClick={vote_transaction1}>Bet</button>
          </div>
          <h4 id = "displaytext" style={{ color: "orange" }}> Hawks </h4>
          <h5 id='message9'></h5>
          <div>
            <button id='button3' onClick={vote_transaction2}>Bet</button>
          </div>
        </div>
        <break>
        <h3 id = "displaytext" style={{ color: "orange" }}> ______________________ </h3>
        </break>
      </header>
    </div>
  );

}
export default App
