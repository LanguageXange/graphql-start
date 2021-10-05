const Gift = {
  category: (parent, args, { mycategories }) => {
    //console.log(parent); //return all the gifts
    return mycategories.find((category) => category.id === parent.category);
  },
};

module.exports = Gift;
