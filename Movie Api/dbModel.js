import mongoose from "mongoose";

const netflixMovieSchema = mongoose.Schema({
  url: String,
  name: String,
  contentType: String,
  description: String,
  contentRating: String,
  genre: String,
  poster: String,
  formattedDuration: String,
  releasedDate: String,
  actors: String,
  director: String,
  creator: String,
  audio: String,
  subtitle: String,
  availableForOffline: String,
  numberOfSeasons: String,
  seasonStartDate: String,
  source: String,
  sourceLink: String,
  uniqId: String,
  scrapedAt: String,
});

// collection inside the database
export default mongoose.model("netflixMovieSchema", netflixMovieSchema);
