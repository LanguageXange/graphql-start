const Query = {
  books: (parent, args, { mybooks }) => mybooks,
  mainCards: (parent, args, { myMainCards }) => myMainCards,
  categories: (parent, args, { mycategories }) => mycategories,
  gifts: (parent, args, { mygifts }) => mygifts,
  gift: (parent, args, { mygifts }) => {
    // console.log(context);
    //console.log("parent=", parent, "args=", args, "context=", context);
    let itemSlug = args.slug;
    return mygifts.find((gift) => gift.slug === itemSlug);
  },
  category: (parent, args, { mycategories }) => {
    let itemSlug = args.slug;
    return mycategories.find((category) => category.slug === itemSlug);
  },
};

module.exports = Query;
