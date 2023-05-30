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

export const podcastDetails = async (id) => {
    try {
        const response = await axiosCORS.get(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`);
        const data = response.data.results;
        const episodes = [];
        data.forEach((epi, index) => {
           if(index > 0) {
            const episode = {
                 id: epi.trackId,
              title: epi.trackName,
               date: epi.releaseDate,
           duration: epi.duration,
        description: epi.description,
           urlAudio: epi.episodeUrl
            }
             episodes.push(episode);
           }
        })
        console.log('EPISODES', episodes);
        const filterData = {episodes, totalEpisodes: response.data.resultCount-1}
        return filterData;
    } catch (error) {
        console.log(`Error loading podcast details: ${error}`);
    }
}