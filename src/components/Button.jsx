import React from 'react'

function Button(props) {
  return (
    <a
    onClick={props.onClick}
    className={`button ${props.className}`}
    aria-label={`button ${props.ariaLabel}`}
    tabIndex={`${props.tabIndex}`}
    href='#'>
        {props.content}
    </a>
  )
}

export default Button