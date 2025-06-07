"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Shield, AlertTriangle, CheckCircle, XCircle, Info, TrendingUp, Package, RotateCcw } from "lucide-react"

interface QualityFlag {
  name: string
  description: string
  status: "pass" | "warning" | "fail"
  value: number
  threshold: number
  icon: React.ReactNode
}

export default function TrustScoreMeter() {
  const [isHovered, setIsHovered] = useState(false)

  const trustScore = 97

  const qualityFlags: QualityFlag[] = [
    {
      name: "Manufacturing Defect Risk",
      description: "return_rate > 0.15 & trend > 0.1",
      status: "pass",
      value: 0.08,
      threshold: 0.15,
      icon: <Package className="w-4 h-4" />,
    },
    {
      name: "Counterfeit Suspected",
      description: "return_rate > 0.2 & orders > 20",
      status: "pass",
      value: 0.08,
      threshold: 0.2,
      icon: <Shield className="w-4 h-4" />,
    },
    {
      name: "Immediate Return Pattern",
      description: "avg_days < 3 & return_rate > 0.1",
      status: "warning",
      value: 0.12,
      threshold: 0.1,
      icon: <RotateCcw className="w-4 h-4" />,
    },
    {
      name: "Deteriorating Quality",
      description: "trend > 0.2",
      status: "pass",
      value: 0.05,
      threshold: 0.2,
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      name: "Chronic Quality Issues",
      description: "seller_return_rate > 0.25",
      status: "pass",
      value: 0.18,
      threshold: 0.25,
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    {
      name: "Current Seller Issue",
      description: "recent_ratio > 0.3 & diff > 0.1",
      status: "pass",
      value: 0.15,
      threshold: 0.3,
      icon: <Info className="w-4 h-4" />,
    },
    {
      name: "New Seller Risk",
      description: "products <= 5 & return_rate > 0.2",
      status: "pass",
      value: 0.08,
      threshold: 0.2,
      icon: <CheckCircle className="w-4 h-4" />,
    },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBackground = (score: number) => {
    if (score >= 90) return "from-green-500 to-green-600"
    if (score >= 70) return "from-yellow-500 to-yellow-600"
    return "from-red-500 to-red-600"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      case "fail":
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Info className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <TooltipProvider>
      <Card className="sticky top-4">
        <CardHeader className="text-center pb-4">
          <CardTitle className="flex items-center justify-center gap-2">
            <Shield className="w-5 h-5" />
            Trust Score
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="relative cursor-help"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Circular Progress */}
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-200"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={`${2 * Math.PI * 50 * (1 - trustScore / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" className="stop-green-500" />
                        <stop offset="100%" className="stop-green-600" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Score text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${getScoreColor(trustScore)}`}>{trustScore}%</div>
                      <div className="text-xs text-gray-500 mt-1">Excellent</div>
                    </div>
                  </div>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent side="left" className="w-80 p-4">
              <div className="space-y-3">
                <div className="font-semibold text-sm border-b pb-2">Trust Score Breakdown</div>
                <div className="text-xs text-gray-600 mb-3">
                  Based on AI analysis of returns, policies, and seller behavior patterns
                </div>

                <div className="space-y-2">
                  {qualityFlags.map((flag, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 flex-1">
                        {flag.icon}
                        <span className="truncate">{flag.name}</span>
                        {getStatusIcon(flag.status)}
                      </div>
                      <div className="text-right ml-2">
                        <div className="font-mono">{(flag.value * 100).toFixed(1)}%</div>
                        <div className="text-gray-500">/{(flag.threshold * 100).toFixed(0)}%</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-2 mt-3">
                  <div className="text-xs text-gray-600">
                    <strong>Score Calculation:</strong> Based on weighted analysis of return patterns, seller history,
                    product quality indicators, and fulfillment performance.
                  </div>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>

          <div className="text-center space-y-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verified Seller
            </Badge>

            <div className="text-xs text-gray-600">Score derived from AI analysis of:</div>
            <div className="text-xs text-gray-500 space-y-1">
              <div>• Return patterns & rates</div>
              <div>• Product quality indicators</div>
              <div>• Seller performance history</div>
              <div>• Customer feedback analysis</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-medium text-gray-700">Quality Metrics</div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Return Rate</span>
                <span className="text-green-600">8.2%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Avg. Return Days</span>
                <span className="text-green-600">12.5</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Quality Trend</span>
                <span className="text-green-600">Improving</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}
