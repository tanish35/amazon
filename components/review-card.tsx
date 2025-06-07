"use client"

import type React from "react"

import { useState } from "react"
import {
  Star,
  ThumbsUp,
  Flag,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Clock,
  MessageSquare,
  User,
  Zap,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ReviewFlags {
  detailedContent?: boolean
  naturalLanguage?: boolean
  specificDetails?: boolean
  timelyReview?: boolean
  verifiedPurchase?: boolean
  repeatedKeywords?: string[]
  shortContent?: boolean
  genericLanguage?: boolean
  suspiciousUsername?: boolean
  lowEngagement?: boolean
  starReviewMismatch?: boolean
  unverifiedPurchase?: boolean
  contradictoryContent?: boolean
  noHelpfulVotes?: boolean
  sameTimeCluster?: boolean
  templatedLanguage?: boolean
  balancedReview?: boolean
  specificIssues?: boolean
  constructiveFeedback?: boolean
  shortSentences?: boolean
  genericPhrases?: boolean
  honestCriticism?: boolean
  detailedFeedback?: boolean
  balancedPerspective?: boolean
  specificExperience?: boolean
  runOnSentence?: boolean
  excessivePositivity?: boolean
  recentCluster?: boolean
}

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
  flags: ReviewFlags
}

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [showFullContent, setShowFullContent] = useState(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-300"}`}
      />
    ))
  }

  const getClassificationBadge = (classification: string) => {
    switch (classification) {
      case "real":
        return (
          <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Real Review
          </Badge>
        )
      case "botted":
        return (
          <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-100">
            <XCircle className="w-3 h-3 mr-1" />
            Botted Review
          </Badge>
        )
      case "suspicious":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Suspicious
          </Badge>
        )
      default:
        return null
    }
  }

  const getDetectionReasons = (classification: string, flags: ReviewFlags) => {
    const reasons: Array<{ icon: React.ReactNode; text: string; type: "positive" | "negative" | "warning" }> = []

    if (classification === "real") {
      if (flags.detailedContent)
        reasons.push({
          icon: <MessageSquare className="w-4 h-4" />,
          text: "Detailed, comprehensive content",
          type: "positive",
        })
      if (flags.naturalLanguage)
        reasons.push({ icon: <User className="w-4 h-4" />, text: "Natural language patterns", type: "positive" })
      if (flags.specificDetails)
        reasons.push({
          icon: <Eye className="w-4 h-4" />,
          text: "Specific product details mentioned",
          type: "positive",
        })
      if (flags.verifiedPurchase)
        reasons.push({ icon: <Shield className="w-4 h-4" />, text: "Verified purchase", type: "positive" })
      if (flags.balancedReview)
        reasons.push({ icon: <CheckCircle className="w-4 h-4" />, text: "Balanced pros and cons", type: "positive" })
      if (flags.constructiveFeedback)
        reasons.push({
          icon: <MessageSquare className="w-4 h-4" />,
          text: "Constructive feedback provided",
          type: "positive",
        })
      if (flags.honestCriticism)
        reasons.push({ icon: <Eye className="w-4 h-4" />, text: "Honest criticism with specifics", type: "positive" })
    }

    if (classification === "botted") {
      if (flags.repeatedKeywords)
        reasons.push({
          icon: <AlertTriangle className="w-4 h-4" />,
          text: `Repeated keywords: ${flags.repeatedKeywords.join(", ")}`,
          type: "negative",
        })
      if (flags.shortContent)
        reasons.push({ icon: <MessageSquare className="w-4 h-4" />, text: "Unusually short content", type: "negative" })
      if (flags.genericLanguage)
        reasons.push({ icon: <User className="w-4 h-4" />, text: "Generic, templated language", type: "negative" })
      if (flags.suspiciousUsername)
        reasons.push({ icon: <User className="w-4 h-4" />, text: "Suspicious username pattern", type: "negative" })
      if (flags.lowEngagement)
        reasons.push({ icon: <ThumbsUp className="w-4 h-4" />, text: "Unusually low engagement", type: "negative" })
      if (flags.shortSentences)
        reasons.push({
          icon: <MessageSquare className="w-4 h-4" />,
          text: "Repetitive short sentences",
          type: "negative",
        })
      if (flags.genericPhrases)
        reasons.push({
          icon: <AlertTriangle className="w-4 h-4" />,
          text: "Generic promotional phrases",
          type: "negative",
        })
      if (flags.excessivePositivity)
        reasons.push({
          icon: <Zap className="w-4 h-4" />,
          text: "Excessive positivity without substance",
          type: "negative",
        })
      if (flags.runOnSentence)
        reasons.push({
          icon: <MessageSquare className="w-4 h-4" />,
          text: "Run-on sentences without punctuation",
          type: "negative",
        })
    }

    if (classification === "suspicious") {
      if (flags.starReviewMismatch)
        reasons.push({
          icon: <Star className="w-4 h-4" />,
          text: "Star rating doesn't match review tone",
          type: "warning",
        })
      if (flags.unverifiedPurchase)
        reasons.push({ icon: <Shield className="w-4 h-4" />, text: "Unverified purchase", type: "warning" })
      if (flags.contradictoryContent)
        reasons.push({ icon: <AlertTriangle className="w-4 h-4" />, text: "Contradictory content", type: "warning" })
      if (flags.sameTimeCluster)
        reasons.push({ icon: <Clock className="w-4 h-4" />, text: "Part of same-time review cluster", type: "warning" })
      if (flags.templatedLanguage)
        reasons.push({ icon: <User className="w-4 h-4" />, text: "Templated language patterns", type: "warning" })
      if (flags.recentCluster)
        reasons.push({ icon: <Clock className="w-4 h-4" />, text: "Part of recent review cluster", type: "warning" })
    }

    return reasons
  }

  const detectionReasons = getDetectionReasons(review.classification, review.flags)
  const truncatedContent = review.content.length > 200 ? review.content.substring(0, 200) + "..." : review.content

  return (
    <TooltipProvider>
      <Card className="shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{review.reviewer}</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center">{renderStars(review.rating)}</div>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                  {review.verified && (
                    <>
                      <span className="text-sm text-gray-500">•</span>
                      <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">
                        Verified Purchase
                      </Badge>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help">{getClassificationBadge(review.classification)}</div>
              </TooltipTrigger>
              <TooltipContent side="left" className="w-80 p-4">
                <div className="space-y-3">
                  <div className="font-semibold text-sm border-b pb-2">AI Detection Analysis</div>
                  <div className="space-y-2">
                    {detectionReasons.map((reason, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs">
                        <div
                          className={`mt-0.5 ${
                            reason.type === "positive"
                              ? "text-green-600"
                              : reason.type === "negative"
                                ? "text-red-600"
                                : "text-yellow-600"
                          }`}
                        >
                          {reason.icon}
                        </div>
                        <span className="flex-1">{reason.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-2 mt-3">
                    <div className="text-xs text-gray-600">
                      <strong>Confidence:</strong>{" "}
                      {review.classification === "real" ? "95%" : review.classification === "botted" ? "87%" : "72%"}
                    </div>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">{review.title}</h3>
            <p className="text-gray-700 leading-relaxed">{showFullContent ? review.content : truncatedContent}</p>
            {review.content.length > 200 && (
              <button
                onClick={() => setShowFullContent(!showFullContent)}
                className="text-blue-600 hover:text-blue-800 text-sm mt-2"
              >
                {showFullContent ? "Show less" : "Read more"}
              </button>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                <ThumbsUp className="w-4 h-4 mr-1" />
                Helpful ({review.helpful})
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                <Flag className="w-4 h-4 mr-1" />
                Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}
