import React from 'react'
import "./Definition.css"
export const Definition = ({ word, meanings, category ,lightMode }) => {
    return (
        <div className="meanings">
            {
                meanings[0] && word && category === "en" && (
                    <audio  src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio } style={{ backgroundColor: "white", borderRadius: 25 ,width:"100%" ,color:"black"}} controls>
                        
                        Your Browser support audio
                    </audio>
                )
            }
            {word === "" ?
                (<span className="subtitle">Start By Typing a word by Search</span>)
                : (
                    meanings.map((mean) => mean.meanings.map((item) => (
                        item.definitions.map((def) => (
                            <div className="singlemean" style={{ backgroundColor: lightMode ? "#3b5360" :"white", color:lightMode ? "white" :"black" }}>

                                <b>{def.definition}</b>
                                <hr style={{ backgroundColor: "black", width: "100%" }} />

                                {def.example && (
                                    <span> <b> Example : </b> {def.example} </span>
                                )}
                                {def.synonyms && (
                                    <span> <b> Synonyms : </b> {def.synonyms.map((s) => `${s},`)}</span>
                                )}

                            </div>
                        ))
                    )))
                )
            }
        </div>
    )
}
