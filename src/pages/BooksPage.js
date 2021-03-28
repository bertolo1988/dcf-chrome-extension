import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function BooksPage() {
  return (
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <a
            target="_blank"
            href="https://www.amazon.com/gp/product/0060555661/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0060555661&linkCode=as2&tag=dcfchromeexte-20&linkId=bb10dae8fa8b43cc70f80e4bbde0c1e5"
          >
            <img
              className="bookImage"
              src="https://images-na.ssl-images-amazon.com/images/I/51fESaIGgVL._SX323_BO1,204,203,200_.jpg"
            />
            The Intelligent Investor
          </a>
        </Col>
        <Col>
          <a
            target="_blank"
            href="https://www.amazon.com/gp/product/0471786314/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0471786314&linkCode=as2&tag=dcfchromeexte-20&linkId=3494e972121438f353c5eaa55411c0da"
          >
            <img
              className="bookImage"
              src="https://images-na.ssl-images-amazon.com/images/I/51h7nhR5U+L._SX322_BO1,204,203,200_.jpg"
            />
            Supermoney
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            target="_blank"
            href="https://www.amazon.com/gp/product/0743200403/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0743200403&linkCode=as2&tag=dcfchromeexte-20&linkId=3c0d012ff71d4a8394397655a3797bf8"
          >
            <img
              className="bookImage"
              src="https://images-na.ssl-images-amazon.com/images/I/51RWLY76LAL._SX324_BO1,204,203,200_.jpg"
            />
            One Up On Wall Street
          </a>
        </Col>
        <Col>
          <a
            target="_blank"
            href="https://www.amazon.com/gp/product/0071592539/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0071592539&linkCode=as2&tag=dcfchromeexte-20&linkId=47e9b022ec4548b7542837a7bb248386"
          >
            <img
              className="bookImage"
              src="https://images-na.ssl-images-amazon.com/images/I/51hwLfcPJPL._SX324_BO1,204,203,200_.jpg"
            />
            Security Analysis: Sixth Edition
          </a>
        </Col>
      </Row>
    </Container>
  );
}
