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
          required={true} minLength={2} maxLength={10}
          // maxLength={props.maxLength}
        

        />
</>

  )
}

