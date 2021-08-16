const trainerResolvers = require("./trainers");
const trainingResolvers = require("./trainings");
const dayResolvers = require("./days")
const personResolvers = require("./persons")



module.exports = {

    Query: {
        ...trainerResolvers.Query,
        ...trainingResolvers.Query,
        ...dayResolvers.Query,
        ...personResolvers.Query
    },
    Mutation: {

        ...trainerResolvers.Mutation,
        ...trainingResolvers.Mutation,
        ...dayResolvers.Mutation,
        ...personResolvers.Mutation
    }
    
}