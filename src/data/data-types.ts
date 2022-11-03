type MongoRequest = {
    collection: string,
    database: string,
    dataSource: "Cluster",
    filter: any
}

type Planet = {
    _id: string,
    planeta: {
        type: "uri",
        value: string
    },
    nombre: {
        type: "literal",
        "xml:lang": "en",
        value: string
    },
    tempMedia: {
        type: "typed-literal",
        datatype: "http://dbpedia.org/datatype/kelvin",
        value: number
    }

}

export type {MongoRequest, Planet}