class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    /** 
    * Summary: Creates a linked list where each value is assigned to a node and nodes are linked forming a chain. Takes less memory than [array] in JS.
    * Description: Linked list is faster than regular array when inserting / deleting elements. Search is slower. In this implementation search for element has been omitted.
    * Use .add(value) to add a value and .delete(value) to remove a value from the list. .print() prints the list in the console. 
    * @link https://en.wikipedia.org/wiki/Linked_list
    */
    constructor() {
        this.head = null;
    }

    add(value) {
        /**
         * @param value - must be non-null argument
         */
        if(!value) return;
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
            return;
        }
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    delete(value) {
        if(!this.head) {
            //list is empty
            return;
        }
        if(this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let previousNode = null;
        let currentNode = this.head;
        while(currentNode && currentNode.value !== value) {
            previousNode=currentNode;
            currentNode=currentNode.next;
        }
        if(!currentNode) {
            return;
        }
        previousNode.next = currentNode.next;
    }

    print() {
        let result = "";
        let currentNode = this.head;
        if(!this.head) {
            console.log("LinkedList is empty");
        }
        while(currentNode.next) {
            result += currentNode.value + "->";
            currentNode = currentNode.next;
        }
        console.log(result + 'null');
    }
}
/*
let l = new LinkedList();
let i= 0;
for(;i< 10;i++) {
    l.add(i);
}

l.print();
*/