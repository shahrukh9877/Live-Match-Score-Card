import Main from './Main.jsx';
import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const[data, setData] = useState([]);
  useEffect(()=>{
    Api();
  },[])
   function Api(){
    fetch('https://api.cricapi.com/v1/currentMatches?apikey=7ffffe0b-8b03-4c57-afde-b341fd1c7c71&offset=0')
    .then(res => res.json())
    .then(res => setData(res.data))
    // .then(res =>  console.log(res))

   
   }

  return (
    <div className="App">
     <Main data={data}/>
    </div>
    
  );
}

export default App;
