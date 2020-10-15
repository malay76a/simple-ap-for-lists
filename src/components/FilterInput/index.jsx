import React from "react";

export default ({value, onChange}) => (
    <div>
        <label htmlFor="filter">Фильтр:</label>
        <input id="filter" type="text" value={value} onChange={onChange}/>
    </div>
)