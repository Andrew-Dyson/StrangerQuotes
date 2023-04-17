import CharacterItem from './CharacterItem';

const CharacterList = ({quotes, characters, onCharacterGuessed}) => {


    if(!quotes) return null

    // const mappedQuotes = quotes.map((quote, index) => {
    //     return <CharacterItem
    //     key={index}
    //     quote={quote}
    //     onCharacterGuessed={onCharacterGuessed}
    //     />

    // })

console.log(characters[0])

    return (
        <div>
        <ul>
          {characters}
        </ul>
      </div>
      )

}
export default CharacterList;