export async function fetchJoke(category: string) {
    try {
        const data = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then((res) => {
            return res.json();
        })
        console.log("fetch",data.value);
        return data.value;
    } catch (error) {
        console.log(error)
    }
}

