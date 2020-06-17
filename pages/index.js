import React ,{Component} from 'react';
import web3 from '../web3.js';
import Storage from '../ethereum/build/contracts/Storage.json'; 
import Layout from '../components/Layout';
import Error from './_error.js'
class App extends Component{
    static async getInitialProps(){
        let errorOccured=false;
        let accounts,networkId,StorageDeployedAddress,StorageInstance,name;
        try{
            accounts = await web3.eth.getAccounts();
            networkId = await web3.eth.net.getId();
            StorageDeployedAddress = Storage.networks[networkId].address;
            StorageInstance = await new web3.eth.Contract(Storage.abi, StorageDeployedAddress);
            name = await StorageInstance.methods.name().call();
            
        }catch(err){
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
              );
              console.log(error);
            errorOccured = true;
        }
        return {accounts, StorageInstance,name,errorOccured}
    }

    render(){
        const {accounts, StorageInstance,name,errorOccured}=this.props;
        if(errorOccured === true){
            return <Error />
        }
        return(
            <Layout accounts={accounts}>
                <h2>Edit index.js file </h2>
            </Layout>
        )
    }
}
export default App;