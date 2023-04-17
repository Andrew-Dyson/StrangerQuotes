
const CharacterItem = ({quote, character, onCharacterGuessed}) => {


   const handleGuessClick = (event) => {
    const characterGuessed = event.target.textContent
    onCharacterGuessed(characterGuessed)
        

}



return (
    <div>
    <li onClick={handleGuessClick} value={quote.author}>{quote.author}{character}</li>
    <li onClick={handleGuessClick} value={character}>{character}</li>
    </div>
)


}




export default CharacterItem;