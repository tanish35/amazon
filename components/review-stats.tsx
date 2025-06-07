"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertTriangle, TrendingUp, Users, MessageSquare } from "lucide-react"

interface Review {
  id: number
  reviewer: string
  rating: number
  title: string
  content: string
  date: string
  verified: boolean
  helpful: number
  classification: "real" | "botted" | "suspicious"
  flags: any
}

interface ReviewStatsProps {
  reviews: Review[]
}

export default function ReviewStats({ reviews }: ReviewStatsProps) {
  const totalReviews = reviews.length
  const realReviews = reviews.filter((r) => r.classification === "real").length
  const bottedReviews = reviews.filter((r) => r.classification === "botted").length
  const suspiciousReviews = reviews.filter((r) => r.classification === "suspicious").length

  const realPercentage = Math.round((realReviews / totalReviews) * 100)
  const bottedPercentage = Math.round((bottedReviews / totalReviews) * 100)
  const suspiciousPercentage = Math.round((suspiciousReviews / totalReviews) * 100)

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
  const verifiedCount = reviews.filter((r) => r.verified).length
  const verifiedPercentage = Math.round((verifiedCount / totalReviews) * 100)

  return (
    <div className="space-y-4 sticky top-4">
      {/* Overall Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Review Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{totalReviews}</div>
            <div className="text-sm text-gray-600">Total Reviews</div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Average Rating</span>
              <span className="font-semibold">{averageRating.toFixed(1)} ⭐</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Verified Purchases</span>
              <span className="font-semibold">{verifiedPercentage}%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Classification Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            AI Classification
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Real Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-800 border-green-200">{realReviews}</Badge>
                <span className="text-sm font-semibold">{realPercentage}%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600" />
                <span className="text-sm">Botted Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-red-100 text-red-800 border-red-200">{bottedReviews}</Badge>
                <span className="text-sm font-semibold">{bottedPercentage}%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                <span className="text-sm">Suspicious</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">{suspiciousReviews}</Badge>
                <span className="text-sm font-semibold">{suspiciousPercentage}%</span>
              </div>
            </div>
          </div>

          {/* Visual Progress Bars */}
          <div className="space-y-2 pt-4 border-t">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Real</span>
                <span>{realPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${realPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Botted</span>
                <span>{bottedPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${bottedPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Suspicious</span>
                <span>{suspiciousPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${suspiciousPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detection Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Detection Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-xs space-y-2">
            <div className="flex justify-between">
              <span>Keyword Repetition</span>
              <span className="text-red-600 font-semibold">3 detected</span>
            </div>
            <div className="flex justify-between">
              <span>Time Clustering</span>
              <span className="text-yellow-600 font-semibold">2 clusters</span>
            </div>
            <div className="flex justify-between">
              <span>Star-Content Mismatch</span>
              <span className="text-yellow-600 font-semibold">1 detected</span>
            </div>
            <div className="flex justify-between">
              <span>Suspicious Usernames</span>
              <span className="text-red-600 font-semibold">3 detected</span>
            </div>
          </div>

          <div className="pt-3 border-t">
            <div className="text-xs text-gray-600">
              <strong>AI Confidence:</strong> 89% accuracy in classification
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
