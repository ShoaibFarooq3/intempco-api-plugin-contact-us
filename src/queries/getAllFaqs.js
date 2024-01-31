export default async function getAllFaqs(context, args) {
  console.log("here args", args);
  let { itemPerPage, PageNumber, tagIds, searchQuery } = args;
  let filters = { isVisible: true };
  if (tagIds) {
    filters.tagIds = { $in: tagIds };
  }
  if (searchQuery) {
    filters.$or = [
      { question: { $regex: searchQuery, $options: "i" } },
      { answer: { $regex: searchQuery, $options: "i" } },
      { description: { $regex: searchQuery, $options: "i" } },
    ];
  }
//   console.log("filters", filters);
  const {
    collections: { Faqs },
  } = context;
  let itemsPerPage = itemPerPage ? itemPerPage : 10; // Number of items to display per page
  PageNumber = PageNumber ? PageNumber : 1;
  let skipAmount = (PageNumber - 1) * itemsPerPage;
  let totalCount = await Faqs.countDocuments(filters);
  let responseFaqs = await Faqs.find(filters)
    .skip(skipAmount)
    .limit(itemsPerPage)
    .toArray();
  if (responseFaqs.length > 0) {
    return {
      totalCount,
      Faqs: responseFaqs,
    };
  } else {
    return {
      totalCount: 0,
      Faqs: null,
    };
  }
}
