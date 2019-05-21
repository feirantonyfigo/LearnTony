import React from 'react';
import './ContactPage.css'
import {Container, Row, Col,Form,
  FormGroup, Label,Input,Button} from 'reactstrap';
import contactPageParticleConfig from '../../assets/json/contact-particlesjs-config.json';
import Particle from '../../components/Particle/Particle'
import * as emailjs from 'emailjs-com'


class ContactPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      errorHints:{
        errorHint1:"",
        errorHint2:"",
        errorHint3:""
      },
      formControls: {
          email: {
            value: ''
          },
          name: {
            value: ''
          },
          message: {
            value: ''
          }
      },
      submitSuccess:false
    };
    //console.log(this.state.submitSuccess)
    this.createContactText  = this.createContactText.bind(this);
  }

  changeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
        formControls: {
            ...this.state.formControls,
            [name]: {
            ...this.state.formControls[name],
            value
          }
        }
      });
      //console.log(this.state);
  }
validateEmail(email){
  var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

validateInputs(){
  const errorTemplate = [
    "* This field cannot be empty",
    "* Invalid Email"
  ]
  var valid = true;
var errorHint1="",errorHint2="",errorHint3 = "";
  //console.log(this.state.formControls.email.value);
  if(!Boolean(this.state.formControls.name.value)){
      errorHint1 = errorTemplate[0];
      valid = false;
  }
  if(!Boolean(this.state.formControls.email.value)){
      errorHint2 = errorTemplate[0];
      valid = false;
  }else{
    if(!this.validateEmail(this.state.formControls.email.value)){
      errorHint2 = errorTemplate[1]
      valid = false;
    }
  }
  if(!Boolean(this.state.formControls.message.value)){
      errorHint3 = errorTemplate[0];
      valid = false;
  }
  //console.log(errorHint1);
  //set state
  this.setState({
    errorHints: {
        ...this.state.errorHints,
      ["errorHint1"]:errorHint1,
      ["errorHint2"]:errorHint2,
      ["errorHint3"]:errorHint3
    }  });
    return valid;
}

sendEmail(){
  var template_params = {
   "from_name": this.state.formControls.name.value,
   "to_name": "Tony Hu",
   "from_email": this.state.formControls.email.value,
   "message_html": this.state.formControls.message.value
}
emailjs.send('tonyhu-gmail', 'LearnTony-Email', template_params,'user_ETC2Q0Eo7Qb3RzO6ew7My')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
//submited
this.setState({
  submitSuccess:true
});
this.restoreForm();
}

createContactText(){
  //console.log(this.state.submitSuccess);
  if (this.state.submitSuccess){
    return (
      <div><h5 id="emailDelivered">I have recieved your email, cheers!</h5></div>
    );
  }else{
      return (
    <div><h5 id="writeMeLetter">Please Write Me a Letter</h5></div>
    );
    }
  }


restoreForm(){
this.setState( {
      formControls: {
          email: {
            value: ''
          },
          name: {
            value: ''
          },
          message: {
            value: ''
          }
      }
    });
}

submitHandler = event =>{
  event.preventDefault();
  if(this.validateInputs()){
  this.sendEmail();
  this.restoreForm();
}
}






  render() {
    return (
      <div className="ContactPage">
      <div id="Surface">
      <div id="triangleParent"><div id="triangle"></div></div>
      <Container>
      <Row id="ContactTitle">
      <Col><h1 id="contactText" className="floating textRotate"><span>C</span><span>O</span><span>N</span><span>T</span><span>A</span>
      <span>C</span><span>T</span></h1></Col>
      </Row>
      <Row>
      <Col>{this.createContactText()}</Col>
      </Row>
      <Row>
      <Col>
      <div id="ContactForm" style={{paddingLeft:(window.innerWidth<767?'5%':'25%'),paddingRight:(window.innerWidth<767?'5%':'25%')}}>
      <Form className="form">
  <Col>
  <div className="errorMsg">{this.state.errorHints.errorHint1}</div>
    <FormGroup>
      <Input
        type="name"
        name="name"
        id="name"
        value={this.state.formControls.name.value}
        className="ContactFormInput"
        placeholder="Name"
        style={{"backgroundColor":"rgb(29,35,43)",color:"white"}} onChange={this.changeHandler}
      />
    </FormGroup>
  </Col>
  <Col>
    <div className="errorMsg">{this.state.errorHints.errorHint2}</div>
    <FormGroup>
      <Input
        type="email"
        name="email"
        id="email"
        value={this.state.formControls.email.value}
        className="ContactFormInput"
        style={{"backgroundColor":"rgb(29,35,43)",color:"white"}}
        placeholder="Enter Email" onChange={this.changeHandler}
      />
    </FormGroup>
  </Col>
  <Col>
    <div className="errorMsg">{this.state.errorHints.errorHint3}</div>
    <FormGroup>
      <Input
      type="textarea" name="message"  className="ContactFormInput" placeholder="Your Message" style={{"backgroundColor":"rgb(29,35,43)",height:180,color:"white"}}
      onChange={this.changeHandler}
      value={this.state.formControls.message.value}
      />
    </FormGroup>
  </Col>
  <Col style={{textAlign:"right"}}>
  <Button id="submitButton" onClick={this.submitHandler}>SUBMIT</Button>
  </Col>
</Form>
</div>
</Col>
      </Row>
      </Container>
      </div>
      <div id="ContactParticles">
      <Particle particleConfig={contactPageParticleConfig}  />
      </div>
      </div>
  );
  }
}

export default ContactPage;
