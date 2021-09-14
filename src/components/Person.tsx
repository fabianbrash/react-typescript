import React from 'react'
import { PersonProps } from './Person.types';

function Person(props: PersonProps) {
    return (
        <div>
            <p>{props.name.first} {props.name.last}</p>
        </div>
    )
}

export default Person
