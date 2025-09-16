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

type Movie = {
  id: number,
  title: string,
  director: string,
  year: number
}
interface NewMovie {
  title: string;
  director: string;
  year: string;
}
function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [title, setTitle] = useState("")
  const [director, setDirector] = useState("")
  const [year, setYear] = useState("")
  const API = "http://localhost:3001"

useEffect(() => {
fetch(`${API}/movies`)
.then(res => res.json())
.then(data => {
setMovies(data);
console.log("fetched data: ", data)})
}, [])



function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const newData: NewMovie = { title: title.trim(), director: director.trim(), year: year.trim() };
  fetch(`${API}/movies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  })
    .then((res) => res.json())
    .then((saved: Movie) => {
      setMovies((prev) => [...prev, saved]);
      setTitle("");
      setDirector("");
      setYear("");
    });
}

interface HandleDelete {
  (id: number): void;
}

const handleDelete: HandleDelete = (id) => {
  fetch(`${API}/messages/${id}`, { method: "DELETE"})
    .then(res => setMovies((prev: Movie[]) => prev.filter((m: Movie) => m.id !== id)));
};

  return (
    <div className="bg-gray-200 min-h-screen">
      <h1><strong>Log Your Favorite Movies Here!</strong></h1>
    <form onSubmit={handleSubmit} className="gap-y-2 space-y-4 mt-4">
      <Input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Movie Title"
      />
      <Input
      value={director}
      onChange={(e) => setDirector(e.target.value)}
      placeholder="Director"
      />
      <Input
      value={year}
      onChange={(e) => setYear(e.target.value)}
      placeholder="Release Year"
      />
      <Button type="submit">Add</Button>
    </form>
    <div className="flex gap-2 p-8 text-center">
     {
        movies.map(m => (
          <MovieCard
          key={m.id}
          title={m.title}
          director={m.director}
          year={m.year}
          id={m.id}
          onDeleteClick={handleDelete}
          />
        ))
      }
    </div>
      </div>
  )
}

export default App