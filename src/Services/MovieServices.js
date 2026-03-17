const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'pt-BR';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getPopularMovies = async () => {
  
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}`
    );
    if (!response.ok) throw new Error('Falha ao carregar filmes populares');
    const data = await response.json();
    console.log(data.results);
    return data.results;
};

export const getGenres = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  if (!response.ok) throw new Error('Falha ao carregar gêneros');
  return (await response.json()).genres;
};

export const searchMovies = async (query) => {

    const encodedQuery = encodeURIComponent(query);
    
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${encodedQuery}&api_key=${API_KEY}&language=${LANGUAGE}`
    );
    
    if (!response.ok) throw new Error('Busca falhou');
    
    return (await response.json()).results;
};

export const getMovieDetails = async (id) => {

    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    
    if (!response.ok) throw new Error('Detalhes do filme não encontrado');
    
    return await response.json();
  };