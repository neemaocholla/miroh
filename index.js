//Extract the last four characters from the string below;"extravaganza"
let text = "extravaganza"
    console.log(text.indexOf("anza"));
    console.log(text.slice(8));

    //Insert the following string at the fourth index of the below variable:"eat"const food = //"The quick fox jumped over the lazy dog"
    let sentence = "The quick brown fox jumped over the lazy dog"
    let food = sentence.slice(0,4) + "eat" + sentence.slice(4)
    console.log(food)

    //Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
        const story = "The quick brown fox jumps over the lazy dog"
        function countOccurrences(text, word) {
          return text.toLowerCase().split(word.toLowerCase()).length - 1;}
           console.log(countOccurrences(story, "the"));
            console.log(countOccurrences(story, "brown"))

    //Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
         const string1 = "The pupils are reading in the library"
         const string2 = "The child was sitting on the table before it fell"

         let sentence1 =string1.includes('are'? 'are' : 'not included');
          console.log(sentence1);
         
         let sentence2 =string2.includes('sitting'? 'sitting' : 'not included');
         console.log(sentence2)


    //Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
         let w = "wonderful"
         let x = "amazing"
         let y = "UndERneath"
         let z = "A wonderful world"

         console.log(w.toUpperCase());
         console.log(y.toLowerCase());
         console.log(y.toLowerCase());
         console.log(z.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));


       