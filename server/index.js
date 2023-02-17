import express from "express";
const app = express();
import mongoose from "mongoose";
import { Listing } from "./Listing.js";

app.get("/", (req, res) => {
  res.send("hej");
});

app.get("/listings", async (req, res) => {
  const listings = await Listing.find(
    {},
    {
      address: { country: 1, market: 1, suburb: 1 },
      images: { picture_url: 1 },
      price: 1,
      availability: { availability_30: 1 },
      number_of_reviews: 1,
      host: { host_is_superhost: 1 },
      name: 1,
      summary: 1,
      accommodates: 1,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      amenities: 1,
      description: 1,
      space: 1,
      notes: 1,
      _id: 1,
    }
  ).limit(30);
  res.send(listings);
});

app.get("/listings/:id", async (req, res) => {
  const listing = await Listing.findOne({ _id: req.params.id });
  res.send(listing);
});

app.listen(3000, () => {
  console.log("hello world");
  mongoose.set("strictQuery", false);
  mongoose.connect(
    "mongodb+srv://elias:elias@cluster0.mwobsou.mongodb.net/sample_airbnb?retryWrites=true&w=majority"
  );
});
