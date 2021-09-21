import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import Counter from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';

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
       <Greet name='Alexander Brash' messageCount={22} isLoggedIn={true} />

       <Person name={personName} />

       <PersonList names={nameList} />

       <Status status='error' />

       <Heading>Placeholder text</Heading>

       <Oscar>
         <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
       </Oscar>
        <Button handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
        />

        <Input value='' handleChange={(event) => console.log(event)}
        />

        <Container styles={{ border: '1px solid black', padding: '1rem', display: 'flex'}} />

        <Counter />

        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>

      </header>
    </div>
  );
}

export default App;
