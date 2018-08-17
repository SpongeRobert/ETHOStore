window.addEventListener('load', function() {
            if (typeof web3 !== 'undefined') 
            {
            startApp(web3);
            } 
            else 
            { 
              $('#metamask_alert_message').html(gametext.error[0]);
              $('#metamask_alert').modal('show');
            }
            });
   // WEB3 INIT DONE!

const contract_address = "0x344dAF9D49b777Dc783183030552C58a1D7757a4";
var account =  web3.eth.defaultAccount;
store = [];

function startApp(web3) 
{
  web3 = new Web3(web3.currentProvider);

  contract_init(); // STORE LOAD!
}    

function contract_init()
{
  if(typeof web3.eth.defaultAccount  != 'undefined')
    {
      $('#user_address').html(web3.eth.defaultAccount);

      store.user_address = web3.eth.defaultAccount;

      contract = web3.eth.contract(abi).at(contract_address);
      
      contract.productID.call({},function(err,ress)
      {
        if(!err)
        {
          store.item_count = ress.toNumber();
          console.log("Items: "+ress);
        }
      });
  }
  else // No Metamask Address Found!
  {
    $('#metamask_alert_message').html(gametext.error[1]);
    $('#metamask_alert').modal('show');
  }  

}

function update_shelf()
{      
       let counter = ;

       $('#last_clickers1').html('');

       let content1 = "";

       for (let index = 1; index <= 10; index++)
       {
        number = index+1;  

        if( parseInt(game1.leaderboard[index]) == parseInt(account)){
            content1 += '<tr><th class="text-dark" scope="row">'+index+'<td> <b>Your account</b></td><td><b>'+game1.winning[index]+'</td></b></tr>';
        }
        else
        {
            content1 += '<tr><th class="text-dark" scope="row">'+index+'<td><div style="width: 220px; overflow: hidden;">'+game1.leaderboard[index]+'</div></td><td>'+game1.winning[index]+'</td></tr>';  
        }


       }  


      function click_the_button1()
      {

        if(typeof web3.eth.defaultAccount  != 'undefined')
        {

          contract = web3.eth.contract(abi).at(contract_address);

          web3.eth.sendTransaction({from: account, to: contract_address, value: game1.clickprice, gas: 1500000}, function(err, transactionHash){
            if (!err)
              console.log(transactionHash);
          });
        }
        else // No Metamask Address Found!
        {
          $('#metamask_alert_message').html(gametext.error[1]);
          $('#metamask_alert').modal('show');
        }  

      }
}