import React from "react";
import { useQuery } from 'react-query';
import fetchUsers from '../../api/fetchUsers';

export default () => {
    const { isLoading, isError, data, error } = useQuery('todos', fetchUsers)

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <ul>
            {data.user.map(item => (
                <li key={item.id}>{item.firstName}</li>
            ))}
        </ul>
    )

}