import React from "react";
import { Row, Col } from 'react-bootstrap';

class IQ extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    render() {
        return (
            <Row>
                <Col sm={6}>
                    <b>Masjid Istiqlal</b>
                    <a href="http://cctv.balitower.co.id:80/Istiqlal-506819_1/embed.html?proto=hls"
                        target="_blank"><i class="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id:80/Istiqlal-506819_1/embed.html?proto=hls"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col>
                <Col sm={6}>
                    <b>Gereja Kathedral</b>
                    <a href="http://cctv.balitower.co.id:80/Gereja-Kathedral-507227_1/embed.html?proto=hls"
                        target="_blank"><i class="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id:80/Gereja-Kathedral-507227_1/embed.html?proto=hls"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col >
            </Row >
        );
    }
}

export default IQ;
