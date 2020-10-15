import React, {useState} from "react";
import {useQuery} from 'react-query';
import fetchUsers from '../../api/fetchUsers';
import Container from '../../components/Container';
import Link from "../../components/Link";
import TableView from '../../components/TableView';
import Panel from '../../components/Panel';
import filter from '../../utils/filterData';
import sort from '../../utils/sortData';
import FilterInput from '../../components/FilterInput';
import Select from '../../components/Select';
import RadioGroup from '../../components/RedioGroup';

export default () => {
    const {isLoading, isError, data, error} = useQuery('users', fetchUsers);
    const [viewType, setViewType] = useState('table');
    const [selectSortOption, setSelectSortOption] = useState('');
    const [findStr, setFindStr] = useState('');

    const viewArray = ['table', 'list', 'groups'];

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
            <Panel>
                <FilterInput  value={findStr} onChange={event => setFindStr(event.target.value)} />
                <Select alue={selectSortOption} onChange={event => setSelectSortOption(event.target.value)} data={data.sortFields} />
                <RadioGroup data={viewArray} onChange={event => setViewType(event.target.value)} viewType={viewType} />
            </Panel>
            {viewType === 'table' ? <TableView users={sort(selectSortOption,filter(findStr, data.user))}/> : null}
            {viewType === 'list' ? 'list' : null}
            {viewType === 'groups' ? 'groups' : null}
        </Container>
    )
}