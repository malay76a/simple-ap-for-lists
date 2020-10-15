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
import Center from '../../components/Center';
import ListView from '../../components/ListView';
import GroupsView from '../../components/GroupsView';

export default () => {
    const {isLoading, isError, data, error} = useQuery('users', fetchUsers);
    const [viewType, setViewType] = useState('table');
    const [selectSortOption, setSelectSortOption] = useState('');
    const [findStr, setFindStr] = useState('');

    const viewArray = ['table', 'list', 'groups'];

    if (isLoading) {
        return (
            <Center>
                <span>Loading...</span>
            </Center>
        )
    }

    if (isError) {
        return (
            <Center>
                <span>Error: {error.message}</span>
            </Center>
        )
    }

    const sortedAndFilteredData = sort(selectSortOption,filter(findStr, data.user));

    return (
        <Container>
            <Link href="/">Перейти на главную</Link>
            <h1>Список пользователей</h1>
            <Panel>
                <FilterInput  value={findStr} onChange={event => setFindStr(event.target.value)} />
                <Select alue={selectSortOption} onChange={event => setSelectSortOption(event.target.value)} data={data.sortFields} />
                <RadioGroup data={viewArray} onChange={event => setViewType(event.target.value)} viewType={viewType} />
            </Panel>
            {viewType === 'table' ? <TableView users={sortedAndFilteredData} /> : null}
            {viewType === 'list' ? <ListView users={sortedAndFilteredData} /> : null}
            {viewType === 'groups' ? <GroupsView users={sortedAndFilteredData} /> : null}
        </Container>
    )
}