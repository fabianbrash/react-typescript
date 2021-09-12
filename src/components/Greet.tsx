import React from 'react'

type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean,
}

function Greet(props: GreetProps) {
    return (
        <div>
            {props.isLoggedIn ? (
                <h2>Hello {props.name}, you have {props.messageCount} unread messages.</h2>
            ) : (
                <h2>Hello Guest, you are not logged in so no messages to retreive.</h2>
            )}
            
        </div>
    )
}

export default Greet   