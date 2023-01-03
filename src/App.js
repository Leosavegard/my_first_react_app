import React, { useState } from 'react';

import './App.css';

const App = () => {
  function DateInputs() {
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');

    return (
      <div className="container">
        <div>
          <h1 className="title">Current Date</h1>
          <input
            type="date"
            value={date1}
            onChange={(event) => setDate1(event.target.value)}
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            className="input"
          />
        </div>
        <div>
          <h1 className="title">Prev Date</h1>
          <input
            type="date"
            value={date2}
            onChange={(event) => setDate2(event.target.value)}
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            className="input"
          />
        </div>
      </div>
    );
  }

  return (
    <DateInputs />
  )
};

export default App;
