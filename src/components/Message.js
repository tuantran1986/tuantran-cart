import React from 'react';
import { useSelector } from 'react-redux';

const Message = () => {

    // useSelector
    const messageDisplay = useSelector(state => state.messageReducer);

    // render
    return (
        <>
            <h3>
                <span className="badge amber darken-2">{messageDisplay}</span>
            </h3>
        </>
    );
}

export default Message;
