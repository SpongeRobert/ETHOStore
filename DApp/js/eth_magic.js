//$( document ).ready(function()
window.addEventListener('load', function()
{
  if (typeof web3 !== 'undefined') 
    {
      window.web3 = new Web3(web3.currentProvider);
      startApp();
    } 
  else 
    { 
      $('#metamask_alert_message').html(text.error[0]);
      $('#metamask_alert').modal('show');
    }
});
   // WEB3 INIT DONE

function startApp()
{
  if(typeof web3.eth.defaultAccount  != 'undefined')
    {
      store.user_address = web3.eth.defaultAccount;
      $('#user_address').html(store.user_address);
      store.contract = web3.eth.contract(abi).at(contract_address);

      store.contract.productID.call({},function(err,ress)
      {
        if(!err)
          {
            store.item_count = ress.toNumber();
            console.log("contract_init. items="+store.item_count);
            update_shelf();
          }
      });
    }
  else // No Metamask Address Found!
    {
      $('#metamask_alert_message').html(text.error[1]);
      $('#metamask_alert').modal('show');
    }  

}

function click_the_button1()
{
  if(typeof web3.eth.defaultAccount  != 'undefined')
    {
      contract = web3.eth.contract(abi).at(contract_address);
      web3.eth.sendTransaction({from: account, to: contract_address, value: game1.clickprice, gas: 1500000}, function(err, transactionHash)
        {
          if (!err)
            console.log(transactionHash);
        });
    }
  else // No Metamask Address Found!
    {
      $('#metamask_alert_message').html(text.error[1]);
      $('#metamask_alert').modal('show');
    }  
}

