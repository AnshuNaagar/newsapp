import React from "react";
import { Link } from "react-router-dom";
import "./style/All.css";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "./svgs/Mail";
import { Password } from "./svgs/Password";
import { User } from "@nextui-org/react";
import './style/All.css'
const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Newsapp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">
                  Business News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/wallstreet">
                  Wall street journal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/tech-crunch">
                  Tech crunch
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/business-headlines-from-us"
                >
                  US business headlines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/apple-headlines">
                  Apple headlines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/forum">
                  Forum
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <User
                src="https://www.looper.com/img/gallery/the-untold-truth-of-alita-battle-angel/l-intro-1617740606.jpg"
                name="Alita yoko"
              />
              <div>
                <Button auto color="primary" shadow onClick={handler}>
                  Login now
                </Button>
                <Modal
                  closeButton
                  blur
                  aria-labelledby="modal-title"
                  open={visible}
                  onClose={closeHandler}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Welcome to
                      <Text b size={18}>
                        Newsapp
                      </Text>
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Input
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Email"
                      contentLeft={<Mail fill="currentColor" />}
                    />
                    <Input
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Password"
                      contentLeft={<Password fill="currentColor" />}
                    />
                    <Row justify="space-between">
                      <Checkbox>
                        <Text size={14}>Remember me</Text>
                      </Checkbox>
                      <Text size={14}>Forgot password?</Text>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                      Close
                    </Button>
                    <Button auto onClick={closeHandler}>
                      Sign in
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
