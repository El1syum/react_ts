import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>{user?.id}. {user?.name}</h1>
            <div className="email">{user?.email}</div>
            <div className="address">{user?.address.city} - {user?.address.street}</div>
        </div>
    );
};

export default UserItemPage;