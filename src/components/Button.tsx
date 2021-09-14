import React from 'react'

/* type ButtonProps = {
    handleClick: () => void
}*/

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

// const Button = (props: ButtonProps) without destructuring
const Button = ({ handleClick }: ButtonProps) => {
    return (
        <div>
           <button onClick={(event) => handleClick(event, 1)}>Click</button> 
        </div>
    )
}

export default Button
