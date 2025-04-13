 import quotesArr from "../data/quotes.json"

 function Quotes(){
     return (
        <>
        {
         quotesArr.map((quote , index )=>{
        return  <div  className="quote">
            <h1>"{quote.quote}"</h1>
            <footer>{quote.author}</footer>
          </div>
         })
        }
        </>
     )
 }
 export default Quotes;