import QuoteItem from './QuoteItem';

const QuoteList = ({quotes, handleAuthor}) => {


    if(!quotes) return null
    console.log(quotes)

    const mappedQuotes = quotes.map((quote, index) => {
        return <QuoteItem
        key={index}
        quote={quote}
        handleAuthor={handleAuthor}
        />

    })


    return (
      <div>
          {mappedQuotes[0]}
      </div>
      )

}
export default QuoteList;