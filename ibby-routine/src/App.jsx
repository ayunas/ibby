import React from 'react';
import logo from './logo.svg';
import './App.scss';
import routineJSON from './data/ibby-routine.json';
import Header from './Header';
import Step from './Step';


function App() {
  const [routine, setRoutine] = React.useState([]);
  console.log(routine);
  React.useEffect(() => {
    setRoutine(routineJSON);
  },[])

  return (
    <>
      <Header/>
      <main>
        <div className="steps">
          <Step step={routine[0]}/> 
        </div>
        {/* {routine.length && routine[0].number} */}
      </main>
    </>
  )
}

export default App;
