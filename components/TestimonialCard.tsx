import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

export default function TestimonialCard({ name, role, content, rating, avatar }: TestimonialCardProps) {
  return (
    <div className="card p-8">
      <div className="flex items-center mb-6">
        <div className="text-4xl mr-4">
          {avatar}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed italic">
        "{content}"
      </p>
    </div>
  )
}
