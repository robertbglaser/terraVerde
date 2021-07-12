import React from 'react'

function TextInput(props) {
   const {type, idName, className,placeholder, name} = props
    return (
        
        <div>
            
            <input
                type={type}
                id={idName}
                className={className}
                name={name}
                placeholder={placeholder}
                onChange={() =>{console.log("hi, I am alive")}}
            />
 
        </div> 
    )
}

export default TextInput
