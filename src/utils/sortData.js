export default (keyWord, data) => {
    const newArr = [...data];
    return keyWord ? newArr.sort((a, b) => {
        if(typeof b[keyWord] === 'number') return b[keyWord] - a[keyWord]
        if(typeof b[keyWord] === 'string') return b[keyWord].localeCompare(a[keyWord]);
        throw new Error('sort error');
    }) : data;
}