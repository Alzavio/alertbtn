import React, {useState} from 'react';

function AlertButton(props) {
    return (
        <div onClick={() => props.children(props.message)}>Click me</div>
    );
}

export default AlertButton;