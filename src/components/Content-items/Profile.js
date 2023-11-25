import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { redirect } from 'react-router-dom';

export default function Profile() {
    const { user,isAuthenticated } = useAuth0();

    console.log(isAuthenticated);

    if(!isAuthenticated){
        redirect('/login');
    }
    else{
        return (
            <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <ul>
                <li>Email: {user.email}</li>
                <li>Nickname: {user.nickname}</li>
                <li>Sub: {user.sub}</li>
                <li>Update_at: {user.updated_at}</li>
                <li>Family_name: {user.family_name}</li>
                <li>Given_name: {user.given_name}</li>
                <li>Locale: {user.locale}</li>
                <li>Picture: {user.picture}</li>
    
            </ul>
    
        </div>
        )
    }

}
