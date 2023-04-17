
const QuoteItem = ({quote, handleAuthor}) => {


handleAuthor(quote)

console.log(quote)
   

return (
    <div>
    <h1> {quote.quote}{quote.author} </h1>
    </div>
)



}




export default QuoteItem;