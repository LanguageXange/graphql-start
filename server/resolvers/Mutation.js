const { v4 } = require("uuid");

const Mutation = {
  addGift: (_, args, ctx) => {
    const {
      slug,
      title,
      image,
      rating,
      price,
      description,
      inStock,
      onSale,
      category,
    } = args;
    let newgift = {
      id: v4(),
      slug,
      title,
      image,
      rating,
      price,
      description,
      inStock,
      onSale,
      category,
    };
    ctx.mygifts.push(newgift);
    return newgift;
  },

  // remove Gift
  removeGift: (parent, { id }, { mygifts }) => {
    let removeIndex = mygifts.findIndex((gift) => gift.id === id); // return -1 if no such index found
    if (removeIndex < 0) return false;
    else {
      mygifts.splice(removeIndex, 1);
      return true;
    }
  },

  // updateGift
  updateGift: (parent, { id, title, description }, { mygifts }) => {
    console.log(id);
    // implement this functino your self
  },
};

module.exports = Mutation;
