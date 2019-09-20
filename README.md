## 存储结构不同

### 关系型数据库
 数据库>数据表>数据行

### MongoDB
  数据库>集合>文件


 ### MongoDB 基本命令

```
show dbs //显示已有数据库
use admin //进入数据库
show collections //显示数据库的集合
db //显示当前位置，也就是当前使用的数据库名称
```

### MongoDB数据操作基本命令

```
use db  //没有数据库建立数据库
db.collections.insert() //新建数据集合以及插入文件
db.集合.find //查找所有数据
db.集合.findOne //查找几个的第一条数据 notice:组合单词使用首字母小写的驼峰式命名法
db.集合.update //({查询的数据},{修改的条件})
db.集合.remove(条件)//删除文件
db.集合.drop（） //删除整个集合
db.dropDatabase() 删除整个数据库
```


# js编译数据 

```
var name = 'primise';
var timeStamp = Date.parse(new Date());
var age = 18;
var database = {"user":name,"age":age,"time":timeStamp}
var db = connect('primise')
db.user.insert(database);
print(`数据插入成功`)
```