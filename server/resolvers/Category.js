const Category = {
  gifts: (parent, args, { mygifts }) => {
    // console.log(parent); //{ id: '1', image: 'url', category: 'food', slug: 'food' }
    return mygifts.filter((gift) => gift.category === parent.id);
  },
};

module.exports = Category;
