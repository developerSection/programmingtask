import React, { useState } from 'react';
import './App.css';
import CategoryList from './components/CategoryList';


function App() {

  //search input
  const [inputText, setInputText] = useState("");

  // input value handler function
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    // main App component defination
    <div className="App">
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-9.col-md-4 col-lg-4 mx-auto">
            <p className='m-0'>Categories:</p>
            <ul className="dropdown">
              <li>
                <div>
                  <input className='form-control fs-7' onChange={inputHandler} type={'text'} placeholder="Category Name"></input>
                </div>
                {/* category list component */}
                <CategoryList input={inputText} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
