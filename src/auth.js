const users = [
    {"id":"1234","password":"1234","nickname":"mood", "chk":"0"},
    {"id":"12345","password":"12345","nickname":"dddd", "chk":"0"},
    {"id":"mood","password":"11111","nickname":"sang", "chk":"0"}
]

export function signIn({id, password})
{
    const user = users.find(user => user.id === id && user.password === password);
    if (user === undefined)
    throw new Error();
    return user;
}