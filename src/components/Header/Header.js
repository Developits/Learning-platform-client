import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3029920.png"
              width="30"
              height="40"
              className="d-inline-block align-top"
            />
            <Link className="btn fs-5 fw-bold btn-dark" to="/">
              Code Force
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav>
              <Link className="btn btn-dark" to="/courses">
                Courses
              </Link>
            </Nav>
            <Nav>
              <Link to="/blogs" className="btn btn-dark">
                Blogs
              </Link>
            </Nav>
            <Nav>
              <Link to="/faq" className="btn btn-dark">
                FAQ
              </Link>
            </Nav>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <Button
                    className="me-4"
                    variant="light"
                    onClick={handleLogOut}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link className="btn btn-dark" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-dark" to="/register">
                    Register
                  </Link>
                </>
              )}
            </>
            <>
              {user?.photoURL ? (
                <>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <strong>{user?.displayName}</strong>.
                      </Tooltip>
                    }
                  >
                    <Image
                      style={{ height: "40px" }}
                      roundedCircle
                      src={user?.photoURL}
                    ></Image>
                  </OverlayTrigger>
                </>
              ) : (
                <FaUser className="mt-2 text-white"></FaUser>
              )}
            </>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
