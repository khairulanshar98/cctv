import React from "react";
import { Row, Col } from 'react-bootstrap';

class Bawaslu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    render() {
        return (
            <Row>
                <Col sm={6}>
                    <b>CCTV JL.Tamrin depan BAWASLU</b>
                    <a href="http://cctv.balitower.co.id/Gondangdia-001-700051_4/embed.html"
                        target="_blank"><i className="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id/Gondangdia-001-700051_4/embed.html"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col>
                <Col sm={6}>
                    <b>CCTV JL.Tamrin depan BAWASLU</b>
                    <a href="http://cctv.balitower.co.id/Gondangdia-001-700051_3/embed.html"
                        target="_blank"><i className="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id/Gondangdia-001-700051_3/embed.html"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col>
                <Col sm={6}>
                    <b>CCTV JL.Tamrin depan BAWASLU</b>
                    <a href="http://cctv.balitower.co.id/Gondangdia-001-700051_1/embed.html"
                        target="_blank"><i className="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id/Gondangdia-001-700051_1/embed.html"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col>
                <Col sm={6}>
                    <b>CCTV JL.Tamrin depan BAWASLU</b>
                    <a href="http://cctv.balitower.co.id/Gondangdia-001-700051_2/embed.html"
                        target="_blank"><i className="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id/Gondangdia-001-700051_2/embed.html"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col>
                <Col sm={6}>
                    <b>CCTV JL.Tamrin depan BAWASLU</b>
                    <a href="http://cctv.balitower.co.id/Gondangdia-001-700051_5/embed.html"
                        target="_blank"><i className="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id/Gondangdia-001-700051_5/embed.html"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col>
            </Row>
        );
    }
}

export default Bawaslu;
