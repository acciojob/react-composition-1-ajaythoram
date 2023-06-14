
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName] = useState("");
  function render() {
       
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          <li>Tab 1</li>
          <li>Tab 2</li>
          <li>Tab 3</li>
        </ul>
        <p>This is content for {name}</p>
    </div>
  )
}

export default App
