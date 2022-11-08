import './App.css';
import {useEffect, useState} from 'react'


function App() {

  let [team, setTeam] = useState()

  let myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", "63aafd4c3e8fcdca734f5eb313759249");
  myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  const getTeam = () => {
    fetch("https://v3.football.api-sports.io/teams?id=33", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.response[0].team, "result")
      setTeam(result.response[0].team)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    getTeam()
  },[])


  return (
    <div>
      <h1>Footballr</h1>
      <ul>
        <li>{team.name}</li>
        <img src={team.logo}/> 
        <li>{team.founded}</li> 
      </ul>  

    </div>
  );
}

export default App;
