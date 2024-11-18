const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const ProductTypeDefs = require('./schemas/productSchema');
const UserTypeDefs = require('./schemas/userSchema');
const productResolvers = require('./resolvers/productResolver');
const userResolvers = require('./resolvers/userResolver');

const typeDefs = [ProductTypeDefs, UserTypeDefs];
const resolvers = [productResolvers, userResolvers];

const startServer = async () => {
  // Conectar a MongoDB
  await mongoose.connect('mongodb+srv://CristianP:Cristian2000@eeducation.rizc6.mongodb.net/');
  
  const server = new ApolloServer({ typeDefs, resolvers });
  
  server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);

  });
};

startServer();
