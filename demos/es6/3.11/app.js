// class Preson{
//     constructor(sex,age){
//         this.sex=sex
//         this.age = age
//     }
//     getInfo(){
//         return this.sex + ','+this.age
//     }
// }
// let preson = new Preson('female','20')
// console.log('preson',preson)


function _Preson(sex,age){
    this.age = age
    this.sex = sex
}
_Preson.prototype.getInfo = function(){
    return this.sex + ','+this.age
}
let _Preson =new Preson1('man','20');
console.log('Preson1',_Preson)