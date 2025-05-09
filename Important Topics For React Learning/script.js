// mutable & immmutable
// arrays, objects, destructure, export and import
// map, filter, arrow fun, spread operator

//array
var array = [1,2,3,4];

// object
var object = {name:"xyz", price:299};

// spread operator

// with Array
 var copyArray = [...array];
 //with obj
 var copyObject = {...object};

//  mutable & immutable
var state = [1,2,3,4]; // state is immutable ,can't be changed
var copyState = [...state];
copyState.pop();
state = copyState; // state change in immutable way


// export default and export

function card(){}
// export default card(); // single export
// export function cart(){}; // multiple export

// arrow fun with implicit return 
// forEach(()=>{});

// map and filter

// Both are return copy of your array

//(a) map : return is must because return is add your elem into new array 
// map apke elem ke count ko kam nhi krta
var arr = [1,2,3,4,5]
var ansMap = arr.map((value)=>value>2? value : 1);

//(b) filter : worn on ture or false if get ture then your elem is added into new array but if get false the your elem is not added into your array.
// filter  apke elem ke count ko kam kr skta hai according to your need aur logic you describe;


var ansFilter = arr.filter((value)=>value!=4);
