import React from "react";
import { Row, Col } from 'react-bootstrap';
import "./Footer.css";
import github from "../../images/GitHub-Mark-Light-32px.png"

const Footer = props => (
    <Row className="footer">
        <Col xs={10}>
            <a href="https://github.com/mcginnis92/GiftCardPal" target="_blank">
                <img src={github} alt="github" />
            </a>
        </Col>
       
        <Col xs={2}><p>Copyright &copy; 2018  |  Molly Moran</p></Col>
    </Row>
);

export default Footer;