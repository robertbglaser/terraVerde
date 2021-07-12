import React from 'react'
import TextInput from './TextInput'
//import { Search } from 'react-feather'
import SpaceshipContent from './SpaceshipContent';

function MainArea() {
    return (
        <div className="container">
            <TextInput type='text'
            id="search"
            className="searchArea" 
            name="searchArea"
            placeholder='Search Input'
            />
            <h1>Starships</h1>
            <SpaceshipContent/>
        </div>
    )
}

export default MainArea
