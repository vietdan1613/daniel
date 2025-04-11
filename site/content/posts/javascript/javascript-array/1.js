class Document{
    constructor(){
        this.sortKeys = [];
        this.docs = new Map();
    }

    // O(1)
    Insert(key, value){
        this.docs.set(key, value);
        if(this.sortKeys.length === 0){
            this.sortKeys.push(key);
            return;
        }
        for(let i = 0; i < this.sortKeys.length; i++){
            if(this.sortKeys[i] > key){
                this.sortKeys.splice(i,0,key);
                return;
            }
        }
        this.sortKeys.push(key);
    }
    Print(){
        console.log(this.sortKeys);
    }
    // O(n)
    // [5, 15, 20, 30] 16
    GetClosestValue(timetamp){
        let closerKey = 0;
        for(const [key, value] of this.docs){
            if (key === timetamp){
                return value;
            }
            if (closerKey < key && key < timetamp){
                closerKey = key;
            }
        }
        return this.docs.get(closerKey);
    }
}

const docs = new Document();
docs.Insert(5, 'doc1');
docs.Insert(15, 'doc2');
docs.Insert(30, 'doc4');
docs.Insert(40, 'doc4');
docs.Insert(20, 'doc3');
docs.Print(); // [5, 15, 20, 30]