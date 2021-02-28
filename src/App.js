import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const [ count, setCount] = useState(0);
  // const [ count, setCount] = useState([]);
  const [ nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])
  // const nayoks = ['Jasim','DeepJol','BappaRaz','Omar Sani', 'Alamgir']
  // const nayoks = [{name: 'Jasim', age: 66}, {name: 'DeepJol', age: 65}, {name: 'BappaRaz', age: 15}, {name: 'Omar Sani', age: 35}, {name: 'Alamgir', age: 87, height: '48'}]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        // nayoks.map(nayok => <li>{nayok}</li>)
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)
      }
      {/* <Nayok name={nayoks[1]} age="56"></Nayok>
      <Nayok name="Sakib Khan"></Nayok>
      <Nayok name={nayoks[0]}></Nayok>
      <Nayok></Nayok> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>
  );
}
function MovieCounter(params) {
  // const count = 5;
  const [count, setCount] = useState(5);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of Movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props) {
  return <h4>Movies I have acted: {props.movies}</h4>
}
function Nayok(props) {
  // console.log(props);
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami KholNayok - {props.name}</h1>
      <h3>I have done 5 movies in {props.age || 30} years</h3>
    </div>
  )
}
export default App;
