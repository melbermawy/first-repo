import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MovieCard } from "@/components/ui/movie-card"


function App() {
// POST
  // fetch(`${API}/`,
  // {
  // method: "POST",
  // headers: { "Content-Type": "application/json" }
  // body: JSON.stringify(newData)
  // })
  //.then(res => res.json())
  //.then(saved => setState(prev => [...prev, saved]))

  const [movies, setMovies] = useState([
   {
  id: 1,
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010
},
{
  id: 2,
  title: "Superman",
  director: "James Gunn",
  year: 2025
}
])
  const [title, setTitle] = useState("")
  const [director, setDirector] = useState("")
  const [year, setYear] = useState("")
  const API = "http://localhost:3001"

// useEffect(() => {
//   fetch(`${API}/movies`)
//   .then(res => res.json())
//   .then(data => 
//     setMovies(data))
//   }, [])



  return (
    <>
      <MovieCard 
      title="title"
      director="director"
      year={2010}
      />

    </>

  )
}

export default App