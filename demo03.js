// db.workmate.update({"name":"huahua"},{$unset:{age:''}})
// db.workmate.update({"name":"huahua"},{$set:{age:19}})
// db.workmate.update({"name":"huahua"},{$inc:{age:-5}})//减 num类型
// db.workmate.update({},{$set:{interset:[]}},{multi:true});//查找到第一个继续查false 查找到第一个不查
// db.workmate.update({"name":"xiaowang1"},{$set:{age:20}},{upsert:true});//没有就添加， true  ; 没有就不添加false

// update数组修改器

// db.workmate.update({"name":"huahua"},{$push:{interset:"draw"}})
// db.workmate.update({"name":"huahua"},{$push:{"skill.skillFour":"draw"}})

// $ne查找是否存在
// db.workmate.update({"name":"huahua","interset":{$ne:"Game"}},{$push:{interset:"playGame"}})//有则不添加，没有则添加


// $addToSet 升级版的$ne
// db.workmate.update({"name":"huahua"},{$addToSet:{interset:"readBook"}})//没有则添加


// $each 批量添加

// var newInterSet = ['sing','code','dance','sleep'];
// db.workmate.update({"name":"huahua"},{$addToSet:{interset:{$each:newInterSet}}})

// $pop 删除数组值 
// 1:从数组末端进行删除
// -1 ：从数组开端进行删除
// db.workmate.update({"name":"huahua"},{$pop:{interset:1}})


//定位修改
// db.workmate.update({"name":"huahua"},{$set:{"interset.2":"code"}})



//findAndModify 修饰符   找到并修改 应答式操作
// db.集合.update 非应答式操作、

// db.runCommand//数据库执行命令的执行器
// false：第一句末尾的false是upsert的简写，代表没有此条数据时不增加;
// true：true是multi的简写，代表修改所有，这两个我们在前边课程已经学过。
// getLastError:1 :表示返回功能错误，这里的参数很多，如果有兴趣请自行查找学习，这里不作过多介绍。
// printjson：表示以json对象的格式输出到控制台
//  db.workmate.update({sex:1},{$set:{money:1000}},false,true)//第一个参数false 是upset的简写 代表没有此条数据不添加
//                                                             //true 是multi的简写 代表修改所有 
//  var result = db.runCommand({getLastError:1});//返回功能错误
// printjson(result)//以json 格式输出到控制台
// db.runCommand({ping:1})返回ok：1就代表链接正常。




// findAndModify属性值：

// query：需要查询的条件/文档
// sort: 进行排序
// remove：[boolean]是否删除查找到的文档，值填写true，可以删除。
// new:[boolean]返回更新前的文档还是更新后的文档。
// fields：需要返回的字段
// upsert：没有这个值是否增加。
// var myModify ={
//   findAndModify:'workmate',
//   query:{name:"primise"},
//   update:{$set:{age:15}},
//   new :true, //更新完成 需要查看结果 ,
//   fields:"age"
// }
// var resultMessage = db.runCommand(myModify);
// printjson(resultMessage)
