import { useQuery } from "@tanstack/react-query";
import { useMongoContext } from "../context/MongoContext";

const usePlanet = (name: string) => {
    const {planetas} = useMongoContext()

    const fetchFunction = async () => {
        if(!planetas){
            return []
        }

        return await planetas.find({"nombre.value": name})
    }

    return useQuery([name], fetchFunction, {
        cacheTime: Infinity,
        staleTime: Infinity,
        retryOnMount: false,
        retry: false,
        enabled: Boolean(planetas)
    })
}

export {usePlanet}