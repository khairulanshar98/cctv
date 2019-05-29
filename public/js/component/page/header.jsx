import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap/lib';

class Header extends React.Component {
    constructor(props) {
        super(props);
    };
    async componentDidMount() {

    }
    render() {
        return (
            <Navbar style={{ marginBottom: "0px", borderRadius: "0px" }}>
                <Navbar.Header className="hidden-xs hidden-sm">
                    <Navbar.Brand >
                        <a href="#/">CCTV</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav className="pull-right">
                    <NavItem onClick={() => {
                        location.href = "#/";
                    }}>Home</NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;
