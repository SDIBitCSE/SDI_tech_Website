import React,{useState} from 'react';
import FormHeading from '../../Forms/FormHeading';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register(){
const[content,setContent]  = useState(<Container><Container style={{width:"50%",position:"absolute",right:"1rem",paddingTop:"1rem"}}><div><FormHeading content="Registration Form" styling={{color:"#858482",textAlign:"center",fontFamily:"Montserrat"}}/>
<Form>
  <Row className="mb-3" style={{width:"80%"}}>
    <Form.Group as={Col} controlId="formGridFName">
      <Form.Control  size="sm" type="text" placeholder="First Name" style={{margin : "2rem auto 0 auto",width:"140%"}}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLName">
      <Form.Control  size="sm" type="password" placeholder="Last Name" style={{margin : "2rem auto 0 7rem",width:"140%"}}/>
    </Form.Group>
    <Form.Group as={Col} controlId="empty"></Form.Group>
  </Row>

<Row className="mb-3" style={{width:"60%"}}>
    <Form.Group as={Col} controlId="formGridUSN">
  <Form.Control  size="sm" placeholder="USN" style={{margin : "1rem auto 1rem auto"}}/>
    </Form.Group>
</Row>
<Row className="mb-3" style={{width:"60%"}}>
    <Form.Group as={Col} controlId="formGridSemester">
    <Form.Select size="sm" aria-label="Semester">
  <option>Semester</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
</Form.Select>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridSection">
    <Form.Select size="sm" aria-label="Semester">
  <option>Section</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="D">D</option>
  <option value="E">E</option>
  <option value="F">F</option>
</Form.Select>
    </Form.Group>
</Row>
 
 <Row className="mb-3" style={{width:"60%"}}><Form.Group className="mb-3" controlId="formGridMobile">
  <Form.Control  size="sm" placeholder="Mobile Number" style={{margin : "1rem auto 0 auto"}}/>
  </Form.Group></Row>
  
  <Row className="mb-3" style={{width:"68%"}}>
    <Form.Group as={Col} controlId="formGridDomain">
    <Form.Select size="sm" aria-label="Domain">
  <option>Domain of interest</option>
  <option value="A">App development</option>
  <option value="B">Web development</option>
  <option value="C">Competetive programming</option>
  <option value="D">Data Science and Machine Learning</option>
</Form.Select>
    </Form.Group>
    </Row>
  
    <Row className="mb-3" style={{width:"88%"}}>
    <Form.Group as={Col} controlId="formGridEmail">
     <Form.Control  size="sm" type="email" placeholder="Email ID" style={{margin : "1rem auto 1rem 0"}}/>
    </Form.Group>
    </Row>
   
    <Row className="mb-3" style={{width:"88%"}}>
    <Button 
    variant="outline-light" 
    className="registerformbutton" 
    size="lg"
    style={{fontFamily:"Montserrat",fontSize:"2rem", margin : "0rem auto 1rem 0.7rem"}}
    >REGISTER</Button>
    </Row>

</Form>
</div></Container></Container>);
return(content);
}
export default Register;