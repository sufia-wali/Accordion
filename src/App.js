import Base from './components/Base';
import Data from './components/Data';
import './App.css';
import {React, useState} from 'react';
function App() {

  const [content,setContent] = useState(Data);
  return (
    <div className="container">
        {content.map((item) => {
          return(
            <Base key={item.id} {...item}/>
          )
        })}
    </div>
  );
}

export default App;
