import React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
interface MovieCardProps {
title: string
director: string
year: number | string
}
export function MovieCard({title, director, year}: MovieCardProps) {

return(
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          yup it's a movie
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span>
            {director} - {year}
        </span>
      </CardContent>
    </Card>
)
}

