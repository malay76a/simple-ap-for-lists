import React from "react";

export default ({value, onChange, data}) => (
    <div>
        <label htmlFor="sort">Сортировка: </label>
        <select id="sort" value={value} onChange={onChange}>
            <option value={''}>Без сортировки</option>
            {data.map(i => <option key={i} value={i}>{i}</option>)}
        </select>
    </div>
)

