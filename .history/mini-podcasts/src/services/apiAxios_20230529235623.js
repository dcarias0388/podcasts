import axios from "axios";

const axiosCORS = axios.create({
    baseURL: "https://api.allorigins.win/get?url=",
  });

export const listPostcasts = async () => {
    try {
        const response = await axiosCORS.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
        const data = response.data.feed.entry;
        const filterData = data.map(post => {
            return { id: post.id.attributes['im:id'], title: post['im:name'].label, image: post["im:image"][2].label, author: post["im:artist"].label, summary: post.summary.label}
        })
        return filterData;
    } catch (error) {
        console.log(`Error loading poastcasts: ${error}`);
    }
}