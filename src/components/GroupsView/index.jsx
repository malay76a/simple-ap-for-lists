import React from "react";
import styled from "styled-components";

export default ({users}) => {
    const set = Array.from(new Set(users.map(i => i.group)));

    return (
        <>
            {set.map(group => (
                <div key={group}>
                    <h2>{group || 'Без группы' }</h2>
                    <Group>
                        {users.filter(i => i.group === group).map(item => (
                            <Item key={item.id}>
                                <Img src={item.avatar} alt=""/>
                                <div>{item.firstName} {item.lastName}</div>
                                <div>{item.email}</div>
                            </Item>
                        ))}
                    </Group>
                </div>
            ))}
        </>
    )
}

const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Item = styled.div`
  display: grid;
  grid-template-areas: "img name"
                       "img email";
  grid-template-columns: 50px auto;
  grid-gap: 5px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  grid-area: img;
`;