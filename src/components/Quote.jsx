function Quote({quote}){
    return  <div  className="quote">
    <h1>"{quote.quote}"</h1>
    <footer>{quote.author}</footer>
  </div>
}
export default Quote