import React , {useState, useEffect}from "react";
import "./App.css";
import {BASE_URL,URL_KEY} from './constant/constant'//Importing Props of the the api url and key
import axios from 'axios'
import styled from 'styled-components'

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

  const StyledFriend = styled.div`
  
    background: purple;
    text-align: center;

    &:hover{
      background: blue;
      transition: 5s
      
    }
    transition: all 5s ease-in;

    img{
      max-width: 100%;
      max-height: 100%;
      display: block;
      border-radius: 30px;

      &:hover {
      transform: scale(1.2);
      transition: all 5s ease-in-out;
    }
    transition: all 5s ease-in;
      }
    .imgContainer{
      width: 600px;        
      border: 5px solid black;
      border-radius: 36px;
      }
    .copyright{
      margin-left: 10px;
      width: 350px;
      font-size: large;
      font-weight: bold;
      }
    .explanation{
      /* border: 5px solid black; */
      margin-top: 20px;
      width: 600px;
      }
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      }
    .dcContainer{
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      }
    .date{
      margin-right: 10px;
      width: 250px;
      text-decoration: solid;
      font-size: large;
      font-weight: bold;
      }
    `
  
  return (
    <StyledFriend>
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
    </StyledFriend>
  );
}

export default App;
