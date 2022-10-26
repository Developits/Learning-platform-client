import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
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
              height="30"
              className="d-inline-block align-top"
            />
            Code Force
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
                  <span className="mt-2 fw-bold fs-5">{user?.displayName}</span>
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
                  <Link to="/profile">
                    <Image
                      style={{ height: "30px" }}
                      roundedCircle
                      src={user?.photoURL}
                    ></Image>
                  </Link>
                  <Button
                    className="ms-1"
                    variant="light"
                    onClick={handleLogOut}
                  >
                    Log out
                  </Button>
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
