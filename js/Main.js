setTimeout(() => {  //adds a delay so it runs after the other scripts

const word_input = document.querySelector('.word_list_input'),  //words input selector
        run_button = document.querySelector('.find_longest_word');//run button selector

run_button.addEventListener('click', (e) => {
    let word_array = word_input.value.split(/\s/);  //creates array of each word
    let longest_word_length = 0;                    //default longest word length
    let longest_words = [];                         //array for the longest word / words

    word_array.forEach(word => {    //runs once for each word
        if (word.length > longest_word_length) longest_words = [];  //empties the array when there is a new longest word length
        if (word.length >= longest_word_length) {                   //sets the new longest word / words
            longest_words.push(word);                               //pushes the word to the array
            longest_word_length = word.length;                      //sets the longest word length
        }
    });
    // log(longest_word_length);
    log(longest_words);
});
}, 0);