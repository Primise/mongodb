var userNAme = 'primise';
var timeStamp = Date.parse(new Date());

var jsonDatabase={"loginUser":userNAme,"loginTime":timeStamp};
var db = connect('log');
db.login.insert([
  {"_id":1},
  {"_id":2},
  {"_id":3}
]);
print(`print success`)

