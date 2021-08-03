import './App.css';
import Container from '@material-ui/core/Container';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './Component/Header/Header';

import { Definition } from './Component/Definition/Definition';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';



function App() {
  const [category, setcategory] = useState("en")
  const [word, setword] = useState("")
  const [meanings, setmeanings] = useState([])
  const [lightMode, setlightMode] = useState(true)

  const DarkMode = withStyles({
  switchBase: {
    color: grey[300],
    '&$checked': {
      color: grey[500],
    },
    '&$checked + $track': {
      backgroundColor: grey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);


  const dictAPI = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      console.log(data)
      setmeanings(data.data)

    } catch (error) {
      console.log(error)

    }

  };
  console.log(meanings)

  useEffect(() => {
    dictAPI()
     // eslint-disable-next-line
  }, [word,category])
  return (
    <div className="App" style={{ height: "100vh", backgroundColor: lightMode ? "#fff": "#282c34", color:  lightMode ? "#282c34" :"#fff"   ,transition:"all 0.5s linear"}}>
      <Container style={{ display: "flex", flexDirection: "column", height: "100vh" ,justifyContent:"space-evenly"}} maxWidth="md">
        <div style={{position:"absolute",top:0 ,right:15}}>
          <span>{lightMode ? "Dark" :"Light"} Mode</span>
          <DarkMode checked={lightMode} onChange={()=>setlightMode(!lightMode)}/>
        </div>
        <Header category={category} setcategory={setcategory}  word={word} setword={setword} lightMode={lightMode}/>
        <Definition word={word} meanings={meanings} category={category} lightMode={lightMode} />
      </Container>
      
    </div>
  );
}

export default App;
