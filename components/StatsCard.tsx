import { ReactNode } from 'react'

interface StatsCardProps {
  number: string
  label: string
  icon: ReactNode
}

export default function StatsCard({ number, label, icon }: StatsCardProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <div className="text-white">
          {icon}
        </div>
      </div>
      
      <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        {number}
      </div>
      
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </div>
  )
}
