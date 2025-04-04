import { ClassNames } from '@emotion/react';
import React from 'react'

export const Error = ({...props}) => {
 
  return (
    
    <div>
      <p className={props.className}>  {props.message}</p> 
    </div>
  )
}

