import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class ListBarang extends Component {
  state = {
    barang: []
  };

  componentDidMount() {
    this.setState({
      barang: this.props.barang
    });
  }

  hapus = key => {
    const { barang } = this.state;
    this.setState({
      barang: barang.splice(key, 1)
    });

    localStorage.setItem('barang', JSON.stringify(barang));
    this.render();
  };
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
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      onClick={() => {
                        this.hapus(key);
                      }}>
                      Hapus
                    </Button>
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
