import React, { useState, useReducer } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import eventsService from "../Services/events";
import useForm from "../Hooks/useForm";
import { useToasts } from 'react-toast-notifications';

const Example = ({ dispatch }) => {
  const [values, handleChange] = useForm({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addToast } = useToasts();

  const handleSubmit = async () => {
    
    try {
      const { event } = await eventsService.createEvent(values);
      if (event) {
        dispatch({ type: "UPDATE_EVENTS", event });
        addToast('Event created successfully', { appearance: 'success' });
      }
      addToast('Something went wrong', { appearance: 'error' });
    } catch (error) {
      addToast('Something went wrong', { appearance: 'error' });
    }
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click to create a new Event
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title"
                  required
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  name="category"
                  placeholder="Category"
                  required
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="start"
                  placeholder="Start"
                  required
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  name="end"
                  placeholder="End"
                  required
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="description"
                  required
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    name="isVirtual"
                    onChange={handleChange}
                    label="Is this a Virtual Event?"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Example;
