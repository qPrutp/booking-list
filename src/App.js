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
      currentPage: 1,
      stepTable: 5,
      hotelsFromServer: [],
      dataShow: []
    }
  }

  refreshDataFromServer = () => {
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

  loadData() {
    const {name,address,price,current} = this.state;
    fetch(`http://localhost/booking-list/api/test.php`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        address: address,
        price: price,
        current: current
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
      }).catch((error) => {
        console.log(error);
      });
  }

  newPage(i) {
    console.log(i);
  }

  render() {
    const { currentPage, stepTable, hotelsFromServer, dataShow } = this.state;
    let maxPage = Math.ceil(hotelsFromServer.length/stepTable);
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
          <Tbody hotels={dataShow} />
          <tfoot>
            <tr>
              <td colSpan={3}>
                <div className="tab-nav">
                  <button onClick={() => this.newPage('prev')} >&#9668;</button>
                  <span>&emsp;ст.:&nbsp;{currentPage}/{maxPage}&emsp;</span>
                  <button onClick={() => this.newPage('next')} >&#9658;</button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default App;
