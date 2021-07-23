import { resolvers as nodeResolvers } from "./schema/Node/Node";
import { resolvers as listResolvers } from "./schema/List/List";
import { resolvers as clientResolvers } from "./schema/Client/Client";
import { resolvers as productResolvers } from "./schema/Product/Product";
import { resolvers as demandResolvers } from "./schema/Demand/Demand";

const resolvers = {
    ...nodeResolvers,
    ...listResolvers,
    ...clientResolvers,
    ...productResolvers,
    ...demandResolvers,

    Query: {
        ...clientResolvers.Query,
        ...productResolvers.Query,
        ...demandResolvers.Query,
    },

    Mutation: {
        ...clientResolvers.Mutation,
        ...productResolvers.Mutation,
    },
};

export default resolvers;
