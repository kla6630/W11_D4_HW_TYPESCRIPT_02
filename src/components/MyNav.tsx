import { Navbar, Container, Nav } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Space News</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#news">News</Nav.Link>
          <Nav.Link href="#opinion">Opinion</Nav.Link>
          <Nav.Link href="#civil">Civil</Nav.Link>
          <Nav.Link href="#commercial">Commercial</Nav.Link>
          <Nav.Link href="#military">Military</Nav.Link>
          <Nav.Link href="#sponsored">Sponsored</Nav.Link>
          <Nav.Link href="#morecategories">More Categories</Nav.Link>
          <Nav.Link href="#advertise">Advertise</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
