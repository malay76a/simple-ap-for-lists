import React from "react";
import styled from "styled-components";

export default ({data, onChange, viewType}) => (
    <div>
        <span>Вид: </span>
        {data.map(i => (
            <span key={i} >
                <Input type="radio" id={i}
                       name="contact" value={i} checked={viewType === i}
                       onChange={onChange} />
                <label htmlFor={i}>{i}</label>
            </span>
        ))}
    </div>
)

const Input = styled.input`
  display: none;
  
  & + label {
    padding: 2px;
    cursor: pointer;
  }
  
  &:checked + label {
    background-color: #161616;
    color: #fff;
  }
  
  &:not(:checked):hover + label {
    background-color: #c6c6c6;
  }
`;