import axios from "axios";

const axiosCORS = axios.create({
    baseURL: "https://api.allorigins.win/get?url=",
  });

export const listPostcasts = async () => {
    try {
        const response = await axiosCORS.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
        const data = response.data.feed.entry;
        const filterData = data.map(post => {
            {
            id: post.id.attributes["im:id"],
            namePost: post["im:name"].label,
            imagen: p["im:image"][2].label,
            author: p["im:artist"].label,
            summary: p.summary ? p.summary.label : "No description"}
        })
    } catch (error) {
        console.log(`ERRORS ${error}`);
    }
}