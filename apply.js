const person ={
    fullName: function(profession){
     return `${this.firstName} ${this.lastName} ${profession}`;
    }
}

const menName= {
     firstName: "jhankar",
     lastName: "mahbub"
}
const menNameTwo= {
     firstName: "Hm",
     lastName: "Niam"
}
const resultThree = person.fullName.apply(menName,['programmer']);
console.log(resultThree);
