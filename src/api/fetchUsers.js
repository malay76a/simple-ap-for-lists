export default async () => {
    const res = await fetch('/.netlify/functions/getUsers')
    return await res.json();
}