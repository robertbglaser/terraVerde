import React from 'react'

function SpaceshipDetails(data) {

    const input = Object.entries(data)

    const {name, manufacturer, crew, passengers,hyperdrive, model, films, pilots} = data;

    console.log("**** inside of spaceship details **** ", manufacturer)
    return (
        <div>
            <h1>{name}</h1> <br/>
            <label>{manufacturer}</label> <br/>  
            <label>{crew}</label> <label>{passengers}</label> <label>{hyperdrive}</label><br/>

            <label>{model}</label> <br/>
            <h2>Films</h2>


            <h2>Pilots</h2>


            
        </div>
    )
}

SpaceshipDetails.propTypes = {

}

export default SpaceshipDetails

