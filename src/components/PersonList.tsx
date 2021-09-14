import React from 'react'
import { Name } from './Person.types';

/* type PersonListProps = {
    names: {
        first: string,
        last: string,
    }[]
}*/


type PersonListProps = {
    names: Name[]
}
function PersonList(props: PersonListProps) {
    return (
        <div>
            {props.names.map(name => (
                <h3 key={name.first}>{name.first} {name.last}</h3>
            ))}
        </div>
    )
}

export default PersonList
