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
    transaction: []
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

    data[key].satuan = satuan;

    data[key].jumlah = satuan * harga;
    this.setState({
      transaction: data
    });
    console.log(data);
  };

  render() {
    console.log(this.state.transaction);
    return (
      <Container>
        <Row>
          <Col md={4}>
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
