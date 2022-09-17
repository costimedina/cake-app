import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand><span>🧁</span> Crazy Muffins</Navbar.Brand>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            <span>🏠</span> Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            <span>📒</span> Contacto
          </Link>
          <Link to="/productos" className="text-white ms-3 text-decoration-none">
            Productos
          </Link>
          <Link to="/compra" className="text-white ms-3 text-decoration-none">
            Compra aquí
          </Link>
          <Link to="/delivery" className="text-white ms-3 text-decoration-none">
            Delivery
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;