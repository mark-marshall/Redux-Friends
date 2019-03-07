import React from 'react';

export default function LoginPage({ getToken }){
    return (
        <div>
            <div>Username: <input></input></div>
            <div>Password: <input></input></div>
            <button onClick={() => getToken()}>Log In</button>
        </div>
    )
}
