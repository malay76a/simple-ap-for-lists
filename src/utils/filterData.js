export default (keyWord, data) => data.filter(obj => {
    const newObj = {
        ...obj,
        id:'',
        avatar:''
    }
    return Object.values(newObj).join('').includes(keyWord)
});