import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
export default class DetailBarang extends Component {
  state = {
    detailItem: {}
  };
  handleChange = e => {
    const { detailItem } = this.state;
    let { nama, harga, url } = detailItem;
    detailItem[e.target.name] = e.target.value;
    this.setState({
      detailItem: detailItem
    });
  };
  componentDidMount() {
    let barang = JSON.parse(localStorage.getItem('barang'));
    let getDetailItem = barang[this.props.match.params.id];
    this.setState({
      detailItem: getDetailItem
    });
  }

  handleSubmit = key => {
    let barang = JSON.parse(localStorage.getItem('barang'));
    barang.splice(key, 1, this.state.detailItem);
    localStorage.setItem('barang', JSON.stringify(barang));
    window.location.href = '/barang';
  };
  render() {
    const { nama, harga, url } = this.state.detailItem;
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="Nama Barang">Nama Barang</Label>
            <Input
              type="text"
              name="nama"
              placeholder="Nama Barang"
              onChange={this.handleChange}
              value={this.state.detailItem.nama}
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
              value={this.state.detailItem.harga}
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
              value={this.state.detailItem.url}
              required
            />
          </FormGroup>
          <Button onClick={() => this.handleSubmit(this.props.match.params.id)}>
            Simpan
          </Button>
        </Form>
      </div>
    );
  }
}
