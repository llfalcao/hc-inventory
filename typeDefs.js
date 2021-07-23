import { gql } from "apollo-server-express";
import { typeDefs as nodeTypeDefs } from "./schema/Node/Node";
import { typeDefs as listTypeDefs } from "./schema/List/List";
import { typeDefs as clientTypeDefs } from "./schema/Client/Client";
import { typeDefs as productTypeDefs } from "./schema/Product/Product";
import { typeDefs as demandTypeDefs } from "./schema/Demand/Demand";

const typeDefs = gql`
    type Query {
        _root: String
    }

    type Mutation {
        _root: String
    }

    ${nodeTypeDefs}
    ${listTypeDefs}
    ${clientTypeDefs}
    ${productTypeDefs}
    ${demandTypeDefs}
`;

export default typeDefs;
