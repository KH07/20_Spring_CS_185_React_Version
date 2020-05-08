import React, { Component } from "react"
import config from "../config"
import "./Guestbook.css"

const firebase = require('firebase')

export class Guestbook extends Component {
  constructor(props) {
      super();
      this.state = {
        description: '',
        display: 'N',
        email: '',
        message: '',
        name: '',
        info: [],
    }
  }

  componentDidMount() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }
    let newMessage = [];
    let ref = firebase.database().ref('users');
    ref.on('value', snapshot => {
      let info = snapshot.val();
      for (let entry in info) {
        newMessage.push({
          name: info[entry].name,
          description: info[entry].description,
          display: info[entry].display,
          message: info[entry].message,
          email: info[entry].email
        });
      }
      this.setState({info: newMessage});
    })
  }

  valid() {
    if (this.state.name === '') {
      alert("Missing required field: Name");
      return false;
    }

    if (this.state.name.length < 6 || this.state.name.length > 19) {
      alert("Name needs to be longer than 5 characters and less than 20");
      return false;
    }

    if (this.description.name.length > 100) {
      alert("Description needs to be less than 100 characters");
      return false;
    }

    if (this.state.message === '') {
      alert("Missing required field: Message");
      return false;
    }

    if (this.state.message.length < 15 || this.state.message.length > 400) {
      alert("Message needs to be longer than 15 characters and less than 400");
      return false;
    }
    
    if (this.state.display === '') {
      alert("Missing required field: Display your information");
      return false;
    }
  }

  sent = (event) => {
    event.preventDefault()
    if (this.valid) {
      const userRef = firebase.database().ref('users');
      const newMessage = {
        name : this.state.name,
        description: this.state.description,
        message: this.state.message,
        display: this.state.display,
        email: this.state.email,
      }
      userRef.push(newMessage);
      this.setState({
        name: '',
        description: '',
        message: '',
        display: 'N',
        email: ''
      });
      alert("Message sent")
    }
  }

  change = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div>        
        <div className="message-box">

          <div className="form">
            <h3>Leave a message</h3>
            <form onSubmit={this.sent}>

              <p>Name:</p>
              <input name='name' type='text' minLength='6' maxLength='19' change = {this.change}/>

              <p>A short description of yourself(Optional):</p>
              <input name='description' type='text' maxLength='99' rows="4" change={this.change}/>

              <p>Message:</p>
              <input name='message' type='text' minLength='16' maxLength='499' rows="4" change={this.change}/>

              <p>Broadcast your info:</p>
              <select id='display' name='display' change={this.change}>
                <option value='N'>N</option>
                <option value='Y'>Y</option>
              </select>

              <p>Email(Optional):</p>
              <input name='email' type='text' change={this.change}/>

              <input type='submit' id='submit' name='submit' value='Submit'></input>
            </form>
          </div>

          <div className="guestbook">
            <h3>Formal Visitors</h3>
            {this.state.info.map((entry) => {
              if (this.state.display !== 'Y') {
                return (
                  <div>
                    <span className='name'>{entry.name}</span>
                    <span className='message'>{entry.message}</span>
                  </div>
                )
              }
            })}
          </div>

        </div>
      </div>
    )
  }

}

export default Guestbook;