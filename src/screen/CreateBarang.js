import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

export default class CreateBarang extends Component {
  state = {
    nama: '',
    harga: 0,
    url: '',
    barang: [],
    isRedirect: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { barang } = this.state;
    let data = {
      nama: this.state.nama,
      harga: this.state.harga,
      url: this.state.url
    };

    barang.push(data);
    console.log(barang);
    localStorage.setItem('barang', JSON.stringify(barang));
    this.setState({
      isRedirect: true
    });
  };

  componentDidMount() {
    this.setState({
      barang: this.props.barang
    });
    console.log(this.state.barang);
  }

  render() {
    return (
      <div>
        {this.state.isRedirect == true && <Redirect to="/barang" />}

        <h1>Tambah Barang</h1>
        <Form>
          <FormGroup>
            <Label for="Nama Barang">Nama Barang</Label>
            <Input
              type="text"
              name="nama"
              placeholder="Nama Barang"
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="Nama Barang">Harga Baranng</Label>
            <Input
              type="number"
              name="harga"
              placeholder="Harga Barang"
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="Nama Barang">URL Gambar</Label>
            <Input
              type="text"
              name="url"
              placeholder="URL Gambar"
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          {this.state.redirect ? (
            <Redirect to="/barang" />
          ) : (
            <Button onClick={() => this.handleSubmit()}>Simpan</Button>
          )}
        </Form>
      </div>
    );
  }
}
