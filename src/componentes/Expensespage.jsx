import React from "react";
import { Col, Container, Row, Button, ButtonGroup } from "react-bootstrap";

function Expensespage() {
    return (
    <div className="Expensespage">
        <Container style={{ height: "100vh" }}>
        <Row>
          
              <ButtonGroup className="doubleButton">
                <Button >EXPENSES</Button>
              </ButtonGroup>
          
        </Row>
        </Container>
    </div>
    );
}

export default Expensespage;
