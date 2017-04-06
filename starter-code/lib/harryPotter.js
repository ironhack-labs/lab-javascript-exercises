 var birthdays = ["Severus Snape", "9 January", "Arthur Weasley", "6 February",
                  "Ron Weasley", "1 March", "Remus Lupin", "10 March",
                  "Fred & George Weasley", "1 April", "Pomona Sprout", "15 May",
                   "Draco Malfoy", "5 June", "Dobby", "28 June",
                   "Neville Longbottom", "30 July", "Harry Potter", "31 July",
                   "Ginevra Weasley", "11 August", "Percy Weasley ", "22 August",
                   "Hermione Granger", "19 September", "Minerva McGonagall",
                   "4 October", "Filius Flitwick", "17 October", "Molly Weasley",
                   "30 October", "Bill Weasley", "29 November", "Rubeus Hagrid",
                   "6 December", "Charlie Weasley", "12 December"];

  var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                      "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];
// var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
//                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];


// Create a function that receives an array and returns an array of two dimensions.
// Each internal array should have the name of one character and his date of birthday.

function arrayChunker(array) {

  return _.chunk(array, 2);

}



// Now that we have our two-dimensions array, we notice that some of the birthdays are missing.
// But we found another array with birthdays from the book.

// Create a function that adds this array above to the first one you manipulated with the same format.
// The function should return an array with all the birthdays in pairs.



function addingBirthdays () {

    return _.concat(arrayChunker(birthdays), arrayChunker(moreBirthdays));

}
