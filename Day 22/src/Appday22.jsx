import React, { useState , useEffect} from "react";
import './Styleday22.css';
import Template from "./comp/templates";
import Meme from "./comp/meme";



function App(props) {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
      setTemplates(data.data.memes);
    });
  }, []);
  return (
    <div className="App">
      <h1>Pick up any meme template :]</h1>
      {
        meme === null ? (<Template templates={templates} setMeme={setMeme} />) : (<Meme meme={meme} setMeme={setMeme}/>)
      }
    </div>
      
  );
};

export default App;