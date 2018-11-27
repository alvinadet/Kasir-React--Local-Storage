import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Table
} from 'reactstrap';

export default class Kasir extends Component {
  state = {
    barang: [],
    transaction: [],
    jumlah: 0,
    pemasukan: 0,
    kembalian: 0
  };
  tambah = key => {
    const { barang, transaction } = this.state;
    let nemu = false;
    barang[key]['jumlah'] = 0;
    barang[key]['satuan'] = 0;
    transaction.map((datum, id) => {
      //   console.log(barang[key].nama);
      if (datum.nama == barang[key].nama) {
        nemu = true;
      }
    });

    if (!nemu) {
      this.setState({
        transaction: transaction.concat(barang[key])
      });
    }

    if (transaction.length == 0) {
      this.setState({
        transaction: transaction.concat(barang[key])
      });
    }
  };
  componentDidMount() {
    console.log(this.props.barang);
    this.setState({
      barang: this.props.barang
    });

    console.log(this.state.transaction, '>>>>>>>');
  }

  SumHarga = (key, e) => {
    let satuan = e.target.value;
    let data = this.state.transaction;
    let harga = data[key].harga;
    let jumlahTotal = 0;

    data[key].satuan = satuan;

    data[key].jumlah = satuan * harga;
    data.map((datum, key) => {
      jumlahTotal += datum.jumlah;
    });
    this.setState({
      transaction: data,
      jumlah: jumlahTotal
    });

    console.log(data);
  };

  kembalian = e => {
    let uang = e.target.value;
    this.setState({
      pemasukan: uang,
      kembalian: uang - this.state.jumlah
    });
  };

  render() {
    console.log(this.state.transaction);
    return (
      <Container>
        <Row>
          <Col md={4}>
            <Row style={{ height: 400 }}>
              <Col>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nama</th>
                      <th>Harga</th>
                      <th>Satuan</th>
                      <th>Jumah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.transaction.map((datum, key) => {
                      return (
                        <tr>
                          <th scope="row">{key + 1}</th>
                          <td>{datum.nama}</td>
                          <td>{datum.harga}</td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50, height: 20 }}
                              onChange={e => this.SumHarga(key, e)}
                            />
                          </td>
                          <td>{datum.jumlah}</td>
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
                      <td>{this.state.jumlah}</td>
                    </tr>
                    <tr>
                      <th>Masukan Uang</th>
                      <input
                        type="number"
                        style={{ width: 150 }}
                        onChange={this.kembalian}
                      />
                    </tr>
                    <tr>
                      <th>Kembalian</th>
                      <td>{this.state.kembalian}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Col>
          <Col md={8}>
            <Row>
              {this.state.barang.map((datum, key) => {
                return (
                  <Col md={4} className="my-4">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src={datum.url}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle>{datum.nama}</CardTitle>
                        <CardSubtitle>{datum.harga}</CardSubtitle>
                        <CardText />
                        <Button
                          onClick={() => {
                            this.tambah(key);
                          }}>
                          Pilih
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
