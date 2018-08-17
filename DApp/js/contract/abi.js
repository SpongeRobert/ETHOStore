abi = [
    {
	"constant": false,
	"inputs": [
	    {
		"name": "newOperator",
		"type": "address"
	    }
	],
	"name": "changeOperator",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "changedOrderID",
		"type": "uint16"
	    },
	    {
		"name": "newOrderStatus",
		"type": "uint8"
	    }
	],
	"name": "changeOrderStatus",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "changedProductID",
		"type": "uint16"
	    },
	    {
		"name": "newProductStatus",
		"type": "bool"
	    }
	],
	"name": "changeProductStatus",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "new_profit_max",
		"type": "uint256"
	    }
	],
	"name": "changeProfit",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"anonymous": false,
	"inputs": [
	    {
		"indexed": false,
		"name": "paid",
		"type": "uint256"
	    },
	    {
		"indexed": false,
		"name": "blocknumber",
		"type": "uint256"
	    }
	],
	"name": "ProfitPaid",
	"type": "event"
    },
    {
	"anonymous": false,
	"inputs": [
	    {
		"indexed": false,
		"name": "productID",
		"type": "uint16"
	    }
	],
	"name": "ProductRegistered",
	"type": "event"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "deleteContract",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "payProfit",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "name",
		"type": "string"
	    },
	    {
		"name": "price",
		"type": "uint256"
	    },
	    {
		"name": "default_amount",
		"type": "uint16"
	    },
	    {
		"name": "productStatus",
		"type": "bool"
	    }
	],
	"name": "registerProduct",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "contractAddress",
		"type": "address"
	    }
	],
	"name": "setProfitDistributionContract",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"inputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
    },
    {
	"payable": true,
	"stateMutability": "payable",
	"type": "fallback"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "",
		"type": "uint32"
	    }
	],
	"name": "orders",
	"outputs": [
	    {
		"name": "adr",
		"type": "address"
	    },
	    {
		"name": "orderData",
		"type": "bytes"
	    },
	    {
		"name": "paidSum",
		"type": "uint256"
	    },
	    {
		"name": "orderStatus",
		"type": "uint8"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "",
		"type": "uint16"
	    }
	],
	"name": "products",
	"outputs": [
	    {
		"name": "name",
		"type": "string"
	    },
	    {
		"name": "price",
		"type": "uint256"
	    },
	    {
		"name": "default_amount",
		"type": "uint16"
	    },
	    {
		"name": "productStatus",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "store_name",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    }
];