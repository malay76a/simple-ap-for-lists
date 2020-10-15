import React, {useState} from "react";
import { useQuery } from 'react-query';
import fetchUsers from '../../api/fetchUsers';
import Container from '../../components/Container';
import Link from "../../components/Link";
import TableView from '../../components/TableView';

export default () => {
    const { isLoading, isError, data, error } = useQuery('users', fetchUsers);
    const [viewType, setViewType] = useState('table');
    const [users, setUsers] = useState([]);
    const [sortOptions, selectSortOptions] = useState('');
    const [selectSortOption, setSelectSortOption] = useState('');

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <Container>
            <Link href="/">Перейти на главную</Link>
            <h1>Список пользователей</h1>
            <form>
                <input type="text"/>
                <select>
                    <option></option>
                </select>
            </form>

            {viewType === 'table' ? <TableView users={data.user} /> : null}

        </Container>
    )

}