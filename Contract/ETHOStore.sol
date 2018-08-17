pragma solidity ^0.4.8;

//Smart-contract of blockcahin online store
//  first created for Ether-1 cryptocurrency platform
//  https://ether1.org/

contract ETHOStore {

    function deleteContract() public onlyOwner {
        selfdestruct(owner);
    }

    string public store_name;
    address internal owner; // owner of the contract
    address internal operator;
    mapping (uint32 => Order) public orders;
    uint32 internal orderID;
    mapping (uint16 => Product) public products;
    uint16 internal productID;
    uint256 internal profit; // temp var
    uint256 internal profit_max; //Activates profit payout to profitDistributionContract
    address internal profitDistributionContract;
 
    event ProfitPaid(uint256 paid, uint blocknumber);
    event ProductRegistered(uint16 productID);

    struct Product {
        string name;
//        string[] option1;
//        string[] option2;
        uint256 price;
        uint16 default_amount;
        bool productStatus; // enable or disable product displaying at online store
    }

    

    struct Order {
        address adr;        // customer address
        bytes orderData;
        uint256 paidSum;
        uint8 orderStatus;  // 1-paid by customer, 2-in progress, 3-sent, 4-cancelled 
    }

    constructor () public {
        owner = msg.sender;
        operator = msg.sender;    

        store_name = "Ether-1 online store";
        profit = 0;
        profitDistributionContract = msg.sender;
        profit_max = 0 ether;

        orderID = 0;
        productID =0;

        if (address(this).balance > 0) revert();
    }

    function changeProfit(uint new_profit_max) public onlyOwner {
         if (new_profit_max != uint(0)) {
            profit_max = new_profit_max*1000000000000000000;
         }
    }

//    function refund() public onlyOwner {
//         if (player_count > 0) {
//            for (uint8 r = 1; r <= player_count; r++) {
//                gamblers[r].transfer(bet);
//            }
//            player_count = 0;
//         }
//         else return();
//    }

    function payProfit() public onlyOwnerOrOperator {
        if (profitDistributionContract > 0 && profit >= profit_max) {
            uint256 paid = address(this).balance;
            if (profitDistributionContract.send(paid) == false) revert();
            emit ProfitPaid(paid, block.number);
            profit = 0;
        }
    }

    function setProfitDistributionContract(address contractAddress) public onlyOwner {
      profitDistributionContract = contractAddress;
    }

    function registerProduct(string name,
                             uint256 price, uint16 default_amount, bool productStatus) public
                                         onlyOwner {
        productID++;                                             
        products[productID] = Product(name, price, default_amount, productStatus);
        emit ProductRegistered(productID);
    }

    function changeProductStatus (uint16 changedProductID, bool newProductStatus) public onlyOwnerOrOperator {
        products[changedProductID].productStatus = newProductStatus;
    }

    function changeOrderStatus (uint16 changedOrderID, uint8 newOrderStatus) public onlyOwnerOrOperator {
        if (changedOrderID > 0 && changedOrderID <= orderID && newOrderStatus > 0 && newOrderStatus < 5){
            orders[changedOrderID].orderStatus = newOrderStatus;
        }
        else revert();
    }

    function () payable public {
        if (msg.data.length == 0) revert();
        orderID++;
        orders[orderID].adr = msg.sender;
        orders[orderID].orderData = msg.data;
        orders[orderID].paidSum = msg.value;
        orders[orderID].orderStatus = 1;
    }

//    function getOrderByID(uint256 id) {
//        return orders[id];
//    }

    modifier onlyOwner() 
    {
       if (msg.sender != owner) revert();
       _;
    }

    modifier onlyOwnerOrOperator() 
    {
       if (msg.sender != owner && msg.sender != operator) revert();
       _;
    }

    function changeOperator(address newOperator) public onlyOwner
    {
       operator = newOperator;
    }


}