import { Button } from "@/components/ui/button"

function App() {
// GET
  //useEffect(() => {
  // fetch(`${API}/`)
  //.then(res => res.json())
  //.then(data => setMainState(data))

// POST
  // fetch(`${API}/`,
  // {
  // method: "POST",
  // headers: { "Content-Type": "application/json" }
  // body: JSON.stringify(newData)
  // })
  //.then(res => res.json())
  //.then(saved)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button variant={"destructive"}>Click me</Button>
    </div>
  )
}

export default App