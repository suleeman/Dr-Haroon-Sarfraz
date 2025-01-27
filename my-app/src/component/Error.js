import React from 'react'

export const Error = ({...props}) => {
  return (
    <div>
        <p> {props.message}</p>
    </div>
  )
}

