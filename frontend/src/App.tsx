import './App.css';
import Greet from './components/Greet';
import { PersonList } from './components/PersonList';
import {useState, useEffect} from 'react';

const nameList = [
  {
    first: 'James',
    last: 'Annene'
  },
  {
    first: 'Jay',
    last: 'Sir'
  },
]
function App() {
  const [data, setData] = useState([])
  useEffect( ()=> {
    async function fetchData() {
      console.log('fetching')
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}`)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <Greet name='Transit Visa' version={1}></Greet>
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
