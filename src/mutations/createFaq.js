export default async function createFaq(context, input) {
  console.log("input ", input);
  const { collections } = context;
  const { Faqs } = collections;
  let { question, answer, description, tagIds, tagTitle } = input;
  const createdAt = new Date();
  const newFaq = {
    createdAt,
    question,
    isDeleted: false,
    isVisible: true,
    answer,
    description,
    tagIds,
    tagTitle,
    updatedAt: createdAt,
  };
//   console.log("newFaq", newFaq);
  let newFaqResponse = await Faqs.insertOne(newFaq);
//   console.log("newFaqREsponse", newFaqResponse?.ops[0]);
  if (newFaqResponse?.ops.length > 0) {
    return newFaqResponse?.ops[0];
  } else {
    return null;
  }
}
