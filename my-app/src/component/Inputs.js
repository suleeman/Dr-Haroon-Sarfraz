import React from 'react'


export const Inputs = ({...props}) => {

  return (<> 
 
      <label> {props.labelName}      </label>
        <input 
          type={props.type} 
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          className={props.className}
          onInvalid={props.onInvalid}
          maxLength="10"
          minLength="2"
          placeholder={props.placeholder}
        
       
        

        />
</>

  )
}

