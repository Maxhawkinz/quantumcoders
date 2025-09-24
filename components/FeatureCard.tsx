import { ReactNode } from 'react'
interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
}

export default function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="card p-8 text-center group hover:scale-105 transition-transform duration-300">
      <div className={`w-20 h-20 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
