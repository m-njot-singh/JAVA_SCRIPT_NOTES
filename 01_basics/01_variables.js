const accountId = 12434
let accountEmail = "manjot@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail = "Man@google.com"
accountPassword = "2121221212"
accountCity ="Mansa"

// we dont use var because of scope problem


console.log(accountId);
console.table([accountId, accountEmail ,accountPassword,accountCity,accountState])
