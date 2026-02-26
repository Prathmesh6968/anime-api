const freshDrops = require("./home-components/freshDrops.js")
const latest_animeMovies = require("./home-components/latest-anime-movies.js")
const most_watched_Films = require("./home-components/most-watched-films.js")
const most_watched_Series = require("./home-components/most-watched-series.js")
const on_air_series = require("./home-components/on-air-series.js")

const home = async()=>{
    const fresh = await freshDrops();
    const latest = await latest_animeMovies();
    const mostFilms = await most_watched_Films();
    const mostSeries = await most_watched_Series();
    const onAir = await on_air_series();
    
    var results={
        fresh_drops: fresh.results,
        latest_animeMovies: latest.results,
        mostWatched_Films: mostFilms.results,
        mostWatched_Series: mostSeries.results,
        on_air_series: onAir.results
    }
    let dato
    if(fresh=={}||latest=={}||mostFilms=={}||mostSeries=={}||onAir=={}){
        dato = {
            success: false,
            message: "Data Not Found!!",
            results: results        
        }
    }else{
        dato = {
            success: true,
            message: "Data Found!!",
            results: results
        }
    }
    
    return dato
}

module.exports = home