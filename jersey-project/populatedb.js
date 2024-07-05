#! /usr/bin/env node
const userArgs = process.argv.slice(2);
  
const Item = require("./models/item");
const Category = require("./models/category");


const Stuff = [];
const Categ = [];

const mongoose = require("mongoose")

mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategory();
  await createIt()
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}
console.log(
    'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
  );

 
  
  
  // Get arguments passed on command line
 
  // We pass the index to the ...Create functions so that, for example,
  // genre[0] will always be the Fantasy genre, regardless of the order
  // in which the elements of promise.all's argument complete.

  
  async function createItem(name, category, price, stock) {
    const itemdet =  {
      name: name,
      category: category,
      price: price,
      stock: stock,
    };
    const yacht = new Item(itemdet)
    await yacht.save()
  }
  
  async function Categary(index, name, description) {
    const Categor = {
      index: index,
      name: description,
      description: description,
    };
    const love = new Category(Categor)
    await love.save()
  Categ[index] = love
  }
  
  async function createCategory() {
    console.log("addint cats")
    await Promise.all([
      Categary(0, "Basketball", "Hooper"),
      Categary(1, "Football", "Footer"),
      Categary(2, "Soccer", "kicker"),
    ]);
  }
  
  async function createIt() {
    console.log("Adding Items");
    await Promise.all([
      createItem("LeBron James", "Basketball",59.00 , 5, Categ[0]),
      createItem("Tom Brady", "Football",59.00 , 5, Categ[1]),
      createItem("Neymar", "Soccer",59.00 , 5, Categ[2]),

    ]);
  }
