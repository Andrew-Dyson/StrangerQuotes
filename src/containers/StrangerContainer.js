import { useState, useEffect } from "react";
import QuoteList from "../components/QuoteList.js";
import CharacterList from "../components/CharacterList.js";
import QuoteItem from "../components/QuoteItem.js";

const StrangerContainer = () => {
    const [quotes, setQuotes] = useState([])
    const [characters, setCharacters] = useState([
        {
          id: 1,
          name: "Eleven",
        },
        {
          id: 2,
          name: "Dustin Henderson",
        },
        {
          id: 3,
          name: "Steve Harrington",
        },
        {
          id: 4,
          name: "Lucas Sinclair",
        },
        {
          id: 5,
          name: "Jim Hopper",
        },
        {
          id: 6,
          name: "Nancy Wheeler",
        },
        {
          id: 7,
          name: "Mike Wheeler",
        }
      ])
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [guessedAnswer, setGuessedAnswer] = useState("")
    


useEffect(() => {
    getQuotes()
}, [])

let filterQuotes = function (quotes) {
    return quotes.filter((quote) => {
    return quote.author === "Dustin Henderson" || quote.author === "Eleven" || quote.author === "Steve Harrington" || quote.author === "Lucas Sinclair" || quote.author === "Jim Hopper" || quote.author === "Nancy Wheeler" || quote.author === "Mike Wheeler"
})}


const getQuotes = () => {
    fetch("https://strangerthings-quotes.vercel.app/api/quotes/99")
    .then(res => res.json())
    // .then(quotes => setQuotes(quotes))
    .then(quotes => setQuotes(filterQuotes(quotes)))
    
}

// useEffect(() => {
//     getCharacters()
// }, [])

// const getCharacters = () => {
//     const characterArray = [
//         {
//           id: 1,
//           name: "Eleven",
//         },
//         {
//           id: 2,
//           name: "Dustin Henderson",
//         },
//         {
//           id: 3,
//           name: "Steve Harrington",
//         },
//         {
//           id: 4,
//           name: "Lucas Sinclair",
//         },
//         {
//           id: 5,
//           name: "Jim Hopper",
//         },
//         {
//           id: 6,
//           name: "Nancy Wheeler",
//         },
//         {
//           id: 7,
//           name: "Mike Wheeler",
//         }
//       ]
    
//     setCharacters(characterArray)
// }





const onCharacterGuessed = (chosenCharacter) => {
    console.log(chosenCharacter)
    setGuessedAnswer(chosenCharacter)
}
const handleAuthor = (quote) => {
    console.log(quote.author)
    setCorrectAnswer(quote.author)
}


return ( 
    <>
        <QuoteList quotes={quotes} handleAuthor={handleAuthor} />
        <CharacterList quotes={quotes} characters={characters} onCharacterGuessed={onCharacterGuessed} />
    </>
 );

}
export default StrangerContainer;



