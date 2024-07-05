const mongoose = require("mongoose")
Schema = mongoose.Schema
const Category = new Schema ({
    name: { type: String,
    },

    description: {
        type: String
    },
    
})
Category.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/category/${this._id}`;
  });
  module.exports = mongoose.model("Category", Category)