async function fetchTasks (){
    const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_7f5ac2b2fff4443a8ffbc7cee4a196bf&q=football&country=gb,es,us&language=en,fr&category=sports,politics,education');
    if(!response.ok){
        throw new Error(`Title: Validation failed ${response.status}`)
    }
    const result = await response.json();
    if(result.status==='error'){
        throw new Error(`API validation failed:${result.message ||"Unknown error"}`);
    } 
    return result;
};
export default fetchTasks;