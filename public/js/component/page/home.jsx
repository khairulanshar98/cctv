import React from "react";
import { Row, Col } from 'react-bootstrap';
import Switch from "react-switch";
import Bawaslu from "./bawaslu.jsx";
import MK from "./mk.jsx";
import Gambir from "./gambir.jsx";
import KB from "./kb.jsx";
import IQ from "./istiqlal.jsx";
import KBU from "./kbu.jsx";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bawaslu: false,
      mk: false,
      gambir: false,
      kb: false,
      istiqlal: false,
      kbu: false
    }
  }
  handleChangeSwitch(attr, value) {
    var tmp = {}
    tmp[attr] = value;
    this.setState(tmp)
  }
  componentDidMount() {
  }
  render() {
    return (
      <div style={{ color: "#4b4f56" }}>
        <div className="container" >
          <div className="jumbotron" style={{ marginTop: "20px" }}>
            <Row>
              <Col sm={4}>
                <h1 style={{ marginBottom: "35px" }}>CCTV</h1>
                <p>
                  Source code: <a href="https://github.com/khairulanshar98/cctv" target="_blank">CCTV</a>.
                </p>
              </Col>
              <Col sm={8}>
                <Row>
                  <Col sm={6}>
                    <div>
                      <label>
                        <span style={{ marginLeft: "15px", marginRight: "10px", position: "relative", bottom: "8px" }}>Sekitar Bawaslu</span>
                        <Switch className="react-switch" onChange={(checked) => this.handleChangeSwitch("bawaslu", checked)} checked={this.state.bawaslu} />
                      </label>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div>
                      <label>
                        <span style={{ marginLeft: "15px", marginRight: "10px", position: "relative", bottom: "8px" }}>Sekitar MK</span>
                        <Switch className="react-switch" onChange={(checked) => this.handleChangeSwitch("mk", checked)} checked={this.state.mk} />
                      </label>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div>
                      <label>
                        <span style={{ marginLeft: "15px", marginRight: "10px", position: "relative", bottom: "8px" }}>Sekitar Gambir</span>
                        <Switch className="react-switch" onChange={(checked) => this.handleChangeSwitch("gambir", checked)} checked={this.state.gambir} />
                      </label>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div>
                      <label>
                        <span style={{ marginLeft: "15px", marginRight: "10px", position: "relative", bottom: "8px" }}>Sekitar Kampung Bali</span>
                        <Switch className="react-switch" onChange={(checked) => this.handleChangeSwitch("kb", checked)} checked={this.state.kb} />
                      </label>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div>
                      <label>
                        <span style={{ marginLeft: "15px", marginRight: "10px", position: "relative", bottom: "8px" }}>Sekitar Istiqlal</span>
                        <Switch className="react-switch" onChange={(checked) => this.handleChangeSwitch("istiqlal", checked)} checked={this.state.istiqlal} />
                      </label>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div>
                      <label>
                        <span style={{ marginLeft: "15px", marginRight: "10px", position: "relative", bottom: "8px" }}>Sekitar K. Bambu Utara</span>
                        <Switch className="react-switch" onChange={(checked) => this.handleChangeSwitch("kbu", checked)} checked={this.state.kbu} />
                      </label>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          {this.state.bawaslu ?
            <Bawaslu /> : null
          }
          {this.state.mk ?
            <MK /> : null
          }
          {this.state.gambir ?
            <Gambir /> : null
          }
          {this.state.kb ?
            <KB /> : null
          }
          {this.state.istiqlal ?
            <IQ /> : null
          }
          {this.state.kbu ?
            <KBU /> : null
          }
        </div>
      </div>
    );
  }
}

export default Home;
