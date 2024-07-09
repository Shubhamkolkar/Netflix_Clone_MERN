const key = import.meta.env.VITE_TMDB_KEY

const baseUrl = "https://api.themoviedb.org/3";
const endpoints = {
popular: `${baseUrl}/movie/popular?api_key=${key}`,
topRated:`${baseUrl}/movie/top_rated?api_key=${key}`,
airingToday:`${baseUrl}/tv/airing_today?api_key=${key}`,
nowPlaying:`${baseUrl}/movie/now_playing?api_key=${key}`,
upcoming :`${baseUrl}/movie/upcoming?api_key=${key}`,
}


export function createImageUrl(filename,size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`
} 
export default endpoints;

//  https://api.themoviedb.org/3/movie/airing_today?api_key=68e7d216b66ffe0e4d000f1584236aa2