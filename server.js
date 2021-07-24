import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import path from "path";

async function startApolloServer() {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: {},
    });

    app.use(express.static("public"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./public/index.html"));
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
