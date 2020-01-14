import React from  "react";


const AppInput = (props) => {

    return (  
        <input
            type= {props.type}
            name= {props.name}
            value= {props.value}
            className={props.className}
            onChange= {props.onChange} 
        />
    )

}

export default AppInput;