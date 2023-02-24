export const getJSON = async function(url) {
    try {
        const res = await fetch(url);    
        //https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
        const data = await res.json();
        
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);    
        return data;
    } catch (err) {
        console.error(err);
    }

}