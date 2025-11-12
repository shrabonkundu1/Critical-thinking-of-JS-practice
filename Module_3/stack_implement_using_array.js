class Stack {
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value)
    }

    isEmty(){
      this.items.length === 0;
    }

    pop(){
        if(this.isEmty()){
            return undefined;
        }

        return this.items.pop();
    }

    peek(){
        if(this.isEmty()){
            return undefined;
        }

        return this.items.peek(this.items.length - 1)
    }    
}

const stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())