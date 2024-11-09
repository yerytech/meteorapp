import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getWeather = async (location: string) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        key: apiKey,
        q: location,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
