import importAsString from "@reactioncommerce/api-utils/importAsString.js";

const schema = importAsString("./schema.graphql");
const faq = importAsString("./faq.graphql");
const contactUsDetail = importAsString("./contactUsDetail.graphql");
export default [schema, faq,contactUsDetail];
