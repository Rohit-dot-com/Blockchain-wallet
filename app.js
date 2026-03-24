const { Web3 } = require('web3');

// Connect to Ethereum via public node
const web3 = new Web3("https://mainnet.infura.io/v3/9c876b73a268494d92f53bdb2757737d");

// Function to test connection
async function checkConnection() {
    const blockNumber = await web3.eth.getBlockNumber();
    console.log("Latest Block Number:", blockNumber);
}
checkConnection();