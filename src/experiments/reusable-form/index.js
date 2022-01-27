import { element } from 'utils/dom';

function input(type, ) {

}

function form() {

}

export default function ReusableForm() {
  return (
    element('div', {},
      element('h2', {textContent: 'Reusable Form'}),
      form([
        {
          type: 'text', 
          name: 'username', 
          rules: [
            required
            longerThan(10)
          ]
        },
        {
          type: 'password', 
          name: 'password', 
          rules: [
            required
            longerThan(10)
          ]
        }
      ])
    ) 
  )
}

/*
  name,
  type,
  validation rules
*/