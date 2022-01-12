//import logo from './logo.svg';
import './App.css';
//imr
import React from 'react';
//imrd

import ReactDOM from 'react-dom';
import Header from './components/Header';
import Clock from './components/Clock';

import Cake from './components/Cake';
import Animation from './components/Animation';
import Gifts from './components/Gifts';

const App = () => {
  return <div className="container"></div>;
};

ReactDOM.render(
  <>
    <React.StrictMode>
      <Animation />
    </React.StrictMode>

    {/* <Header /> */}
    <Clock />

    <Cake />
    <Gifts />
  </>,
  document.getElementById('root')
);

export default App;





// import React from 'react';
// import './App.css';
// import sketch from './sketch';
// import p5 from 'p5';

// const TEXT = 'Happy Birthday Trisha';

// const App = () => {
//   const canvasRef = React.useRef(null)

//   React.useEffect(() => {
//     const canvasDivElement = canvasRef.current;

//     // NOTE: If you change TEXT value to something else, you'll need to make changes in sketch.js as well to make it work
//     // See my comments in sketch.js
//     new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
//   })

//   return (
//     <div className="main">
//       <div ref={canvasRef} />
//     </div >
//   )
// }

// export default App;
