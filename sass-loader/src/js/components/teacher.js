import React from 'React';

function Teacher(props) {
  return (
    <li className="Teacher">
      {props.name}
      <a href={`https://twitter.com/${props.twitter}`}>{props.twitter}</a>
      {props.twitter}
    </li>
  )
}

export default Teacher;