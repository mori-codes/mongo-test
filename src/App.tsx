import { Text } from "@mantine/core"
import { usePlanet } from "./data/usePlanet"
function App() {
  const { data } = usePlanet("Moon")
  console.log(data)

  return <Text>Hola!</Text>
}

export default App
