const { faker } = require("@faker-js/faker");
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const productsCollection = client
      .db("food-ordering")
      .collection("products");
    const categoriesCollection = client
      .db("food-ordering")
      .collection("categories");

    let categories = ["Chinese", "Mexican", "Fast Food", "Desserts"].map(
      (category) => {
        return { name: category };
      }
    );
    await categoriesCollection.insertMany(categories);

    let imageUrls = [
      "https://eatwheat.org/wp-content/uploads/2020/12/Web-12.png",
      "https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/gray/about_us/2.jpg?tr=w-3840",
      "https://www.kron4.com/wp-content/uploads/sites/11/2016/03/in-n-out-burger_36718590_ver1.0.jpg",
    ];

    let products = [];
    for (let i = 0; i < 10; i += 1) {
      let newProduct = {
        name: faker.commerce.productName(),
        adjective: faker.commerce.productAdjective(),
        desciption: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: _.sample(categories),
        imageUrl: _.sample(imageUrls),
      };
      products.push(newProduct);
    }
    await productsCollection.insertMany(products);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();
