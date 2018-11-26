import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
export default class DetailBarang extends Component {
  state = {
    detailItem: {}
  };
  componentDidMount() {
    let barang = JSON.parse(localStorage.getItem('barang'));
    let getDetailItem = barang[this.props.match.params.id];
    this.setState({
      detailItem: getDetailItem
    });
  }
  render() {
    const { nama, harga, url } = this.state.detailItem;
    return (
      <div>
        <Card style={{ height: 400 }}>
          <CardImg top width="100%" src={url} alt="Card image cap" />
          <CardBody>
            <CardTitle>{nama}</CardTitle>
            <CardSubtitle>Harga Rp {harga}</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Beli</Button>
            <Button>Batal</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
