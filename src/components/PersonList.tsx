import React from 'react'

type PersonListProps = {
    names: {
        first: string,
        last: string,
    }[]
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
