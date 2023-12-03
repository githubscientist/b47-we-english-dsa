class StackArray {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    // push
    push(data) {
        this.items.push(data);
        this.top++;
    }

    isEmpty() {
        return this.top == -1;
    }

    pop() {
        if (this.isEmpty()) {
            return;
        }
        this.items.pop();
        this.top--;
    }

    peek() {
        if (!this.isEmpty()) return this.items[this.top];
    }
}

module.exports = StackArray;