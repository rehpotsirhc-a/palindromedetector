function isPalindrome() {
    const word = document.getElementById("wordInput").value; // da html input box

    if (word.trim() === "") {
        document.getElementById("result").innerText = "Real funny pal."; // checks if the user thinks they're funny
        return;
    }

    const cleanedWord = word.replace(/\s+/g, '').toLowerCase(); // a regex that removes all spaces and converts to lowercase

    if (cleanedWord === cleanedWord.split('').reverse().join('')) { // chcks if the word is equal to the split and reversed word
        document.getElementById("result").innerText = "Dats a palindrome bruh!"; // if true, let them know
    } else {
        document.getElementById("result").innerText = "This ain't a palindrome man. Do better."; // if false, tell em
    }
}