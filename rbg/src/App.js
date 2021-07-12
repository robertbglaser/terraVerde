import React  from 'react'
//import rocket from 'https://assets.codepen.io/27444/rocket.svg'
//import TestWorld from './TestWorld'
// import TextInput from './componets/TextInput';
import { useHistory } from 'react-router-dom';
import NavBar from './componets/NavBar';
import MainArea from './componets/MainArea';
import './App.css';


function App() {

  const history = useHistory();
  console.log(history);

  return (
    <div className="App">
      <NavBar/>
      <MainArea/>
      
    </div>
  );
}

export default App;
