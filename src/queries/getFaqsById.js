export default async function getFaqsById(context, args) {
//   console.log("here args", args);
  let { _id } = args;
  const {
    collections: { Faqs },
  } = context;
  let responseFaqs = await Faqs.find(_id).toArray();
  if (responseFaqs?.length > 0) {
    return responseFaqs[0];
  } else {
    return null;
  }
}
