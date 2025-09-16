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
id: number
title: string
director: string
year: number | string
}
interface MoreCardProps {
  onDeleteClick: () => void;
}
export function MovieCard({title, director, year}: MovieCardProps) {

return(
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardContent className="gap-y-4">
        <Button className="gap-y-4">Delete</Button>
        </CardContent>
      </CardHeader>
      <CardContent>
        <span>
            {director} - {year}
        </span>
      </CardContent>
    </Card>
)
}

