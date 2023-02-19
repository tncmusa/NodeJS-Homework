import axios from 'axios';

const getData = async (id) => {
    try
    {
        const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + id);
        const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id);
        console.log (user);
        console.log (post);
    }
    catch(e)
    {
        console.log("An error occured.");
    }

};


export default getData;