var startTime = new Date().getTime();
var db = connect("company");
var rs = db.randomInfo.find({userName:'9girdkdz3th'})
rs.forEach(rs => {
   printjson(rs)
});

var runTime = new Date().getTime() -startTime;

print (`demo is run time ${runTime} ms`)


// 建立索引

// db.randomInfo.ensureIndex({userName:1})