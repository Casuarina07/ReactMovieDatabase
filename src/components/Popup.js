import React from 'react'

function Popup({ selected, closePopup }) {
    return (
        <section className="popup">
            <div className="content" >
                <h2>{ selected.Title } <span>({ selected.Year })</span></h2>
                <p className="rating">Rating: { selected.imdbRating }</p>
                <div className="plot">
                    <img src={ selected.Poster } alt=""/>
                    <p>
                        <span>Actors: </span>{ selected.Actors }
                        <span>Director: </span>{ selected.Director }
                        <span>Genre: </span>{ selected.Genre }
                        <span>Language: </span>{ selected.Language }
                        <span>Rated: </span>{ selected.Rated }
                        <span>Runtime: </span>{ selected.Runtime }
                        <span>Synopsis: </span>{ selected.Plot }
                    </p>
                    <p></p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup
