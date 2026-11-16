import axios from 'https://cdn.jsdelivr.net/npm/axios@1.7.9/+esm';
axios.get("http://localhost:3000/api/activites")
.then((reponse)=>{
    console.log(reponse.data);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Request completed")
})
