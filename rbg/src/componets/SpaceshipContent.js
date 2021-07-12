import React, {useState, useEffect } from 'react';
import SpaceshipDetails from './SpaceshipDetails';

function SpaceshipContent() {
    const [startshipData, setStartshipData ]= useState({})

    useEffect(() => {
        
        fetch('https://swapi.dev/api/starships/')
        .then(res =>  res.json())
       // .then (res =>console.log(res.results))
       .then (res => setStartshipData(res.results))

    },[]);


    const data  = Object.entries(startshipData);


    const handleClick = (e) =>{
      // console.log("a click has been heard " , e.target.id)
     // console.log(data[e.target.id][1]); 
        SpaceshipDetails(data[e.target.id][1])  

    } 

    const entryLine1 = data.map((item, index) => {
        let numPilots = item[1].pilots.length ;
        let numFilms = item[1].films.length;
        const buttonText = "See Details ->";
      //  const button = ` <button id={index} onClick={handleClick}> {buttonText} </button> `
        const contentLine = `Pilots:  ${numPilots}    Films: ${numFilms}`
        
        return (
            <div className='content'> 
                <li key={index}> <h2> {item[1].name} </h2></li>
                <div className='detailArea'> 
                <label className='pilots'>{contentLine} <button id={index} onClick={handleClick}> {buttonText} </button> </label> 
                
                </div>
                <hr/>
            </div>
            )
})  
 


    return (
        
        <div>
            <ul>
                {entryLine1}
                
            </ul>
            
        </div>
    )
    
}

export default SpaceshipContent

