/**
 * takes in an array that contains all the words that will be present in the autocomplete feature
 * @param {[]} arr
 */
const createAutoCompleteTree = (arr) => {
  // creates an object that has a node for each letter of the alphabet
  // finds if any words in the array contain that sequence of letters
  // trim nodes that dont have a word attached, append an end node if the word ends at that letter
  // recurse down until the max length word in arr
};

export default createAutoCompleteTree;
