import axios from "axios";

export function signIn({id, password})
{
    
   const user = [] 
   axios.post('http://shbox.shop:3007/user/login', {
        id: id,
        password: password
    })
    .then(function(response) {
        console.log(response.data.code)
        if (response.data.code == 0)
            console.log('i wanna go home')
            console.log(response.data.content)
            user.push(JSON.stringify(response.data.content)) 
    })
    
    console.log(user)
    
    return user;
}