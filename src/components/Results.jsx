import React from "react"
import Result from "./Result"

import "../App.css"

function Results ({ results, openPopup }) {
  console.log(results)
  return (

    <div className="results-box">
      {results.map(result => (
        <Result key={result.imdbID} result={result} openPopup={openPopup} />
      ))}
    </div>
  )
}

export default Results