import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const apiURL = 'https://geo.ipify.org/api/v1';

export async function getIPAddress(ip) {
  try {
    const response = await axios.get(`${apiURL}?apiKey=${API_KEY}&ipAddress=${ip}`);
    // console.log(response.data)

    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching IP address information:', error);
    throw error; // Rethrow the error for the calling code to handle
  }
}


export async function fetchUserIP() {
  try {
    const userIP = await axios.get("https://api.ipify.org/?format=json")
    return (userIP.data.ip)
  }
  catch (error) {
    console.error(error)
  }
}