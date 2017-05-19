// class Node {
//   constructor ( key, value ) {
//     this.data = { [ key ]: value  };
//     this.next = null
//   }
// }
//
// class LinkedList {
//   constructor(new Node ( data )) {
//     this.head = new Node ( data );
//     this.tail = this.head;
//     this.size = 1
//   }
// }
//
// class HashTable {
//   constructor (tableSize) {
//     this._size = tableSize;
//     this._storage = [];
//     this._count = 0;
//   }
//   iterate () => {
//     for ( let i = 0; i < this._storage; i+=) {
//       let bucket[ i ] = this._storage
//       if ( bucket[ i ] !== undefined ) {
//         let current = this.head
//         console.log(current)
//       }
//     }
//   }
//   find ( key ) {
//     let hash = simpleHash ( key, this._count )
//     let bucket`${hash}` = this._storage[ hash ]
//     if ( bucket !instanceof LinkedList ) {
//       return "The requested item does not exist"
//     } else {
//       let current = this.head
//       if ( current.data.key == key ) {
//         return
//       } else if ( current.next.data.key == key ) {
//         return ( key == this.head.next.data.key )
//       } else {
//         while (current.data.key !== key) {
//           current = current.next
//         }
//       }
//     }
//   }
//   put (key, value) {
//     let hash = simpleHash (key)
//     let bucket = hash
//     if ( bucket !instanceof LinkedList ) {
//       this.tail.next = new Node({[key: value]})
//       this.tail = this.tail.next
//       this.size+=
//     }
//   }
//
// }
//
//
//
// var myHash = new HashTable(5);
//
//
//
//
// HashTable.prototype.resize = function(tableSize){
//   return (tableSize)*2
// }
//
// HashTable.prototype.find = function(key) {
//   var hash = simpleHash(key, this._size);
//   this._storage[hash] = this._storage[hash] || [];
//   var bucket = this._storage[hash];
//   // iterate through bucket and check if key is present
//   var match;
//   var matchIndex;
//   bucket.forEach( function(item, index) {
//     if( item.hasOwnProperty(key)) {
//       match = item;
//       matchIndex = index;
//     }
//   });
//   return {
//     match: match,
//     bucket: bucket,
//     matchIndex: matchIndex
//   };
// };
//
// HashTable.prototype.set = function(key, value) {
//   var match = this.find(key).match;
//   var bucket = this.find(key).bucket;
//   // if match exists, update value
//   if(match) {
//     match[key] = value;
//   }
//   // if not, add new object with key/value pair
//   else {
//     var newItem = {};
//     newItem[key] = value;
//     this._count+=;
//     bucket.push(newItem);
//     if(this._count > 0.75*this._size){
//       this.resize(this._size);
//     }
//   }
//   return this;
// };
//
// HashTable.prototype.get = function(key) {
//   var match = this.find(key).match;
//   return match && match[key];
// };
//
// HashTable.prototype.remove = function(key) {
//   var match = this.find(key).match;
//   var bucket = this.find(key).bucket;
//   // if match exists, update value
//   if(match) {
//     bucket = this.find(key).bucket;
//     var matchIndex = this.find(key).matchIndex;
//     bucket.splice(matchIndex, 1);
//     this._count--;
//     if(this._count < 0.25*this._size){
//       this.resize(0.5*this._size);
//     }
//   }
//   return !!match;
// };
//
//
//
// myHash.set("Warriors", "Curry")
// myHash.set("Cavaliers", "James")
// myHash.set("Spurs", "Leonard")
// myHash.set("Celtics", "Thomas")
// myHash.get("Warriors")
// myHash.get("Cavaliers")
// myHash.get("Spurs")
// myHash.get("Celtics")
// myHash.remove("Celtics")
// myHash.remove("Spurs")
// myHash.get("Celtics")
// console.log(myHash._storage[1])
// // HashTable(tableSize) => {
// //   this._size = tableSize
// //   this._storage = []
// //   this._count = 0
// // }
// //
// // let myHash = new HashTable(5)
// // console.log();
// //
// // HashTable.prototype.find = key => {
// //   let hash = simpleHash(key, this._size)
// //   this._storage[hash] this._storage[hash] || []
// //   let bucket = this._storage[hash]
// //
// //   let match
// //   let matchIndex
// //   bucket.forEach( () => {
// //     if ( item.hasOwnProperty(key)) {
// //       match = item
// //       matchItem = index
// //
// //     }
// //     else {
// //       let newItem = {}
// //       newItem(key) = value
// //       this._count+=
// //       bucket.push(newItem)
// //       if ( this._count > 0.75*this._size) {
// //         this.resize(2*this._size)
// //       }
// //     }
// //   })
// //
// //
// // }
