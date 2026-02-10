const accountID = 14453;
let accountName = "Varun"
var accountEmail = "varun@gmail.com"
let accountCity = "jaipur"
let accountYear;

// accountID = 2 cannot be changed because it is const once defined can't be changed
/*
Prefer not to use var because of issue in block scope and funtional scope 
*/
accountEmail = "Raunik@gmail.com"
accountName = "Raunik"
accountCity = "Delhi"

console.table([accountEmail, accountName, accountCity, accountYear])
