require("dotenv").config();

const mapsKey = process.env.GMAPS_API;

exports.getGoogleMapsAPI = (req, res) => {
  res.status(200).send(mapsKey);
};
