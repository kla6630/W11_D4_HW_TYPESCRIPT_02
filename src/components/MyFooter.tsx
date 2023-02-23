import { Navbar, Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Navbar fixed="bottom" bg="light" variant="light">
      <Container className="justify-content-center">
        <Navbar.Text>
          Tentativi spericolati di sperimentare con React , React-Boostrap e TypeScript nello spazio © Claudio Pinna{" "}
          {new Date().getFullYear()}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default MyFooter;
