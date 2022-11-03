import React, { createContext, useContext, useEffect, useState } from "react"
import { App, Credentials } from "realm-web"
import { Planet } from "../data/data-types"

type CollectionType =
  | globalThis.Realm.Services.MongoDB.MongoDBCollection<Planet>
  | undefined

const app = new App({ id: "data-fnbyi" })

const MongoContext = createContext<{
  planetas: CollectionType
}>({
  planetas: undefined,
})

const MongoProvider = ({ children }: { children: React.ReactNode }) => {
  const [planetas, setPlanetas] = useState<CollectionType>(undefined)

  useEffect(() => {
    const apiKey =
      process.env.MONGO_API_KEY ?? process.env.REACT_APP_MONGO_API_KEY
    if (!apiKey) {
      return
    }
    app.logIn(Credentials.apiKey(apiKey)).then(() => {
      const mongo = app.currentUser?.mongoClient("Cluster")
      setPlanetas(mongo?.db("misia").collection<Planet>("planetas"))
    })
  }, [])

  return (
    <MongoContext.Provider value={{ planetas }}>
      {children}
    </MongoContext.Provider>
  )
}

const useMongoContext = () => {
  return useContext(MongoContext)
}

export { MongoProvider, useMongoContext }
