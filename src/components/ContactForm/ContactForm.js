// ContactForm.js
import React, { useState } from 'react';
import { Form, Button,Card } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    reply_to: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_7fx2s0z', 'template_2zgaics', formData, 'faiPNGY7wJM5951YP')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', reply_to: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="contact-form-container">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Contact Me</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName"className="text-left">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail"className="text-left">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage"className="text-left">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
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