import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProgramCardProps {
  title: string
  description: string
  features: string[]
  icon: ReactNode
}

export function ProgramCard({ title, description, features, icon }: ProgramCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="p-2 bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
              <span className="text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/programs" className="w-full">
          <Button variant="outline" className="w-full">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
