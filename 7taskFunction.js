// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let unsortedArray = [1, 2, 11, 34, 22, 67, 43, 23];
// let sortedArray = bubbleSort(unsortedArray)
// console.log(sortedArray);
  
//   // Example usage:
//   var unsortedArray = [5, 3, 8, 4, 2];
//   var sortedArray = bubbleSort(unsortedArray);
//   console.log(sortedArray);

// let a = {
//     "names": "gautam"
// }

//update value
// a.names="yaman"
// a["names"]='yaman'
// a= {...a,"names":"yaman"}

//delete key-value
// delete a.names;

//update key
// a.name= a.names;
// delete a.names

// a["name"] = a["names"]
// delete a["names"]

// a = { ...a, name: a.names }
// delete a.names;

// // take 30 element and print onle even number or odd number
// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],arr1=[];
// for(var i=0;i<arr.length;i++){
//         if(arr[i]%2===0){            //for odd number if(arr[i]%2==1)
//                 arr1.push(arr[i])
//             }
//         }
//         console.log(arr1)
        
//take one array has 30 element,take two blank array
// 1)array store element which is devided by 2
// 2)array store element which is devided by 3
        
// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],arr1=[],arr2=[];
//     for(var i=0;i<arr.length;i++){
//             if(arr[i]%2==0){
//                 arr1.push(arr[i]);
//             }
//             if(arr[i]%3==0){
//                 arr2.push(arr[i]);
//             }
//         }
//         console.log(arr1);
//         console.log(arr2);
    
// store odd even number in a Array
    // let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],arr1=[],arr2=[];
    // for(var i=0;i<arr.length;i++){
        //     if(arr[i]%2==0){
        //         arr1.push(arr[i])
        //     }
        //     else{
        //         arr2.push(arr[i]);
        //     }
        // }
        // console.log(arr2)
        // console.log(arr1)
                
//store value in object
// let key=[1,2,3,4,5];
// let values=['apple','banana','mango','orange','chicoo'];
// let obj={};
// for(var i=0;i<key.length;i++){
//     obj[key[i]]=values[i];
// }
// console.log(obj)

// //fibonacci series dynamically mode
// let fibseries = [];
// for (let i = 0; i < 10; i++) {
//     if (i == 0) fibseries[i] = i
//     else if (i == 1) fibseries[i] = i;
//     else fibseries[i] = fibseries[i - 1] + fibseries[i - 2]
// }
// console.log(fibseries);
                

//store value in object
// let values=[1,2,3,4,5,6,7,8,9,10];
// let twos=[];
// let three=[];
// for(var i=0;i<values.length;i++){
//     if(values[i]%2==0)
//     twos.push(values[i])
//     if(values[i]%3==0){
//         three.push(values[i])
//     }
// }
// let obj={"/two":twos,'/three':three}
// console.log(obj)

//store value in object
// var values=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
// var odd=[],even=[];
// for(var i=0;i<values.length;i++){
//     if(values[i]%2==0){
//         even.push(values[i])       
//     }else{
//         odd.push(values[i])
//     }
// }
// var obj={'even':even,"odd":odd}
// console.log(obj)

// task do not use condition
// let x = "yellow"
// if (x == "yellow") {
//     console.log("inside yellow");
// } else if (x == "pinaple") {
//     console.log("inside pinapple");
// }

// soln
//let arr = ["red", "yellow", "blue"];
// let target = "blue";
// let result = arr.includes(target) && "color is red";
// console.log(result);


//array of object
// let key_val_arr=[
//     {id:1,name:'raj'},
//     {id:2,name:'veer'},
//     {id:3,name:'prayag'},
//     {id:4,name:'pagyant'}
// ]
// key_val_arr.push({id:5,name:"Riyan"})
// console.log(key_val_arr)

// Print Pattern
// let str = ''
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         str += j;
//     }
//     str += '\n'
// }
// console.log(str);

// 1
// 12
// 123
// 1234
// 12345


// ***************************************************************

// let str = ''
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j < i; j++) {
//         str += i;
//     }
//     str += '\n'
// }
// console.log(str);

// 1
// 22
// 333
// 4444
// 55555

// ***************************************************************

// let str = ''
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= i; j++) {
//         str += j;
//     }
//     str += '\n'
// }
// console.log(str);

// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// 123456789
// 12345678910

// ***************************************************************

// let str = ''
// let count = 1;
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j < i; j++) {
//         str += count++
//     }
//     str += '\n'
// }
// console.log(str);

// 1
// 23
// 456
// 78910
// 1112131415

// ***************************************************************

// let str = ''
// for (let i = 5; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         str += j
//     }
//     str += '\n'
// }
// console.log(str);

// 12345
// 1234
// 123
// 12
// 1

// ***************************************************************

// let str = '', sp = 40;
// for (let i = 1; i <= 9; i += 2) {
//     for (let s = 0; s < sp; s++) {
//         str += ' '
//     }
//     for (let j = 1; j <= i; j++) {
//         str += j + " ";
//     }
//     str += '\n'
//     sp -= 2
// }
// console.log(str);

// 1
// 123
// 12345
// 1234567
// 123456789

// ***************************************************************

// let str = '', sp = 40, count = 1;
// for (let i = 1; i <= 5; i += 2) {
//     for (let s = 0; s < sp; s++) {
//         str += ' '
//     }
//     for (let j = 1; j <= i; j++) {
//         str += count++ + ' ';
//     }
//     str += '\n'
//     sp -= 2;
// }
// console.log(str);

// 1
// 234
// 56789

// ***************************************************************

// let str = '';
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         str += '*'
//     }
//     str += '\n'
// }
// console.log(str);

// *****
// *****
// *****
// *****
// *****

// ***************************************************************

// let str = '';
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i == 1 || i == 5) {
//             str += '*'
//         } else {
//             if (j == 1 || j == 5) {
//                 str += '*'
//             } else {
//                 str += ' '
//             }
//         }
//     }
//     str += '\n'
// }
// console.log(str);
// *****
// *   *
// *   *
// *   *
// *****

// ***************************************************************

// let str = '', ch = ['A', 'B', 'C', 'D', 'E']
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         str += ch[j]
//     }
//     str += '\n'
// }
// console.log(str);

// let str = ''
// for (let i = 65; i <= 69; i++) {
//     for (let j = 65; j <= i; j++) {
//         str += String.fromCharCode(j)
//     }
//     str += '\n'
// }
// console.log(str);

// A
// AB
// ABC
// ABCD
// ABCDE

// var string="";
// var sp=40;
// for(var i=1;i<=7;i++){
//     for(var j=1;j<sp;j++)
//     string+=" ";
//     for(var j=1;j<=i;j++){
//         string+=" *";
//     }
//     string+="\n";
//     sp--;
// }
// console.log(string)

//task
// 12345
// 1234
// 123
// 12
// 1


//reverse string without reverse function
// var str='sj edon',temp='';
// var arr=[];
// arr=str.split('')
// for(var i=0;i<arr.length/2;i++){
//     temp=arr[i];
//     arr[i]=arr[arr.length-1-i];
//     arr[arr.length-1-i]=temp;
// }
// console.log(arr.join(""))

// swap two value
// var a=10;
// var b=20;
// var temp;
// temp=a;
// a=b;
// b=temp;
// console.log(a)
// console.log(b)


//swap two values without third variable

//destructuring assignment
// var a=10;
// var b=20;
// [a,b]=[b,a]
// console.log(a)
// console.log(b)

//addition and difference
// var a=10;
// var b=20;
// a=a+b; 
// b=a-b;  
// a=a-b;  
// console.log(a)
// console.log(b)

//two sum (find pair)
// function twoSum(data, target) {
//     for (let index = 0; index < data.length; index++) {
//         let current = target - data[index];
//         if (data.indexOf(Math.abs(current)) > 0) {
//             return [index, data.indexOf(current)]
//         }
//     }
//     return [];
// }
// const result = twoSum([4, 8, 5, 0], 9);
// console.log(result);

//another way
// let arr = [10, 5, 3, 7, 4, 2], obj = {}, target = 5, res = [];
// function test(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         let sum = target - arr[i];
//         if (obj[sum]) {
//             return [sum, arr[i]]
//         } else {
//             obj[arr[i]] = 1
//         }
//     }
// }
// console.log(test(arr, target));

//get pairs whose sum is equal target for + and -
// let arr = [10, 5, 3, 7, 4, 2, 1], obj = {}, obj_2 = {}, target = 5, res = [];
// function test(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         let sum = target - arr[i];
//         if (obj[sum]) {
//             res.push([sum, arr[i]])
//         } else {
//             obj[arr[i]] = 1
//         }
//         let sum_1 = arr[i] + target;
//         if (arr[i] > target) {
//             sum_1 = arr[i] - target
//         }
//         if (obj_2[sum_1]) {
//             res.push([sum_1, arr[i]])
//         } else {
//             obj_2[arr[i]] = 1
//         }
//     }
// }
// test(arr, target);
// console.log(res);

//remove duplicate elements
// let arr = [1, 2, 3, 1, 2, 3]

//1
// let sets = new Set(arr)
// arr = [...sets]
//2
// let result = arr.filter((value, index, self) => {
//     return self.indexOf(value) === index
// })

// let num = 12345, temp;

// function reverse(num) {
//     let str = num + '';
//     let splited = str.split("")
//     for (let i = 0; i < splited.length / 2; i++) {
//         let temp = parseInt(splited[i]);
//         splited[i] = parseInt(splited[splited.length - 1 - i]);
//         splited[splited.length - 1 - i] = temp
//     }
//     return parseInt(splited.join(""))
// }
// console.log(reverse(num))

//find day when you sell the stock and find a day when you buy
// let arr = [4, 2, 7, 1, 3, 4, 8]
// function checkStock(arr) {
//     let sellDay = arr.indexOf(Math.min(...arr)) + 1
//     let buyDay = arr.indexOf(Math.max(...arr.slice(sellDay))) + 1
//     return { sellDay: sellDay, buyDay: buyDay }
// }
// console.log(checkStock(arr));

//reverse word

//1
// function reverseWord(str) {
//     let data = str.trim()
//     let result = data.split(" ").reverse()
//     return result;
// }
// console.log(reverseWord("  hello world  "));

// function reverseWord(str) {
//     return str.trim().split(" ").filter(Boolean).reverse().join(" ");
// }
// console.log(reverseWord("  hello world  "));

//simple task last one print and...

// let arr=['apple','banana','mango','orange','chicoo']
// // console.log(`${arr[0]},${arr[1]},${arr[2]},and ${arr[3]}`)

// for(var i=0;i<1;i++){
    // console.log(`${arr.splice(0,arr.length-1)} and ${arr[arr.length-1]}`)
// }

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(`${arr.splice(0,arr.length-1)} and ${arr[arr.length-1]}`)

//********Reverse Number*******


// function reverse(n)
// {
// 	n = n + "";                   //Convert into the String
// 	return n.split("").reverse().join("");
// }
// console.log(reverse(32243));

// function reverse(s)
// {
// 	s = s + "";                   //Convert into the String
// 	return s.split("").reverse().join("");
// }
// console.log(reverse("eno"));


//*******Palindrome or not********
 
// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     console.log(str)
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }
//    console.log(palindrome("nurses run"));
//    console.log(palindrome("12321"));


//*******All Combination of String*******


// let possibleCombinations = (str) =>{
//     let combinations = [];
//       for(let i = 0 ;i < str.length; i++)
//     {
//         for(let j = i + 1; j< str.length + 1; j++)
//         {
//             combinations.push(str.slice(i , j));
//         }
//     }
//    return combinations;
// }
// console.log(possibleCombinations('return'));


// ********alphabet_order********


// function sortString(str){
//     var arr = str.split('');
//     var tmp;
//     for(var i = 0; i < arr.length; i++){
//       for(var j = i + 1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//           tmp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = tmp;
//         }
//       }
//     }
//     console.log(arr)
//     return arr.join('');
//   }
//   console.log('sorting:',sortString('webmaster'));

                        //or

// function alphabet_order(str){
// return str.split('').sort().join('');
//   }
// console.log(alphabet_order("webmaster"));


 
//*******String First Letter toUpperCase********

// function stringflupper(str){

//     const string =str ;
//     const words = string.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     console.log(words.join(" "));
// }
// stringflupper('all glory comes from daring to begin !!');


//*******Longest word in String*******


// function longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(longest_word('Web Development Tutorial'));


//******Count vowels in String*********


// function vowels(str){
//     str=str.toLowerCase();
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
//         {
//             count++;
//         }
//     }
//     console.log('No of Vowels in given string is:',count);
// }
// vowels('Skillqode the Programming lab');


                        //or


// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));


//******Check Number is Prime********


// function checkPrime(number) {
//     if (number <= 1) {
//       return false;
//     } else {
//       for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }
//   console.log(checkPrime(7));



//******accept argu check type*********


// function detect_data_type(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
// if (typeof value === "object" || typeof value === "function") 
//     {
//      for (x = 0, len = dtypes.length; x < len; x++) 
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }
//     return typeof value;
// }
// console.log(detect_data_type(12));
// console.log(detect_data_type('w3resource'));
// console.log(detect_data_type(false));


                        // or


// function checktype(arg1,arg2,arg3){
    // console.log(typeof arg1)
    // console.log(typeof arg2)
    // console.log(typeof arg3)
    // return console.log(typeof arg1,typeof arg2,typeof arg3);
// }
// checktype(['skill','development'],'Skill',(1,2,3));


//*******n-row&n-column********

// function matrix(n) {
//     var i,j;
//     for (i=0; i < n; i++)
//     {
//       for (j=0; j < n; j++)
//       {
//            if (i === j)
//            {
//              console.log(' 1 ');
//            }
                  
//            else 
//             {
//              console.log(' 0 ');}
//             }
//          console.log('----------');
//        }
//    }
// matrix(3);


//******Second Smallest and Largest Element*******


// let arr=[27,29,21,23,25,22,24,26,28,30];
// function Secondslarray(arg){

//     console.log('array:',...arr);
//     arr=arr.sort();
//     console.log('sorted array:',...arr)
//     console.log('second smallest:',arr[1]);
//     let len=arr.length;
//     console.log('second largest:',arr[len-2]);
// }
// Secondslarray(arr);


//*******Check Perfact Number********

// function is_perfect(number)
// {
// var temp = 0;
//    for(var i=1;i<=number/2;i++)
//      {
//          if(number%i === 0)
//           {
//             temp += i;
//           }
//      }   
//      if(temp === number && temp !== 0)
//         {
//        console.log("It is a perfect number.");
//         } 
//      else
//         {
//        console.log("It is not a perfect number.");
//         }   
//  } 
// is_perfect(16);



// *****Factors of Positive Number********


// function positiveinteger(num){
//     console.log(`The factors of ${num} is:`);
// for(let i = 1; i <= num; i++) {

//     if(num % i == 0) {
//         console.log(i);
//     }
// }
// }
// positiveinteger(14);


//******Coins*********

// function amountTocoins(amount, coins) 
// {
//  if (amount === 0) 
//   {
//      return [];
//    } 
//  else
//    {
//      if (amount >= coins[0]) 
//        {
//         left = (amount - coins[0]);
//         console.log(coins);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         } 
//       else
//         {
//          coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// } 
// console.log(amountTocoins(70, [25, 10, 5, 2,1]));


// *******exponent&base**********


// function exp(b,n)
// {
//         var ans = 1;
//         for (var i =1; i <= n; i++)
//         {
//                 ans = b * ans;        
//         }
//         return ans;
// }
// console.log(exp(2,3));


// initialise ans=1;
// i=1 ans=2*1,ans=2
// i=2 ans=2*2,ans=4
// i=3 ans=2*4,ans=8
// i=4 loop terminate


// **********************************Extract unique character from a string************************************


//  aim is to no any character will repeat..whole string stored in unique1 variable with the index 0f -1,
// condtion is false when charecter will repeat because it will already stored in uniql so it does not take that charecter

// function unique_char(str1)
// {
//  var str=str1;
//  var uniql="";
//  for (var x=0;x < str.length;x++)
//  {

//  if(uniql.indexOf(str.charAt(x))==-1)
//   {
//     console.log(uniql.indexOf())
//   uniql += str[x];  
//   console.log(uniql)
//    }
//   }
//   return uniql;
// }  
// console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));


// *****************get the number of occurrences of each letter in specified string********************


// function Char_Counts(str1) {
//     var uchars = {};
//     str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
//     return uchars;
//     }
//     console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));


// *****************************searching JavaScript arrays with a binary search*********************************


// function array_binarySearch(narray, delement) {
//     var mposition = Math.floor(narray.length / 2);
 
//     if (narray[mposition] === delement){
//        return mposition;
//     }
//     else if (narray.length === 1) 
//     {
//        return null;
//     }
//     else if (narray[mposition] < delement) {
//        var arr = narray.slice(mposition + 1);
//        var res = array_binarySearch(arr, delement);
//        if (res === null)
//        {
//           return null;
//        }
//        else {
//           return mposition + 1 + res;
//        }
//     }
//     else {
//        var arr1 = narray.slice(0, mposition);
//        return array_binarySearch(arr1, delement);
//     }
//  }
 
//   var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
//   console.log(array_binarySearch(myArray, 6));


// ********************************returns array elements larger than a number*************************************


// function BiggerElements(val)
//    {
//      return function(evalue,array)
//      {
//         console.log(evalue)
//      return (evalue >= val);
//      };
//    }
// var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
// console.log(result);


// *************************generates a string id (specified length) of random characters**************************


// function makeid(l)
// {
// var text = "";
// var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for(var i=0; i < l; i++ )
// {  
// text += char_list.charAt(Math.floor(Math.random() * char_list.length));
// console.log(text += char_list.charAt(Math.floor(Math.random() * char_list.length)));
// }
// return text;
// }
// console.log(makeid(8));


// *****************get all possible subset with a fixed length (for example 2) combinations in an array************


// function subset(arra, arra_size)
// {
//     var result_set = [], 
//         result;  
// for(var x = 0; x < Math.pow(2, arra.length); x++)
//   {
//     result = [];
//     i = arra.length - 1; 
//      do
//       {
//       if( (x & (1 << i)) !== 0)
//           {
//              result.push(arra[i]);
//            }
//         }  while(i--);

//     if( result.length >= arra_size)
//        {
//           result_set.push(result);
//         }
//     }

//     return result_set; 
// }
// console.log(subset([1, 2, 3], 2));


// ****************************************accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string******************************************


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('all glory comes from daring to begin', 'g'));


// ************************************ find the first not repeated character*******************************


// function firstNonRepeatedCharacter(string) {
//     for (var i = 0; i < string.length; i++) {
//       var nonrepeat = string.charAt(i);
//       if (string.indexOf(nonrepeat) == i && string.indexOf(nonrepeat, i + 1) == -1) {
//         return nonrepeat;
//       }
//     }
//     return null;
//   }
//   console.log(firstNonRepeatedCharacter('aabcbd'))


// *************************************to apply Bubble Sort algorithm****************************


// function bubble_Sort(a)
// {
//     var swapp;
//     var n = a.length-1;
//     var x=a;
//     do {
//         swapp = false;
//         for (var i=0; i < n; i++)
//         {
//             if (x[i] < x[i+1])
//             {
//                var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                swapp = true;
//             }
//         }
//         n--;
//     } while (swapp);
//  return x; 
// }
// console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


// ***************list of country names as input and returns the longest country name as output********************


// function Longest_Country_Name(country_name)
//   {
//   return country_name.reduce(function(lname, country) 
//   {
//     return lname.length > country.length ? lname : country;
//   }, 
// "");
// }
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));


// ************************longest substring in a given string without repeating characters*************************


// function longest_substring_without_repeating_characters(input) {
//     var chars = input.split('');
//     var curr_char;
//     var str = "";
//     var longest_string = "";
//     var hash = {};
//     for (var i = 0; i < chars.length; i++) {
//     curr_char = chars[i];
//     if (!hash[chars[i]]) 
//     { 
//     str += curr_char; 
//     hash[chars[i]] = {index:i};
//     }
//     else 
//     {
//     if(longest_string.length <= str.length)
//     {
//     longest_string = str;
//     }
//     var prev_dupeIndex = hash[curr_char].index;
//     var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
//     str = str_FromPrevDupe + curr_char;
//     hash = {};
//     for (var j = prev_dupeIndex + 1; j <= i; j++) {
//     hash[input.charAt(j)] = {index:j};
//     }
//     }
//     }
//     return longest_string.length > str.length ? longest_string : str;
//     }
//     console.log(longest_substring_without_repeating_characters("google.com")); 
    
//     console.log(longest_substring_without_repeating_characters("example.com")); 
    

// function is_Palindrome(str1) {
//     var rev = str1.split("").reverse().join("");
//     return str1 == rev;
//     }
    
//     function longest_palindrome(str1){
    
//     var max_length = 0,
//     maxp = '';
    
//     for(var i=0; i < str1.length; i++) 
//     {
//     var subs = str1.substr(i, str1.length);
    
//     for(var j=subs.length; j>=0; j--) 
//     {
//     var sub_subs_str = subs.substr(0, j);
//     if (sub_subs_str.length <= 1)
//     continue;
    
//     if (is_Palindrome(sub_subs_str))
//     {
//     if (sub_subs_str.length > max_length) 
//     {
//     max_length = sub_subs_str.length;
//     maxp = sub_subs_str;
//     }
//     }
//     }
//     }
    
//     return maxp;
//     }
//     console.log(longest_palindrome("abracadabra"));
    
//     console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 



// ************************ pass a 'JavaScript function' as parameter*************************


// function addStudent(id, refreshCallback)
// {
//     refreshCallback();  
// }

// function refreshStudentList() {
//     console.log('Hello');
// }

// addStudent(1, refreshStudentList);


// ***************************JavaScript function to get the function name.**************************


// function tutorial(){
//     console.log(arguments.callee.name);
// }
// tutorial();

// setTimeout(()=>{
//     console.log("greeting")
// },1000)