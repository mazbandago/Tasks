async function fetchTasks (){
    const response = await fetch(' https://newsdata.io/api/1/latest?apikey=pub_7f5ac2b2fff4443a8ffbc7cee4a196bf&q=football&country=gb,es&language=en&category=sports');
    if(!response.ok){
        throw new Error("Title: Validation failed")
    }
    return response.json();
};
export default fetchTasks;