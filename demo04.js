// db.workmate.find({"skill.skillOne":'HTML+CSS'},{name:1,"skill.skillOne":1,"_id":0})//1代表true 0false

// 小于($lt):英文全称less-than
// 小于等于($lte)：英文全称less-than-equal
// 大于($gt):英文全称greater-than
// 大于等于($gte):英文全称greater-than-equal
// 不等于($ne):英文全称not-equal 我们现在要查找一下，公司内年龄小于30大于25岁的人员。看下面的代码。

// db.workmate.find({age:{$lt:30,$gte:15}},{name:true,age:true,"skill.skillOne":true,_id:false})


// var  startDate = new Date("01/01/2019");
// db.workmate.find({regeditTime:{$gte:startDate}},{name:true,age:true,"skill.skillOne":true,_id:false})


// $in  //修饰符 查询多条件
//$nin
// db.workmate.find({age:{$in:[25,33]}},{name:1,age:1,"skill.skillOne":true,_id:0})


//一个key 或者多个key
// $or 或 $and并
// db.workmate.find(
//   {$and:[
//     {age:{$gte:30}},
//     {"skill.skillThree":"PHP"}
//   ]},
//   {name:1,age:1,"skill.skillThree":1,_id:0}
// )

// $not//除了查询条件之外的值
// db.workmate.find(
//   {age:{$not:{$lte:30,$gte:20}}},
//   {name:1,age:1,"skill.skillThree":1,_id:0}
// )

// [] 完全匹配
// db.workmate.find(
//   {interest:"写代码"},
//   {name:1,age:1,"skill.skillThree":1,_id:0,interest:1}
//   )

  // $all
  // db.workmate.find(
  //   {interest:{$all:["看电影","看书"]}},
  //   {name:1,age:1,"skill.skillThree":1,_id:0,interest:1}
  //   )
// $in-数组的或者查询 或者
//  db.workmate.find(
//     {interest:{$in:["看电影","看书"]}},
//     {name:1,age:1,"skill.skillThree":1,_id:0,interest:1}
//     )

// $size 数组个数查询
//  db.workmate.find(
//     {interest:{$size:5}},
//     {name:1,age:1,"skill.skillThree":1,_id:0,interest:1}
//     )

// $slice-显示选项
// db.workmate.find(
//   {},
//   {name:1,age:1,_id:0,interest:{$slice:2}}
// )
db.workmate.find(
  {},
  {name:1,age:1,_id:0,interest:{$slice:-1}}
)