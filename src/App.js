import React, { Component } from 'react';
import './App.css';
import Tbody from './Tbody.js';
import { getHotelsFromServer } from './services/server.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: false,
      address: false,
      price: false,
      hotelsFromServer: []
    }
  }

  refreshDataFromServer = () => {
    this.setState({
      name: false,
      address: false,
      price: false,
      hotelsFromServer: []
    });
    
    getHotelsFromServer().then((hotels) => {
      this.setState({ hotelsFromServer: hotels });
    }).catch((error) => {
      this.setState({ hotelsFromServer: [] });
    });
  }

  componentDidMount() {
    this.refreshDataFromServer();
  }

  sortList(i) {
    switch(i) {
      case 'name': this.setState({
        name: true,
        address: false,
        price: false,
        hotelsFromServer: this.state.hotelsFromServer.sort(function (obj1, obj2) {
          if (obj1.name < obj2.name) return -1;
          if (obj1.name > obj2.name) return 1;
          return 0;
        })
      }); break;
      case 'address': this.setState({
        name: false,
        address: true,
        price: false,
        hotelsFromServer: this.state.hotelsFromServer.sort(function (obj1, obj2) {
          if (obj1.address < obj2.address) return -1;
          if (obj1.address > obj2.address) return 1;
          return 0;
        })
      }); break;
      case 'price': this.setState({
        name: false,
        address: false,
        price: true,
        hotelsFromServer: this.state.hotelsFromServer.sort(function (obj1, obj2) {
          if (obj1.price < obj2.price) return -1;
          if (obj1.price > obj2.price) return 1;
          return 0;
        })
      }); break;
      default: return false;
    }
  }

  render() {
    const { hotelsFromServer } = this.state;
    const span = <span className="sort">&#9650;</span>;
    return (
      <div className="main">
        <button className="load" onClick={() => this.refreshDataFromServer()} >Load</button>
        <table>
          <thead>
            <tr>
              <th onClick={this.state.name === false ? () => this.sortList('name') : () => 0} >
                Назва
                {this.state.name ? span : ''}
              </th>
              <th onClick={this.state.address === false ? () => this.sortList('address') : () => 0} >
                Адрес
                {this.state.address ? span : ''}
              </th>
              <th onClick={this.state.price === false ? () => this.sortList('price') : () => 0} >
                Вартість
                {this.state.price ? span : ''}
              </th>
            </tr>
          </thead>
          <Tbody hotels={hotelsFromServer} />
        </table>
      </div>
    );
  }
}

export default App;
