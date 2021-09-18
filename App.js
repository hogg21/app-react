import logo from './logo.svg';
import './App.css';
import Fconponents from './Fconponents';
import Class from './Class'
import React, { useRef, useState } from 'react';
import List from './List';




function App() {
  const [visibleList, setVisible] = useState(true);

  const toggleList = () => {
    setVisible((visible) => !visible)
  }
  return (
    <div className="App">
      {visibleList && <List></List>}
      <button onClick={toggleList}>Показать / скрыть числа</button>
    </div>
  );
}

export default App;
