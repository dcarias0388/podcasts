import axios from "axios";

const axiosCORS = axios.create({
    baseURL: "https://api.allorigins.win/get?url=",
  });

export const listPostcasts = async () => {
    try {
        const response = await axiosCORS.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
        const data = response.data.feed.entry;
        const filterData = data.map(post => {
            return { id: post.id.attributes['im:id'], name: post['im:name'].label, imagen: post["im:image"][0].label, author: post["im:artist"].label, summary: post.summary.label}
        })
        return filterData;
    } catch (error) {
        console.log(`ERRORS ${error}`);
    }
}