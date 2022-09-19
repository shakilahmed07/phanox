import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form d-flex mt-5">
    <Form.Control 
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <Button className="sendButton" onClick={e => sendMessage(e)}>Send</Button>
  </form>
)

export default Input;