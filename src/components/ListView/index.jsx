import React from "react";
import styled from "styled-components";

export default ({users}) => {

    return (
        <Grid>
            {users.map(user => (
                <Item key={user.id}>
                    <img src={user.avatar} alt=""/>
                    <div>{user.firstName} {user.lastName}</div>
                    <div>{user.group}</div>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                </Item>
            ))}
        </Grid>
    )
}

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-auto-columns: auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;
const Item = styled.div`
    max-width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(auto-fill, auto);
    grid-gap: 5px;
    align-items: center;
    justify-items: center;
    border: solid #c6c6c6 1px;
    border-radius: 4px;
    padding: 10px;
`;