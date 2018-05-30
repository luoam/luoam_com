var nebulas = require("nebulas"),
    Utils = nebulas.Utils,
    neb = new nebulas.Neb();
//Testnet:
// var ContractAddress = "n1jp8wEdqeG1MR3FnQnYqvpwoN1Qn84KmTe";
// var chainId = "1001";
// var initAddress = "n1LRdxLWijiqci8zTF72o84y7npUBrizp8a";
// neb.setRequest(new nebulas.HttpRequest("https://testnet.nebulas.io"));

//Mainnet:
var ContractAddress = "n1edWnif5Z8DftEnd4hcwzEFBRjnzcDsY1b";
var chainId = "1";
var initAddress = "n1Lvduf7mV6NBXwi43ahP3RqRKrnp6jHa8D";
neb.setRequest(new nebulas.HttpRequest("https://mainnet.nebulas.io"));