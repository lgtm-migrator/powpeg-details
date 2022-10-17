const getPowpegDetails = require('../powpeg-details');
const rskNetworkSettings = require('rsk-network-settings');
const networkParser = require('./network');
const Web3 = require('web3');

(async () => {
    try {
        const network = process.argv[2] || 'mainnet';
        const host = networkParser(network);
        console.log(`Going to connect to ${host}`);
        const web3 = new Web3(host);
        const networkSettings = rskNetworkSettings.getNetworkSettingsForThisNetwork(network);
        
        const result = await getPowpegDetails(web3, network, networkSettings);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
