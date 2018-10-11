import React, { Component } from 'react';
import './App.css';
import Tbody from './Tbody.js';
import { Hotels } from './constants/const_data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      address: false,
      price: false,
      hotels: Hotels
    }
  }

  sortList(i) {
    switch(i) {
      case 'name': this.setState({
        name: true,
        address: false,
        price: false,
        hotels: this.state.hotels.sort(function (obj1, obj2) {
          if (obj1.name < obj2.name) return -1;
          if (obj1.name > obj2.name) return 1;
          return 0;
        })
      }); break;
      case 'address': this.setState({
        name: false,
        address: true,
        price: false,
        hotels: this.state.hotels.sort(function (obj1, obj2) {
          if (obj1.address < obj2.address) return -1;
          if (obj1.address > obj2.address) return 1;
          return 0;
        })
      }); break;
      case 'price': this.setState({
        name: false,
        address: false,
        price: true,
        hotels: this.state.hotels.sort(function (obj1, obj2) {
          if (obj1.price < obj2.price) return -1;
          if (obj1.price > obj2.price) return 1;
          return 0;
        })
      }); break;
      default: return false;
    }
  }

  render() {
    const span = <span className="sort">&#9660;</span>;
    return (
      <div className="main">
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
          <Tbody hotels={this.state.hotels} />
        </table>
      </div>
    );
  }
}

export default App;
