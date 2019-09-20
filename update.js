var db = connect('company');
var json3={
  name:"huahua1",
  age:25,
  sex:0,
  job:"ui",
  skill:{
    skillOne:'PhotoShop',
    SkillTwo:'UI',
    SkillThree:'word+excel+ppt'
  },
  regeditTime:new Date()
}



db.workmate.update({"name":"huahua"},json3);
print('update is success')