import { bind, element } from "utils/dom";
import { Observable } from "utils/observable";
import './style.css';

function Form() {

  const formState = new Observable({

  });
  
  const oninput = (e) => {
    // clear class 
  }

  const onblur = (e) => {
    const name = e.target.name; 
    // validate and set valid/invalid class
    // set submit button to able/disabled
  }

  const onsubmit = (e) => {

  }

  return (
    element('form', {onsubmit},
      element('div', {},
        element('label', {for: 'username', textContent: 'Username'}),
        element('input', {name: 'username', type: 'text', onblur, oninput}),
      ),
      element('div', {},
        element('label', {for: 'email', textContent: 'Email'}),
        element('input', {name: 'email', type: 'email', onblur, oninput}),
      ),
      element('div', {},
        element('input', {
          type: 'submit', 
          value: 'Create Account',
          disabled: false
        })
      )
    )
  )
}

export default function FormWithValidation() {
  return (
    element('div', {},
      element('h1', {textContent: 'Sign Up'}),
      Form()
    )
  )
}




/* 
Features
- local storage
- reset button
- validation
- loading overlay
*/

/* 
  BackEnd Requirements
  -------------------
  username
  - unique
  email
  - unique
  password


  FrontEnd Requirements 
  ---------------------
  username
  - non-empty
  - longer than 8 letters
  email
  - non-empty
  - has correct form
  password
  - non-empty
  - includes special character
  - includes number
*/