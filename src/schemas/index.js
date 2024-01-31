import importAsString from "@reactioncommerce/api-utils/importAsString.js";

const schema = importAsString("./schema.graphql");
const faq = importAsString("./faq.graphql");

export default [schema, faq];
