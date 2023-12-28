import mongoose from "mongoose";

const DailyScheme = new mongoose.Schema(
  {
    presenter: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Daily", DailyScheme);
