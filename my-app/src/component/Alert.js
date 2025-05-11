import React from 'react';
import "../styles/alertStyling/alert.scss";


export const Alert = ({...props}) => {
 
  return (
    
    <div>
          {props.setAllInputValueEmpty?  <p className= "error" >Please fill out all required fields.  </p>  : "" }
          {props.setSomeInputValueEmpty ? <p className= "error" > {`Please fill up ${props.missingValue}`}  </p>  : "" }
          {props.setDob ?  <p className= "error" >Please enter correct format of dd/mm/yyyy </p>  : "" }
          <p className={props.className}>  {props.message}</p> 
    </div>
  )
}

