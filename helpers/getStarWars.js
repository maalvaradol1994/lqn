export const getStarWars = async(resource) => {

    const url = resource;

    const resp = await fetch( url );
    const data = await resp.json();

    const peopleStarWars = {
        count: data.count,
        next: data.next,
        previous: data.previous,
        people: data.results,
    }

    return peopleStarWars;

}