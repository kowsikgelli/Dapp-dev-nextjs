const web3 = require('./web3.js');
const Storage =require('./ethereum/build/contracts/Storage.json');

let instance;
const init=async ()=>{
    const networkId = await web3.eth.net.getId();
    console.log(Storage.networks)
    instance = new web3.eth.Contract(Storage.abi,Storage.networks[networkId].address);
    return instnace
}

module.exports =  init();