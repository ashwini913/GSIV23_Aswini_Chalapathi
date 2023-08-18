import axios from "axios";

// export const getAllMoviesList = async () => {
//   let headers = {
//     headers: { Authorization: process.env.REACT_APP_ACCESS_TOKEN },
//   };
//   let response = await axios.get(
//     process.env.REACT_APP_API_URL +
//       "/3/movie/upcoming?language=en-US&page=1&sort_by=popularity.desc" +
//       "&api_key=" +
//       process.env.REACT_APP_KEY,
//     headers
//   );
//   let results = response.data.results;
//   console.log("response", response);
//   return results;
// };

// export const getMovieDetails = async (id) => {
//   let headers = {
//     headers: { Authorization: process.env.REACT_APP_ACCESS_TOKEN },
//   };
//   let response = await axios.get(
//     process.env.REACT_APP_API_URL +
//       `/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}`,
//     headers
//   );
//   let results = response.data;
//   console.log("response", response);
//   return results;
// };

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: process.env.REACT_APP_ACCESS_TOKEN },
});
