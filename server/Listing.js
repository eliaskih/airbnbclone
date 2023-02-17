import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    market: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    suburb: {
      type: String,
      required: true,
    },
    picture_url: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availability_30: {
      type: String,
    },
    number_of_reviews: {
      type: Number,
    },
    host_is_superhost: {
      type: Boolean,
    },
    name: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    accommodates: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },

    bathrooms: {
      type: Number,
      required: true,
    },
    amenities: {
      type: Array,
    },
    description: {
      type: String,
      required: true,
    },
    space: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    _id: {
      type: String,
      required: true,
    },
  },
  { collection: "listingsAndReviews" }
);

export const Listing = mongoose.model("listingsAndReviews", listingSchema);
