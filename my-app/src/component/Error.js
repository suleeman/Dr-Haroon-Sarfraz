import { ClassNames } from '@emotion/react';
import React from 'react'

export const Error = ({...props}) => {

//     const [ isAlertVisible, setIsAlertVisible ] = React.useState(true);
//   setTimeout(() => {
//        setIsAlertVisible(false);
//       }, 2000);

 
  return (
    
    <div>
      <p className={props.className}>  {props.message}</p> 
    </div>
  )
}

