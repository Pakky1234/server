import { gql } from "apollo-server-express";

//fake database
const user =[
    {
        id:"1",
        name: "สมชาย",
        username: "Somchai",
        password: "123456",
        email: "somchai@outlook.com",
    },
    {
        id:"2",
        name: "สมสี",
        username: "Somsi",
        password: "123456",
        email: "Somsi007@outlook.com",
    },
    {
        id:"3",
        name: "สมสม",
        username: "Somsom",
        password: "123456",
        email: "Somsom@outlook.com",
    },
    {
        id:"4",
        name: "สมเย็ด",
        username: "Somyed",
        password: "123456",
        email: "Somyed@outlook.com",
    },
    {
        id:"5",
        name: "สมสัก",
        username: "Somsak",
        password: "123456",
        email: "Somsak@outlook.com",
    },
];

export const resolvers = {
    Query:{
        user:(parent, args, context, info) =>{return user.filter((user) => user.id.toString() === args.id)[0]},
        
        users:(parent, args, context, info) =>{return user},
 },
};

export const typeDefs = gql`
  
type User {
    id: ID!
    name: String!
    password: String!
    email: String
}

 type Query{
    user(id:ID): User
    users:[User]!
}
`;