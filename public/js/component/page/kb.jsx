import React from "react";
import { Row, Col } from 'react-bootstrap';

class KB extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    render() {
        return (
            <Row>
                <Col sm={6}>
                    <b>Kampung Bali</b>
                    <a href="http://cctv.balitower.co.id:80/Kampung-Bali-001-700078_1/embed.html?proto=hls"
                        target="_blank"><i class="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id:80/Kampung-Bali-001-700078_1/embed.html?proto=hls"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col>
                <Col sm={6}>
                    <b>Kampung Bali</b>
                    <a href="http://cctv.balitower.co.id:80/Kampung-Bali-001-700078_2/embed.html?proto=hls"
                        target="_blank"><i class="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id:80/Kampung-Bali-001-700078_2/embed.html?proto=hls"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col >
                <Col sm={6}>
                    <b>Kampung Bali</b>
                    <a href="http://cctv.balitower.co.id:80/Kampung-Bali-001-700078_3/embed.html?proto=hls"
                        target="_blank"><i class="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id:80/Kampung-Bali-001-700078_3/embed.html?proto=hls"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col >
                <Col sm={6}>
                    <b>Kampung Bali</b>
                    <a href="http://cctv.balitower.co.id:80/Kampung-Bali-001-700078_4/embed.html?proto=hls"
                        target="_blank"><i class="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id:80/Kampung-Bali-001-700078_4/embed.html?proto=hls"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col >
                <Col sm={6}>
                    <b>Kampung Bali</b>
                    <a href="http://cctv.balitower.co.id:80/Kampung-Bali-001-700078_4/embed.html?proto=hls"
                        target="_blank"><i class="glyphicon glyphicon-share"></i></a>
                    <iframe src="http://cctv.balitower.co.id:80/Kampung-Bali-001-700078_4/embed.html?proto=hls"
                        frameBorder={0} width="100%" style={{ height: "400px" }}></iframe>
                </Col >
            </Row >
        );
    }
}

export default KB;
