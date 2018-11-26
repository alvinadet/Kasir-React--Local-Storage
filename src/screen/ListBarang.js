import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class ListBarang extends Component {
  state = {
    barang: [],
    transactionItems: []
  };
  handleBeli = e => {
    const { transactionItems } = this.state;
    const beli = this.state.barang[e];
    transactionItems.push(beli);
    localStorage.setItem('transaction', JSON.stringify(transactionItems));
  };
  componentDidMount() {
    this.setState({
      barang: this.props.barang
    });
  }
  render() {
    return (
      <div>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Barang</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {this.props.barang.map((datum, key) => {
              return (
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{datum.nama}</td>
                  <td>{datum.harga}</td>

                  <td>
                    <Link to={`/barang/${key}`}>
                      <Button>Detail Makanan</Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
