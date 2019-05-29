import React from "react";
import { Row, Col } from 'react-bootstrap';

class KBU extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    render() {
        return (
            <Row>
                <Col sm={6}>
                    <b>Kota Bambu Utara</b>
                    <a href="http://cctv.balitower.co.id:80/Kota-Bambu-Utara-001-MP-601186_1/embed.html"
                        target="_blank"><i class="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id:80/Kota-Bambu-Utara-001-MP-601186_1/embed.html"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col>
                <Col sm={6}>
                    <b>Kota Bambu Utara</b>
                    <a href="http://cctv.balitower.co.id:80/Kota-Bambu-Utara-001-MP-601186_2/embed.html"
                        target="_blank"><i class="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id:80/Kota-Bambu-Utara-001-MP-601186_2/embed.html"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col>
                <Col sm={6}>
                    <b>Kota Bambu Utara</b>
                    <a href="http://cctv.balitower.co.id:80/Kota-Bambu-Utara-001-MP-601186_3/embed.html"
                        target="_blank"><i class="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id:80/Kota-Bambu-Utara-001-MP-601186_3/embed.html"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col>
                <Col sm={6}>
                    <b>Kota Bambu Utara</b>
                    <a href="http://cctv.balitower.co.id:80/Kota-Bambu-Utara-001-MP-601186_4/embed.html"
                        target="_blank"><i class="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id:80/Kota-Bambu-Utara-001-MP-601186_4/embed.html"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col>
            </Row>
        );
    }
}

export default KBU;
