import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

export default class ListBarang extends Component {
  render() {
    return (
      <div>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Barang</th>
              <th>Harga</th>
              <th>Gambar</th>
            </tr>
          </thead>
          <tbody>
            {this.props.barang.map((datum, key) => {
              return (
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{datum.nama}</td>
                  <td>{datum.harga}</td>
                  <td>{datum.url}</td>
                  <td>
                    <Button>Beli</Button>
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
