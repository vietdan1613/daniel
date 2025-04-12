class DocumentControlVersion {
    constructor() {
        this.timetamps = [];
        this.versions = new Map();
    }
    // add to the map
    // add sorted timetamps (find index and add)
    addVersion(timetamp, content) {
        this.versions.set(timetamp, content);
        let index = this.findIndexTimeTamp(timetamp);
        this.timetamps.splice(index, 0, timetamp);
    }

    print() {
        console.log(this.timetamps);
        console.log(this.versions);
    }

    getContent(timetamp) {
        let index = this.findIndexTimeTamp(timetamp);
        let key = this.timetamps[index ==0 ? 0 : index - 1];
        if (key === undefined) {
            return null;
        }
        return this.versions.get(key);
    }

    findIndexTimeTamp(timetamp) {
        let left = 0;
        let right = this.timetamps.length - 1;
        while (left  <= right) {
            const mid = Math.floor((left + right) / 2);
            if( this.timetamps[mid] === timetamp) {
                return mid;
            }
            if (this.timetamps[mid] < timetamp) {
                left = mid + 1;
            }
            if (this.timetamps[mid] > timetamp) {
                right = mid - 1;
            }
        }
        return left;
    }
}

const doc = new DocumentControlVersion();
doc.addVersion(10, "Hello");
doc.addVersion(32, "World");
doc.addVersion(10, "World 4");
doc.addVersion(20, "!");
console.log(doc.getContent(33));