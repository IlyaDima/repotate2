import Web3 from 'web3';

import abi from './abi';

// TODO
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/2c2e371df87b41e4bed3c5fbd628ed9d"));
const contractAddress = '0x8cEBCF6620a4B77de67628593Cb5ae67f956CA45';
// const contractAddress = '0x3b922B37D3746315EED949C3c33b273BBA54B35f';
const contract = new web3.eth.Contract(abi, contractAddress);

export const getTotalSupply = async () => {
  return await contract.methods.totalSupply().call();
}

export const getMaxSupply = async () => {
  return await contract.methods.maxSupply().call();
}

export const getRaffleStatus = async () => {
  return await contract.methods.raffleSaleActive().call();
  // return await contract.methods.raffaleSaleActive().call();
}

export const getPresaleStatus = async () => {
  return await contract.methods.presaleActive().call();
}

export const getPublicStatus = async () => {
  return await contract.methods.publicSaleActive().call();
}

// const modValue = (count, value) => {
//   console.log((parseFloat(value) * count).toFixed(2))
//   return (parseFloat(value) * count).toFixed(2);
// };

// export const mintPublic = async (count) => {
//   const transactionParams = {
//     to: contractAddress,
//     from: account,
//     value: web3.utils.toHex(web3.utils.toWei(modValue(count, '0.15'), 'ether')),
//     data: contract.methods.mint(count).encodeABI()
//   };

//   return await ethereum.request({
//     method: 'eth_sendTransaction',
//     params: [transactionParams]
//   })
// }

// export const mintRaffle = async (count, proof) => {
//   const { ethereum } = window;
//   const transactionParams = {
//     to: contractAddress,
//     from: ethereum.selectedAddress,
//     value: web3.utils.toHex(web3.utils.toWei(modValue(count, '0.15'), 'ether')),
//     data: contract.methods.raffleMint(count, proof).encodeABI()
//   };
//   return await ethereum.request({
//     method: 'eth_sendTransaction',
//     params: [transactionParams]
//   })
// }

// export const mintWL = async (count, proof) => {
//   const { ethereum } = window;
//   const transactionParams = {
//     to: contractAddress,
//     from: ethereum.selectedAddress,
//     value: web3.utils.toHex(web3.utils.toWei(modValue(count, '0.15'), 'ether')),
//     data: contract.methods.presaleMint(count, proof).encodeABI()
//   };
//   return await ethereum.request({
//     method: 'eth_sendTransaction',
//     params: [transactionParams]
//   })
// }

// export const mintMod = async (count, proof) => {
//   const { ethereum } = window;
//   const transactionParams = {
//     to: contractAddress,
//     from: ethereum.selectedAddress,
//     data: contract.methods.modMint(count, proof).encodeABI()
//   };
//   return await ethereum.request({
//     method: 'eth_sendTransaction',
//     params: [transactionParams]
//   })
// }

// export const mintOG = async (count, proof) => {
//   const { ethereum } = window;
//   const transactionParams = {
//     to: contractAddress,
//     from: ethereum.selectedAddress,
//     value: web3.utils.toHex(web3.utils.toWei(modValue(count, '0.14'), 'ether')),
//     data: contract.methods.ogPresaleMint(count, proof).encodeABI()
//   };
//   return await ethereum.request({
//     method: 'eth_sendTransaction',
//     params: [transactionParams]
//   })
// }

// export const getToken = async (address) => {
//   return await contract.methods.walletOfOwner(address).call();
// }

// export const getTokenUri = async (tokenId) => {
//   return await contract.methods.tokenURI(tokenId).call();
// }
