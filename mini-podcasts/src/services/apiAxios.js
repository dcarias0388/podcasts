import axios from "axios";

const axiosCORS = axios.create({
    baseURL: "https://api.allorigins.win/get?url=",
  });

export const listPodcasts = async () => {
    try {
        const response = await axiosCORS.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
        const data = response.data.feed.entry;
        const filterData = data.map(podcast => {
            return { id: podcast.id.attributes['im:id'], title: podcast['im:name'].label, image: podcast["im:image"][0].label, author: podcast["im:artist"].label, summary: podcast.summary.label}
        })
        return filterData;
    } catch (error) {
        console.log(`Error loading podcasts: ${error}`);
    }
}