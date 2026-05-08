// Only .map and .filter are stored in the variable 

// Always use forof to convert any objects to array,
// you can iterate any array , string by using forof but 
// you can't use it to iterate the objects 
// it also can't be stored in any variable 

// To iterate the objects we use forin 
// map is not iterable by forin 
// it is iterable by forof


// map holds the keyvalue pairs and it always holds the 
// unique value 

// foreach is widely used in arrays you can use it in 
// objects as well foreach is an callback function
// foreach can take up to 3 parameters (item, index, arr)
// you can't hold foreach in any variable and you can't 
// return any value 

// variable.filter is also same as foreach it is also 
// a callback function you can hold .filter in any variable
// and can also return the value as well .filter is 
// used to perform any conditions in the array \
//.filter is used to perform true false condition,
// you won't be able to perform other actions like
// add 10 to all the elements of the array 

// to perform other actions we use map()
// map also have 3 parameters (item, index, arr) item is neccesary and index, arr is optional 

// difference between .filter and map
// filter() keeps/remove elements based on the condition
// filter() returns the value 
// map() transforms every element 
// ands it also returns the value 

// reduce( (accumulator, currentvalue) => accumulaor + currentvalue, initialvalue ) 
// is used to find total of the shopping cart  