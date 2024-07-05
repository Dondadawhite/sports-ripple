const mongoose = require("mongoose")

Schema = mongoose.Schema
const Item = new Schema ({
    name: { type: String,
    },
    category: {
        type: String,
        ref: "Category"
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    
})
Item.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/item/${this._id}`;
  });
  module.exports = mongoose.model("Item", Item)