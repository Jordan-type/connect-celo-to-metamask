import React, { useEffect, useState, } from 'react'
import Web3 from 'web3';
import Button from '../components/Button';
import Navbar from '../components/Navigation/Navbar';

// celo network params 
const NETWORK_PARAMS = {
  chainName: "Celo",
  nativeCurrency: {
    name: "Celo",
    symbol: "CELO",
    decimals: 18,
  },
};

// celo mainnet params
const MAINNET_PARAMS = {
    ...NETWORK_PARAMS,
    chainId: "0xa4ec", // 42220
    rpcUrls: ["https://forno.celo.org"],
    blockExplorerUrls: ["https://explorer.celo.org/"],
}

const ALFAJORES_PARAMS = {
    ...NETWORK_PARAMS,
    chainId: "0xaef3", // 44787
    rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
    blockExplorerUrls: ["https://alfajores-blockscout.celo-testnet.org/"],
}

//cUSD params for alfajores testnet
const TOKEN_PARAMS = {
    type: "ERC20",
    options: {
      address: "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
      symbol: "cUSD",
      decimals: 18,
    },
}


function Home() {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);


    const loadWeb3 = async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        const web3 = new Web3(window.ethereum);
        setWeb3(web3);
      }
    }

    // connect to meta mask 
    const connectMetaMask = async ()  => {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        console.log('connectMetaMask');
        if (web3) {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
            console.log('accounts', accounts);
        }
    }

    // adding and switching networks
    const addMainnet = async () => {
        await window.ethereum.request({ 
            method: "wallet_addEthereumChain",
            params: [MAINNET_PARAMS],
         })
    }

    const addAlfajores = async () => {
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [ALFAJORES_PARAMS],
        })
    }

    // adding cUSD to MetaMask
    const addToken = async () => {
        window.ethereum.request({
            method: "wallet_watchAsset",
            params: TOKEN_PARAMS,
        })
    }

    // send celo to an address
    // Transaction params
    const TX_PARAMS = {
        to: "0x5038ae19CDf0B623e6e8015249ecF58A1165D653",
        from: window.ethereum.selectedAddress,
        value: "0x11111111111111",
    }
    const send = async() => {
        let txID = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [TX_PARAMS],
        })

        console.log('txID', txID);
    }


//   useEffect(() => {
//     loadWeb3();
//     }, []);

  return (
      <>
      <Navbar />
                      
      <main className="content">
        <Button onClick={connectMetaMask} className="button nav-button btn-sm mx-4" content="Connect MetaMask" tabIndex="4"/>
        <Button onClick={addMainnet} className="button nav-button btn-sm mx-4" content="Connect to Celo Mainnet" tabIndex="4"/>
        <Button onClick={addAlfajores} className="button nav-button btn-sm mx-4" content="Connect to Celo Alfajores Testnet" tabIndex="4"/>
        <Button onClick={addToken} className="button nav-button btn-sm mx-4" content="Add  cUSD" tabIndex="4"/>
        <Button onClick={send} className="button nav-button btn-sm mx-4" content="Send CELO (Alfajores)" tabIndex="4"/>
      </main>
      </>
      
  )
}

export default Home