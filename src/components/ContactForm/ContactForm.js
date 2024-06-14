import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i6c2vdo', 'template_2zgaics', form.current, 'yl9w5JPUdhDRgZ-7d')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          form.current.reset(); // Reset form fields
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-form-container">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Contact Me</Card.Title>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="formName" className="text-left">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="user_name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="text-left">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="user_email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="text-left">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactForm;
