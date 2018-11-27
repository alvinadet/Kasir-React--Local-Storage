import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { CreateBarang, DetailBarang, Kasir, ListBarang } from './screen';
import { Navigation } from './components';

class App extends Component {
  state = {
    barang: JSON.parse(localStorage.getItem('barang'))
      ? JSON.parse(localStorage.getItem('barang'))
      : []
  };

  getDerivedStateFromProps() {
    let barang = JSON.parse(localStorage.getItem('barang'));
    console.log('wiil mount');
    const newArry = [1, 2, 3];
    this.setState(
      {
        barang: barang
      },
      () => {
        console.log(this.state.barang);
      }
    );
  }
  render() {
    console.log(this.state.barang);
    return (
      <div>
        <Switch>
          <Route path="/" component={Navigation} />
        </Switch>

        <Switch>
          <Route
            path="/"
            exact={true}
            component={() => <Kasir barang={this.state.barang} />}
          />
          <Route
            path="/barang"
            exact={true}
            component={() => <ListBarang barang={this.state.barang} />}
          />
          <Route
            path="/barang/create"
            component={() => <CreateBarang barang={this.state.barang} />}
          />
          <Route path="/barang/:id" component={DetailBarang} />
        </Switch>
      </div>
    );
  }
}

export default App;
