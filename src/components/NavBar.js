import { Navbar, Dropdown, Image } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
const style = {
  color: "#CEF0D4",
  fontFamily: "Century Gothic,Lucida Sans",
};
class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="tabs">
          <Navbar.Brand href="/Home" style={style}>
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Would you rather
          </Navbar.Brand>
          <Link to="" style={style} className="nav-link">
            Home
          </Link>{" "}
          <Link to="" style={style} className="nav-link">
            New Question
          </Link>
          <Link to="" style={style} className="nav-link">
            Leader Board
          </Link>{" "}
          <div className="ml-auto">
            <Dropdown>
              <Dropdown.Toggle style={style} variant="dark" id="dropdown-basic">
                <Image
                  style={{
                    width: "2rem",
                    pointerEvents: "none",
                  }}
                  size="xs"
                  src={this.props.users[this.props.authedUser].avatarURL}
                  roundedCircle
                />{" "}
                {this.props.users[this.props.authedUser].name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">
                  <HiOutlineLogout />
                  {""} Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar>{" "}
      </div>
    );
  }
}
function mapStateToProps({ users, authedUser }) {
  return { users, authedUser };
}
export default connect(mapStateToProps)(NavBar);