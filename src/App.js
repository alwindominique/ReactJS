import './App.css';
import Girl1 from './assets/images/girl1.png';
import Girl2 from './assets/images/girl2.png';
import BackImage from './assets/images/back.png';
import Spark from './assets/images/spark.png';
import BackImage2 from './assets/images/back2.png';
import React, { Fragment } from 'react'
function App() {
  return (
    <Fragment>
      <div className="Apparel">
      <div id ="spark" style= {{ 
        backgroundImage: `url(${Spark})`
       }}/>  
    </div> 
    <div className="Apparel2">
        <div id="label">
          Free Assembly Spring 2022
        </div>
        <div id="girl1" style={{
          backgroundImage: `url(${Girl1})`
        }} />
        <div id="girl2" style={{
          backgroundImage: `url(${Girl2})`
        }} />
        <div id="back-image" style={{
          backgroundImage: `url(${BackImage})`
        }} >
          <div id="label">Jackets</div>
        </div>
    </div>
    <div className="Apparel3">
      <div id = "back-image2" style={{ 
        backgroundImage: `url(${BackImage2})`
       }}/>
       <div id = "label">Jackets</div>
       </div>
    </div>
    </Fragment>
  );
}
export default App;
