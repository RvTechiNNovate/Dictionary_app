import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import "./Header.css"
import categories from "../../data/Category"

export const Header = ({setcategory,category,word,setword,lightMode}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode ? "#000": "#fff"
            },
            type: lightMode ? "light": 'dark',
        },
    });

    const handleChange=(language)=>{
         setcategory(language)
         setword("")
    }
    return (
        <div className="header">
            <span className="title">{word? word :"Dictionary"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField  
                     className="search" 
                     value={word}
                     label="Search Word"
                     onChange={(e)=>setword(e.target.value)} />

                    <TextField
                    className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={(e)=>handleChange(e.target.value)}

                    >
                        {
                            categories.map((option) => (
                                <MenuItem  key={option.label} value={option.label}>
                                    {option.value}
                                </MenuItem>

                            ))}        


                    </TextField>
                </ThemeProvider>

            </div>
        </div>
    )
}
