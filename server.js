import express from "express";
import { ApolloServer } from "apollo-server-express";

import atypeDefs from "./typeDefs";
import aresolvers from "./resolvers";

async function startApolloServer() {
    const app = express();

    const server = new ApolloServer({
        typeDefs: atypeDefs,
        resolvers: aresolvers,
    });

    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;
    await new Promise((resolve) => app.listen({ port: PORT }, resolve));
    console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
    return { server, app };
}

startApolloServer();
