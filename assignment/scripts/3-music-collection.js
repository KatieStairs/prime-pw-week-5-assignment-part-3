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

console.log(collection);

//let albumInfo = (collection[i].albumTitle || collection[i].albumArtist || collection[i].albumYear);

//function showCollection(albumInfo){
    //for (i=0; i<collection.length; i++){
        //console.log(collection);
        //let albumInfo = (collection[i].albumTitle || collection[i].albumArtist || collection[i].albumYear);
        //if (albumInfo === collection[i].albumTitle) {
            //return `${collection[i].albumTitle} by ${collection[i].albumArtist}, published in ${collection[i].albumYear}.`;
        //} else if (albumInfo === collection[i].albumArtist) {
            //return `${collection[i].albumTitle} by ${collection[i].albumArtist}, published in ${collection[i].albumYear}.`;
        //} else if (albumInfo === collection[i].albumYear) {
            //return `${collection[i].albumTitle} by ${collection[i].albumArtist}, published in ${collection[i].albumYear}.`;
        //} else {
            //return ("Not in collection.")
        //}
    //}
//}

function showCollection(collection){
    for (let i=0; i<collection.length; i++) {
        console.log(collection.length[i]);
        console.log((`${collection[i].albumTitle} by ${collection[i].albumArtist}, published in ${collection[i].albumYear}.`));
    }return true;
}

console.log(showCollection(collection));

//HOW DO I GET IT TO GO THROUGH EVERY ALBUM AND POST IT IN A DIFFERENT FORMAT???
//Got it, lol. I was trying to return instead of just console.logging the results.

function findByArtist(artist) {
let artistFound= [];
for (let i=0; i < collection.length; i++) 
    if (collection[i].albumArtist === artist){
        artistFound.push(collection[i])
    }
    return artistFound;
}

console.log(findByArtist("B.B. King"));
console.log(findByArtist("Tina Fey"));
console.log(findByArtist("Stevie Nicks"));
console.log(findByArtist("Albert King"));
console.log(findByArtist("John Lee Hooker"));




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









