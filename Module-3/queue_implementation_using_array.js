class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(value){
       return this.items.push(value);
    }

    isEmpty(){
        return this.items.length === 0;
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.shift();
    }
    
    peek(){

        if(this.isEmpty()){
            return undefined
        }

        return this.items[0]
    }

    print(){
        console.log("Start =", this.items.join("-"), " - end")
    }
}


const queue = new Queue();



queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.dequeue()
console.log(queue.peek())
queue.print()