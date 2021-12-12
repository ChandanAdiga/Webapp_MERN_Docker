import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    // "proxy": "http://localhost:5050"
    axios.get('/api/v1/inventory').then(resp => {
      console.log(resp);
      this.setState({'items': resp.data.items});
    }, err=> {
      console.log(err);
    });
  }

  render() {
    let itemsList = this.state.items.map((item) => {
      return <li key={item.name} style={{ marginTop: 20}}>{item.name} | {item.category} | {item.price}</li>
    });
    if(itemsList.length > 0) {
      return(
        <div style={{ margin: 50}}>
          { itemsList }
        </div>
      );
    } else {
      return(
        <div style={{ margin: 50}}>
          <p>No items found!</p>
        </div>
      );
    }
  }
}

export default App;
