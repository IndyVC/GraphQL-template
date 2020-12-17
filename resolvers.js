module.exports = {
  Query: require("./resolvers/query"),
  //This is a resolver for the Type Object of Session. Here we can clarify how it has to resolve properties that don't exists in the data itself, like speakers.
  Session: require("./resolvers/session"),
};
