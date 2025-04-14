 import quotesArr from "../quotes.json"
import Quote from "./Quote";
 function Quotes(){
     return (
        <>
        {
          quotesArr.map((quote)=>{
        return <Quote quote={quote}></Quote>
         })
        }
        </>
     )
 }
 export default Quotes;