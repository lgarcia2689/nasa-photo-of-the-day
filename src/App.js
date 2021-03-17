import React , {useState, useEffect}from "react";
import "./App.css";
import {BASE_URL,URL_KEY} from './constant/constant'//Importing Props of the the api url and key
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  //Side effect making sure that we only call from the api once
  useEffect(() => {
  axios
  .get(`${BASE_URL}?api_key=${URL_KEY}`)//axios.get is getting api url and key
  .then((res) => {
    console.log(res.data)//logging into the console what is being collected from the api
    setData(res.data)//setting the api info and the tag data into setData 
  })
  .catch((err) => {
    console.log('Houston we have problem')//if there is an error "Houston we have a problem will display in the DOM"
  })
  }, [])
  

  return (
    <div className="App">
      <div className = 'container'>
       <h1>{data.title}</h1>
       <div className = 'imgContainer'>
        <img src = {data.hdurl}/>
       </div>
       <div className='dcContainer'>
        <div className = 'date'>{data.date} </div>
        <div className = 'copyright'>copyright:{data.copyright}</div>
       </div>

       <div className = 'explanation'>{data.explanation}</div>
      </div>
    </div>
  );
}

export default App;
