import React from 'react'

type GreetProps = {
    name: string,
    messageCount?: number, //this is now optional
    isLoggedIn: boolean,
}

function Greet(props: GreetProps) {
    const { messageCount = 0 } = props //if nothing is passed in set it to zero, if something is passed in set it to props
    // note above we are also destructing messageCount hence we are using messageCount on line 15 instead of props.messageCount
    return (
        <div>
            {props.isLoggedIn ? (
                <h2>Hello {props.name}, you have {messageCount} unread messages.</h2>
            ) : (
                <h2>Hello Guest, you are not logged in so no messages to retreive.</h2>
            )}
            
        </div>
    )
}

export default Greet   