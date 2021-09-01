import React,{useState} from 'react';
import FormHeading from '../../Forms/FormHeading';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact(){
const[content,setContent]  = useState(<Container><Container style={{width:"50%",position:"absolute",left:"1rem",paddingTop:"1rem"}}><div><FormHeading content="Contact Us" styling={{color:"#858482",textAlign:"center",fontFamily:"Montserrat"}}/>
<Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFName">
     
      <Form.Control  size="sm" type="email" placeholder="First Name" style={{margin : "2rem auto 0 auto",width:"140%"}}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLName">
     
      <Form.Control  size="sm" type="password" placeholder="Last Name" style={{margin : "2rem auto 0 7rem",width:"140%"}}/>
    </Form.Group>
    <Form.Group as={Col} controlId="empty"></Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridEmail">
  <Form.Control  size="sm" placeholder="Email ID" style={{margin : "2rem auto 0 auto"}}/>
  <Form.Label style={{color:"#858482",fontSize:"1rem",fontFamily:"Aileron",opacity:"50%"}}>Please use a real email address</Form.Label>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formGridSubject">
  <Form.Control  size="sm" placeholder="Subject" style={{margin : "1rem auto"}}/>
  </Form.Group>

  <Form.Control  size="sm"
      as="textarea"
      placeholder="Message"
      style={{ height: '10rem',margin : "2rem auto", width:"105%"}}
    />

<Button 
    variant="outline-light" 
    className="sendMessage" 
    size="lg"
    style={{fontFamily:"Montserrat",fontSize:"2rem"}}
    >Send Message</Button>
</Form>
</div></Container></Container>);
return(content);
}
export default Contact;