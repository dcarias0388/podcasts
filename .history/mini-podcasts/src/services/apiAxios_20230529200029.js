import axios from "axios";

const SERVICE_CORS = "https://allorigins.win";

export const listPostcasts = async () => {
    try {
        const response = await axios.get(`${SERVICE_CORS}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`);
        console.log('DATA',response.data);
    } catch (error) {
        console.log(error);
    }
}