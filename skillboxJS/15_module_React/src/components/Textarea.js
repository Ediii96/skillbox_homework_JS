import React from "react";


const AppTextarea = (props) => {

    return (
        <textarea
            name={props.name}
            value={props.value}
            className={props.className}
            onChange={props.onChange}>
        </textarea>
    )

}

export default AppTextarea;