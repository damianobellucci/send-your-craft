import mongo from "mongodb"
import storageConfig from "./config.js"

const loginData = {
    HOST: storageConfig.HOST,
    user: storageConfig.user,
    password: storageConfig.password
};
const MongoClient = mongo.MongoClient

class Connection {
    static async connectToMongo() {
        if (this.db) return this.db
        this.db = await MongoClient.connect(this.url, this.options)
        return this.db
    }
}

Connection.db = null
Connection.url = `mongodb://${loginData.user}:${loginData.password}@${loginData.HOST}`;
Connection.options = {
    /*
    bufferMaxEntries: 0,
    reconnectTries: 5000,
    useNewUrlParser: true,
    */
    useUnifiedTopology: true,
}

export default Connection