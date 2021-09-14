import React from 'react'

type GreetProps = {
    name: string,
    messageCount?: number, //this is now optional
    isLoggedIn: boolean,
}
// function Greet(props: GreetProps) without destructuring
function Greet({ name, messageCount, isLoggedIn}: GreetProps) {
    // const { messageCount = 0 } = messageCount //if nothing is passed in set it to zero, if something is passed in set it to props
    // note above we are also destructuring messageCount hence we are using messageCount on line 15 instead of props.messageCount
    //messageCount ? messageCount = messageCount: messageCount = 0; 
    if(!messageCount) {
        messageCount = 0;
    }
    return (
        <div>
            {isLoggedIn ? (
                <h2>Hello {name}, you have {messageCount} unread messages.</h2>
            ) : (
                <h2>Hello Guest, you are not logged in so no messages to retreive.</h2>
            )}
            
        </div>
    )
}

export default Greet   