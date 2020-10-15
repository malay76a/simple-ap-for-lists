import React from "react";
import styled, {css} from "styled-components";

export default ({users}) => (
    <Table >
        <thead>
            <tr>
                <th>Имя Фамилия</th>
                <th>Email</th>
                <th>Группа</th>
                <th>Стаж</th>
            </tr>
        </thead>
        <tbody>
            {users.map((i,idx) => (
                <Tr key={i.id} even={idx % 2 === 0}>
                    <Td>{i.firstName} {i.lastName}</Td>
                    <Td><a href={`mailto:${i.email}`}>{i.email}</a></Td>
                    <Td>{i.group}</Td>
                    <Td>{i.experience}</Td>
                </Tr>
            ))}
        </tbody>
    </Table>
)

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const Tr = styled.tr`
  ${props => props.even && css`
    background: #d7d7d7;
  `}
`;

const Td = styled.td`
  padding: 5px 10px;
`;