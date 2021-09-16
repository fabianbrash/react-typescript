import React, { useState } from 'react'

type AuthUser = {
    name: string,
    email: string,
}
const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null);

    // type assertion

    // const [user, setUser] = useState<AuthUser>({} as AuthUser);
    // the above will allow us to do this {user.name} {user.email}

    const handleLogin = () => {
        setUser({
            name: 'Alexander',
            email: 'alexander@gmail.com',
        })
    }

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
                <div>User name is {user?.name}</div>
                <div>User email is {user?.email}</div>
        </div>
    )
}

export default User
