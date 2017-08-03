

export class Task {

    constructor (public description: string,
        public completed : boolean) {
    }

    toString () {
        return `Task, description: ${this.description}, completed: ${this.completed}.`
    }

    setCompleted(checkd: boolean){
        this.completed = checkd;
    }
    
}
