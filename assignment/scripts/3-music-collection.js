console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished){
    let album= {
    albumTitle: title,
    albumArtist: artist,
    albumYear: yearPublished,
    }
    collection.push(album);
    return album;
}

console.log(addToCollection("Texas Flood", "Stevie Ray Vaughn", 1983));
console.log(addToCollection("Born Under A Bad Sign", "Albert King", 1967));
console.log(addToCollection("Are You Experienced", "Jimi Hendrix", 1967));
console.log(addToCollection("Singin' the Blues", "B.B. King", 1956));
console.log(addToCollection("Live in Cook County Jail", "B.B. King", 1971));
console.log(addToCollection("The Real Folk Blues", "John Lee Hooker", 1966));

//console.log(collection);

function showCollection(title, artist, yearPublished){
    for (i=0; i<collection.length; i++){
        if ((title && artist) === (title && artist))
        return `${title} " by " ${artist}`
}

console.log(showCollection(artist, title));

//function findByArtist(artist) {
//let artistFound=
//for (let i=0; i < collection.length; i++) 
//    if (collection[i].albumArtist === artist){
//        found.push(collection[i])
//    }
//    return artistFound;
//}


//Unfinished stretch goals and notes, you don't have to read further.



//function search(keyword){
  //  console.log('running search');
    //let searchArray = [];
    //for (let i=0; i=collection.length; i++){
    //if 
//} else if {

//} else {

//}
//return searchArray;
//}

//console.log(search('Stevie Ray Vaughn'));


//how to pass an object as an input parameter in a function in Javascript









//Notes from class 11/23

//make a coffee machine
//function brewCoffee(groundCoffee, water){
    
//    console.log(`brewing ${water} oz of ${groundCoffee}`)

//    return `${groundCoffee} ${water} oz is ready!`
//}
//Function is done after return, must console log to see it.
//You can only have 1 return per function unless using 
//if/else statements.

//const starbucks = 'Starbucks Holiday Blend';

//Run the coffee machine
//const result = brewCoffee(starbucks, 12);

//console.log(result); //or
//console.log(brewCoffee(starbucks, 12)); //but want to get in the
//habit of creating a variable called result or something

//brewCoffee('Starbucks Holiday Blend', 12);
//brewCoffee('Folgers', 10);

//Don't name parameters the same as Variables!

//make a coffee machine
//function brewCoffee(groundCoffee, water){
    
//    console.log(`brewing ${water} oz of ${groundCoffee}`);
    
//    if (water >12 && hasLargeCups()){ //can call functions in functions.
//        return `Large ${groundCoffee}`
//    } else {
//        return `${groundCoffee}`;
//    }
//    return `${groundCoffee} ${water} oz is ready!`;

//}

//functions hasLargeCups() {
 //   if(have large cups){ //insert logic here (this logic won't work)
  //      return true;
    //} else {
      //  return false;
    //}
//}

//const sum = 2 + 2;
//let list = [1,2,3];

//let removeItem = list.pop();
//console.log(removeItem);
//console.log(list);

//undefined just means nothing, it's not an error unless you 
//needed a return.
//fireship on youtube - hoisting.
//in part 3 we don't want nothing, we want an empty array.
//
//Trust the process!!
//
//
//