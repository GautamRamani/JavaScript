/*
    array
    *****
        -collection of "elements" called as "array"
                        or
        -'The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.'
        index starts from "0"
        []

*/
// let arr = [10, 20, "thirty", 40, " 50", 60, "70", 80, 90, 100];

// console.log(typeof arr);
// console.log(arr);
// console.log(arr["0"]);
// console.log(arr[3.0]);
// console.log(arr[3.1]);
// arr[3.5] = 45;
// arr["A"] = 110;

// console.log(arr[3.5]);
// console.log(arr["A"]);
// console.log(arr[2][0]);
// console.log(arr.length);

// let arr = [10, 20, 30, 40, 50];
// console.log(arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(arr[-1]);
// console.log(arr[5], arr[100]);

//length
// The length property of an object which is an instance of type Array sets or returns the number of elements in that array.

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.length);
// let arr1 = [10, 20]; //
// arr1[2] = 30;
// console.log(arr1.length);
// arr1[100] = 1000;
// console.log(arr1.length);

// let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arr2.length);
// arr2.length = 5;
// console.log(arr2[0], arr2[4], arr2[5], arr2[9]);*
//delete
//delete the particular

// If you want an array element to exist but have an undefined value, use the undefined value instead of the delete operator.
// let b;


// arr.length = 10;
// arr[2] = undefined;
// console.log(arr);
// console.log(arr[7]);

// console.log(arr.length);
// delete arr[4];
// console.log(arr.length);
// delete arr[0];
// arr[7] = undefined;
// arr[4] = undefined;
// delete arr[7];
// console.log(arr);
// console.log(arr[4] );
// console.log(arr[0] );
// console.log(arr[8]);
// console.log(arr);

//push():-
    // The push() method adds one or more elements to the end of an array and returns the new length of the array.
//pop():-
    // The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
//unshift():-
    // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//shift():-
    // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.


// let arr = [20, 30, 40];
// console.log(arr);
// arr.push(50);
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//splice()
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.splice(-4, 3, 11, 12, 13);
// arr.splice(4, 3);///start from 4 and delete 3 element
// console.log(arr);
// arr.splice(-2);
// arr.splice(6, 1);
// console.log(arr);
// arr.splice(0, 1);
// console.log(arr);
// arr.splice(1, 1);
// console.log(arr);
// arr.splice(2, 3, 11, 12, 13);
// console.log(arr);
// arr.splice(1, 0, 30);
// console.log(arr);
// arr.splice(0, 1, 11, 22);
// console.log(arr);
// arr.splice(9, 0, 100);
// console.log(arr);
// arr.splice(1);
// console.log(arr.splice(1));
// console.log(arr);

// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//10, 20, 30, 40, 50, 60, 70, 80, 90, 100
//                       -4  -3   -2   -1
// arr1.splice(-4, 2);
// console.log(arr1);

// arr1.splice(-4, -2);
// console.log(arr1);

//slice()

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arr.slice());
// console.log(arr.slice(3));
// console.log(arr.slice(-2));
// console.log(arr.slice(3, -2));
// console.log(arr.slice(3, -9));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, 5));
// console.log(arr.slice(-10, 8));
// console.log( arr.slice(-2) );
// console.log(arr);


// concat
// spread operator
// immutability
//deep cloning
// ...

//concat:-
    // The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//spread operator(syntex):-
    //Spread syntax (...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

// let arr1 = [10,20,30];
// let arr2 = [40,50,60];
// console.log( [...arr1,...arr2] );
// console.log(arr1.concat(arr2))

//immutability:-


// let grand = ["5acrs"];
// let father = [...grand,"5acrs"];
// let child = [...father,"10acrs"];
// console.log(child);   

// Shallow Copy:-A shallow copy means that certain (sub-)values are still connected to the original variable.
// const a={
//     name:"gautam",
//     last:"ramani",
//     college:"ssasit",
//     en:"190763109009"
// }
// let b=a;
// b.college="shree swami atmanand sarswati institute of technology"
// console.log(b)
// console.log(a)

//deep Copy:- A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 

// const a={
//     name:"gautam",
//     last:"ramani",
//     college:"ssasit",
//     en:"190763109009"
// }
// let b={...a};
// b.college="shree swami atmanand sarswati institute of technology"
// console.log(b)
// console.log(a)

//deep cloning

// let c1 = [10,20,30];
// let xerox = [...c1];
// c1.push(40);
// xerox.push(50);[ 10, 20, 30, 50 ]
// console.log(c1);                        
// console.log(xerox);                     
// let arr = [10,20,30,40,50,60];
// //[40,50,60,10,20,30]
// let x = arr.slice(3);
// let y = arr.slice(0,3);
// console.log( [...x,...y] );


//findIndex()

// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// let arr=[10,20,30,40,50,60,70]

// console.log(
//     arr.findIndex((element,index)=>{
//         return element === 30;
//     })
// );           
// console.log(
//     arr.findIndex((element,index)=>{
//         return element == 60;
//     })
// );          
// console.log(
//     arr.findIndex((element,index)=>{
//         return element === "10";
//     })
// );         
// arr.splice(arr.findIndex((element,index)=>{
//     return element == 20;
// }),1);
// console.log(arr);       

// arr.splice(arr.findIndex((element,index)=>{
//     return element == 50;
// }),1);
// console.log(arr);
// let arr1 = [{"cost":"100 INR"},
//             {"cost":"200 INR"},
//             {"cost":"300 $"},
//             {"cost":"400 INR"},
//             {"cost":"500 INR"}];
// arr1.splice(arr1.findIndex((element,index)=>{
//     return element.cost == "300 $";
// }),1);
// console.log( arr1 );


    //filter():-
                // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
    
        // console.log(
        // [1,2,3,4,5].filter((element,index)=>{
        //     return element>=3;
        // })
    // );
    //[ 3, 4, 5 ]
    // console.log(
    //     [1,2,3,4,5].map((element,index)=>{
    //         return element*100;
    //     }).filter((element,index)=>{
    //         return element>=600;
    //     })
    // );
    
    /*
    reduce():-
    The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
    
    console.log(
        [1,2,3,4,5].reduce((firstElement,nextElement)=>{
            return firstElement+nextElement;
        })
        );
        //15
        
        console.log(
            [1,2,3,4,5].reduce((firstElement,nextElement)=>{
                return firstElement+nextElement;
            },100)
            );
            //115
            console.log(
                [1,2,3,4,5].map((element,index)=>{
                    return element*100;
                }).filter((element,index)=>{
                    return element>=300;
                }).reduce((firstElement,nextElement)=>{
                    return firstElement+nextElement;
                })
                );
                //1200
                */
               
               /*
               //reduceRight():-
               The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
               console.log(
                   ["ES11","To","Welcome"].reduceRight((firstElement,nextElement)=>{
                       return firstElement+" "+nextElement;      
                    })
                    );
                    //Welcome To ES11
                    */
                   
                   // Map:-
                   // The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
    // method               Description
    // new Map()	        Creates a new Map
    // set()	            Sets the value for a key in a Map
    // get()	            Gets the value for a key in a Map
    // delete()	            Removes a Map element specified by the key
    // has()	            Returns true if a key exists in a Map
    // forEach()	        Calls a function for each key/value pair in a Map
    // entries()	        Returns an iterator with the [key, value] pairs in a Map
    
    //map()
    // console.log(
    //     [1,2,3,4,5].map((element,index)=>{
    //         return element*100;   
    //     })
    // );
    //[ 100, 200, 300, 400, 500 ]
    // console.log(
    //     [1,2,3,4,5].map(element=>element*10)
    // );
    //[ 10, 20, 30, 40, 50 ]

// flat():-
    // The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(
//     [1,[2],[3],[4]].flat(1)
// );
//[ 1, 2, 3, 4 ]
// console.log(
//     [[[[1]]],[[[[[[[2]]]]]]],[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]].flat(Infinity)
// );
//[ 1, 2, 3 ]


/*
flatmap():-
            // The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

let arr1 = [1,2,3];
let arr2 = ["one","two","three"]
//[[1,"one"],[2,"two"],[3,"three"]]
//[1,"one",2,"two",3,"three"]
console.log(
    arr1.flatMap((element,index)=>{
        return [ element,arr2[index] ]
    })
);
//[ 1, 'one', 2, 'two', 3, 'three' ]
*/

// forEach():-The forEach() method executes a provided function once for each array element.
    // array.forEach(function(currentValue, index, arr))

// let arr1 = [1,2,3,1,2,3];
// arr1.forEach((element,index)=>{
//     console.log(element,index);
// })


// console.log(
//     arr1.filter((element,index)=>{
//         return arr1.indexOf(element) === index;
//     })
// );


//  Array.isArray():-
    // The Array.isArray() method determines whether the passed value is an Array(return in Bollean).

// console.log(Array.isArray([1,2,3]))
// console.log(Array.isArray([]))
// console.log(Array.isArray({1:"stud"}))
// console.log(Array.isArray("stud"))
// console.log(Array.isArray(undefined))

// The entries():-
    // The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
    // var arr=['a','b','c']
    // var iterator=arr.entries()
    // console.log(iterator.next().value)
    // console.log(iterator.next().value)
    // console.log(iterator.next().value)

// for...in
    // The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
    // The for...in statements combo iterates (loops) over the properties of an object.

    // const obj={apple:1,chicoo:2,mango:3}
    // for(let pair in obj){
    //     console.log(`${pair}:${obj[pair]}`)
    // }

//for...of
    // The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
    // The for...of statements combo iterates (loops) over the values of any iterable.

    // const arr=['apple','orange','mango']
    // for(const val of arr){
    //     console.log(val)
    // }



/*
    //sort():-
            The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

    //ascending / descending
    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg1-arg2;
        })
    );
    //[ 1, 2, 3, 4, 5 ]
    console.log(
        [5,1,2,4,3].sort((arg1,arg2)=>{
            return arg2-arg1;
        })
    );
    //[ 5, 4, 3, 2, 1 ]
    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg1-arg2
        })[1]
    );          //2
    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg2-arg1;
        })[1]
    );          //4 
*/


/*
//reverse():-
            used to reverse the array elements
console.log(
    [1,2,3,4,5].reverse()
);
//[ 5, 4, 3, 2, 1 ]
console.log(
    Array.from("Hello").reverse().toString().replaceAll(",","")
);
//[ 'H', 'e', 'l', 'l', 'o' ]
//[ 'o', 'l', 'l', 'e', 'H' ]
//o,l,l,e,H
//ol,l,e,H
//olleH
let arr = ["Angular","React","NodeJS","VueJS"];
//Res 1: ["VueJS","NodeJS","React","Angular"]
//Res 2: ["ralugnA","tcaeR","SJedoN","SJeuV"]
//Res 3: ["SJeuV","SJedoN","tcaeR","ralugnA"]
*/


// console.log(
//     "welcome to fullstack ui".substr(0,7)
// );
// //welcome
// console.log(
//     "welcome to fullstack ui".substr(1,2)
// );
// //el
// console.log(
//     "welcome to fullstack ui".substr(-2,2)
// );
// //ui
// console.log(
//     "welcome to es6".substring(0,7)
// );
// //welcome
// console.log(
//     "welcome to es6".substring(8,10)
// );
// console.log(
//     "welcome to es6".substring(11)
// );          //es6
// //forEach()
// ["Hello_1","Hello_2"].forEach((element,index)=>{
//     console.log(element);
// });
// for(let element of ["Hello_1","Hello_2"]){
//     console.log(element);
// }
// let obj = {
//     "key1":"Hello_1",
//     "key2":"Hello_2",
//     "key3":"Hello_3"
// };
// for(let key in obj){
//     console.log( obj[key] );
// }


// The copyWithin():-

                // The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array. This method has the same algorithm as Array.prototype.copyWithin.

// let arr1 = [10,20,30,40,50,60,70,80,90,100];
// arr1.copyWithin(2);
// console.log(arr1);          //[10,20,10,20,30,40,50,60,70,80]
// let arr2 = [10,20,30,40,50,60,70,80,90,100];
// arr2.copyWithin(5);
// console.log(arr2);  //[10,20,30,40,50,10,20,30,40,50]
// let arr3 = [10,20,30,40,50,60,70,80,90,100]
// arr3.copyWithin(8);
// console.log(arr3);    //[10,20,30,40,50,60,70,80,10,20]
// let arr4 = [10,20,30,40,50,60,70,80,90,100];
// arr4.copyWithin(2,4);
// console.log(arr4);          //[10,20,50,60,70,80,90,100,90,100]
// let arr5 = [10,20,30,40,50,60,70,80,90,100];
// arr5.copyWithin(3,6);
// console.log(arr5);    //[10,20,30,70,80,90,100,80,90,100]
// let arr6 = [10,20,30,40,50,60,70,80,90,100];
// (insert position, start position, end position)
// arr6.copyWithin(2,4,7);
// console.log(arr6);      //[10,20,50,60,70,60,70,80,90,100]
// let arr7 = [10,20,30,40,50,60,70,80,90,100];
// arr7.copyWithin(1,5,8);
// console.log(arr7);          //[10,60,70,80,50,60,70,80,90,100]


// fill():-
        //  The fill() method fills all the elements of a typed array from a start index to an end index with a static value.

// let arr = [10,20,30,40,50];
// let arr1 = arr.fill(100);                    
// console.log(arr1);
// console.log(arr)                      //[ 100, 100, 100, 100, 100 ]
// let arr2 = arr1.fill(200,1);
// console.log(arr2);                      //[ 100, 200, 200, 200, 200 ]
// let arr3 = arr2.fill(300,2);
// console.log( arr3 );                    //[ 100, 200, 300, 300, 300 ]
// (insert value, start position, end position);
// let arr4 = arr3.fill(400,3,4);
// console.log(arr4);                      //[ 100, 200, 300, 400, 300 ]
// let arr5 = arr4.fill(500,4);
// console.log(arr5);                      //[ 100, 200, 300, 400, 500 ]


//some():-
// The some() method tests whether some element in the typed array passes the test implemented by the provided function.
// console.log(
//   [10, 20, 30, 40, 50].some((element, index) => {
//     return element >= 50;
//   })
// );
//true

//every():-
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// console.log(
//   [1, 2, 3, 4, 5].every((element, index) => {
//     return element >= 1;
//   })
// );
//true

//includes():-
              // The includes() method determines whether a typed array includes a certain element, returning true or false as appropriate.
// console.log(["hello_1", "hello_2"].includes("hello_1"));

//true

// console.log(["hello_1", "hello_2"].includes("hello"));

//false             

//find():-
           // The find() method returns a value of an element in the typed array, if it satisfies the provided testing function. Otherwise undefined is returned. 
// console.log(
//   [11, 12, 13, 14, 15].find((element, index) => {
//     return element == 14;
//   })
// );

// toString():-

// The toString() method returns a string representing the specified array and its elements.

// const array1 = [1, 2, 'a', '1a'];
// console.log(array1.toString());
// expected output: "1,2,a,1a"