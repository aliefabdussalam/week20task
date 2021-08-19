import { Component } from 'react';
import Router from './router/indexs'
import { BrowserRouter} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;