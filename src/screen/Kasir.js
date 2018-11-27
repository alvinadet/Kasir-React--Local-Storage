import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Table,
  Label,
  Card,
  Button
} from 'reactstrap';

export default class Kasir extends Component {
  state = {
    barang: [],
    nama: '',
    harga: 0,
    satuan: 0,
    jumlah: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRemove = key => {
    const { barang } = this.state;
    barang.splice(key, 1);
    this.setState({
      barang
    });
    console.log(barang);
  };

  handleSubmit = () => {
    const { nama, harga, satuan, barang } = this.state;
    let data = {
      nama: nama,
      harga: parseInt(harga),
      satuan: parseInt(satuan),
      jumlah: harga * satuan
    };
    console.log(data);
    this.setState({
      barang: barang.concat([data]),
      nama: '',
      harga: 0,
      satuan: 0
    });
  };

  sumBarang = () => {};

  render() {
    console.log(this.state.barang);
    return (
      <Container>
        <Row>
          <Col md={6}>
            <Row style={{ height: 400 }}>
              <Col>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nama</th>
                      <th>Harga</th>
                      <th>Satuan</th>
                      <th>Jumlah</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.barang.map((datas, key) => {
                      return (
                        <tr>
                          <th scope="row">{key + 1}</th>
                          <td>{datas.nama}</td>
                          <td className="text-right">{datas.harga}</td>
                          <td className="text-right">{datas.satuan}</td>
                          <td className="text-right">{datas.jumlah}</td>
                          <td>
                            <Button
                              className="mx-1"
                              onClick={() => {
                                this.handleRemove(key);
                              }}>
                              Hapus
                            </Button>
                            <Button className="mx-1">Edit</Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table>
                  <tbody>
                    <tr>
                      <th>Jumlah</th>
                      <td className="text-right">{this.state.jumlah}</td>
                    </tr>
                    <tr>
                      <th>Masukan Uang</th>
                      <td className="text-right">
                        <input
                          className="text-right"
                          type="number"
                          style={{ width: 150 }}
                          onChange={this.kembalian}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Kembalian</th>
                      <td className="text-right">{this.state.kembalian}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Col>

          <Col md={6} className="">
            <Container>
              <Card style={{ width: 300 }} className="p-4">
                <Label className for="Nama Barang">
                  Nama Barang
                </Label>
                <Input
                  type="text"
                  name="nama"
                  onChange={this.handleChange}
                  placeholder="Nama Barang"
                  value={this.state.nama}
                  required
                />

                <Label for="Harga Barang">Harga Barang</Label>
                <Input
                  type="number"
                  name="harga"
                  value={this.state.harga}
                  onChange={this.handleChange}
                  placeholder="Harga Barang"
                  on
                  required
                />

                <Label for="Satuan">Satuan</Label>
                <Input
                  type="number"
                  name="satuan"
                  value={this.state.satuan}
                  onChange={this.handleChange}
                  placeholder="Satuan"
                  required
                />

                <Button className="mt-4" onClick={() => this.handleSubmit()}>
                  Simpan
                </Button>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
