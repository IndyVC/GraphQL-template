const { ApolloServer, gql } = require("apollo-server");
const SessionAPI = require("./datasources/sessions");
const SpeakerAPI = require("./datasources/speakers");
//Setting up the models that can be queried dynamically
// type Query must be included, it's used for the resolver. Names in typ query have to match those in the resolver
const typeDefs = require("./schema.js");

//Resolvers handle the actual Query that is send from the client. Name of the query have to be defined inside 'Query' (f.e. sessions)
const resolvers = require("./resolvers.js");

//Datasources are like repositories. They are hooked up in the constructor. They can be accessed in the resolver by the context parameter.
const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
});

//Initialising the server and expressing we are using our schema that we setup (typeDefs), which queries that can be send (resolvers) and our repositories (dataSources)
const server = new ApolloServer({ typeDefs, resolvers, dataSources });

//Start server
server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`graphQL running at ${url}`));
