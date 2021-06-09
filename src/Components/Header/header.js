import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './header.css';
class Header extends Component {
	state = {}
	render() {
		return (
			<Navbar collapseOnSelect expand="sm" bg="light" variant="light">
				<Navbar.Brand href="#home" style={{fontFamily: "Roboto",fontSize: "large"}}>Land<b style={{ fontWeight: "600" }}>Cover</b></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "flex-end" }}>

					<Nav>
						<Nav.Link href="/" style={{fontFamily: "Roboto",fontSize: "initial"}}>Home</Nav.Link>
						<Nav.Link href="https://github.com/abhisht27/Land-Cover-ML" style={{fontFamily: "Roboto",fontSize: "initial"}}>Code</Nav.Link>
                        <Nav.Link href="/results" style={{fontFamily: "Roboto",fontSize: "initial"}}>Results</Nav.Link>
						<Nav.Link href="https://drive.google.com/file/d/1Gjlucy9LOKFGXd4ihmpDLb81LJP2ASCc/view?usp=sharing" rel="noopener noreferrer" target="_blank" style={{fontFamily: "Roboto",fontSize: "initial"}}>Report</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;