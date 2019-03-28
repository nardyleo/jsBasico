// classes
// interfaces
// heranças

class people{
    
    constructor(){
        this.peopleList = []
        this.count = ''
    }

    addPerson(people){
        this.peopleList.push(people)
    }

    // deletePerson(){
    //     var a = this.peopleList.pop
    //     console.log(a)
    // }

    getAll(){
        return this.peopleList
    }

}


class costumer extends people{

    constructor(){
        super()
        this.addPerson({name: 'fabiano',age: 27})
    }

}


// interface people {
//     addPerson()
//     deletePerson()
// }

const _people = new people()
_people.addPerson({name: 'Leo'})
_people.addPerson({name: 'Filipe'})
_people.addPerson({name: 'Guilherme'})
// _people.deletePerson()
console.log('list', _people.getAll())

const _costumer = new costumer()
_costumer.addPerson({name: 'thiago',age: 40})
_costumer.addPerson({name: 'thieres'})
console.log('cust', _costumer.getAll());


