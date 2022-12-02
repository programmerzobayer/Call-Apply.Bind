const person = {      //full person object is this
    firstName: "jhon",
    lastName: "wick",
    fullName : function(){
    return `${this.firstName} ${this.lastName}`;
    }
}
const result = person.fullName();
console.log(result);

const personTwo ={
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
   
const  person1 ={
    firstName: "Downey",
    lastName: "Jr"
    }
    
  const  person2 ={
    firstName: "keanu",
    lastName: "revees"
    }

const resultTwo = personTwo.fullName.call(person1);
console.log(resultTwo);


const personThree ={
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
const resultThree = personThree.fullName.call(menName,"programmer");
console.log(resultThree);
