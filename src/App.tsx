import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Black',
      last: 'Panther'
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
       <Greet name='Alexander Brash' messageCount={20} isLoggedIn={true} />

       <Person name={personName} />

       <PersonList names={nameList} />
      </header>
    </div>
  );
}

export default App;
