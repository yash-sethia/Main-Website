import React from 'react';
import Mediator from './Mediator.js'


import './Css/App.css';


/*
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
*/
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Mediator />
      </div>
    );
  }
}
export default App;
