import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  title: string
}

export function TestimonialCard({ quote, author, title }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <p className="text-gray-500 italic">"{quote}"</p>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
