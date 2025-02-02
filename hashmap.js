/* ---------------------------------------------------------------------------------------------SNIPPET FOR THROWING ERROR IF BUCKET INDEX OUT OF BOUNDS---------------------------------

if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bounds");
}
*/

class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor || 0.75;
    this.capacity = capacity || 16;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key) {
    //Formula to get our hash code from TOP
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      console.log(`load factor ${this.loadFactor}`);
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    //Get the key, then assign a value
    let hashCode = this.hash(key);
    if (!this.buckets[hashCode]) {
      this.buckets[hashCode] = [];
    }
    this.buckets[hashCode].push({ key, value });
    //Need to account for collision
  }
  get(key) {
    let hashCode = this.hash(key);
    for (let pair of this.buckets[hashCode]) {
      if (pair.key === key) {
        return pair.value;
      }
    }
    console.log("Key not found in get(key)");
    throw new Error("Key not found in get(key)");
  }
}
const hash = new HashMap();
hash.set("123", "blue");
console.log(hash);
