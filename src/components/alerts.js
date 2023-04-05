import React from 'react'





export default function Alert(props) {
const Capitalize = (words) => {
    let capitalWords = words.toLowerCase();
    return capitalWords.charAt(0).toUpperCase() + capitalWords.slice(1);
}

    return(
props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
</div>


)
}