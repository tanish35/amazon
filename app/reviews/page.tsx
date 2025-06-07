import { ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import ReviewCard from "@/components/review-card"
import ReviewStats from "@/components/review-stats"

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

export default function ReviewsPage() {

    
  const reviews = [
    {
      id: 1,
      reviewer: "Sarah Johnson",
      rating: 5,
      title: "Absolutely love this ceiling fan!",
      content:
        "I purchased this Leclerc fan 3 months ago and it has exceeded my expectations. The remote control works perfectly, the LED lighting is bright and adjustable, and the power consumption is remarkably low. Installation was straightforward with clear instructions. The build quality feels premium and it operates silently even at high speeds. Highly recommend for anyone looking for an energy-efficient ceiling fan.",
      date: "2025-01-15",
      verified: true,
      helpful: 23,
      classification: "real",
      flags: {
        detailedContent: true,
        naturalLanguage: true,
        specificDetails: true,
        timelyReview: true,
        verifiedPurchase: true,
      },
    },
    {
      id: 2,
      reviewer: "RajeshK123",
      rating: 5,
      title: "Good product",
      content: "Good product. Fast delivery. Good quality. Recommended.",
      date: "2025-01-10",
      verified: true,
      helpful: 2,
      classification: "botted",
      flags: {
        repeatedKeywords: ["good", "good", "good"],
        shortContent: true,
        genericLanguage: true,
        suspiciousUsername: true,
        lowEngagement: true,
      },
    },
    {
      id: 3,
      reviewer: "Mike Chen",
      rating: 1,
      title: "Terrible experience",
      content:
        "This fan is absolutely amazing! The quality is outstanding and I love everything about it. The remote works great and the LED lights are perfect. Installation was super easy and it looks fantastic in my room. Definitely buying more!",
      date: "2025-01-08",
      verified: false,
      helpful: 0,
      classification: "suspicious",
      flags: {
        starReviewMismatch: true,
        unverifiedPurchase: true,
        contradictoryContent: true,
        noHelpfulVotes: true,
      },
    },
    {
      id: 4,
      reviewer: "ProductTester2024",
      rating: 5,
      title: "Excellent fan",
      content:
        "Excellent fan with great features. The BLDC motor is very efficient and the remote control functionality is smooth. LED lights provide good illumination. Overall satisfied with the purchase.",
      date: "2025-01-10",
      verified: true,
      helpful: 1,
      classification: "suspicious",
      flags: {
        suspiciousUsername: true,
        sameTimeCluster: true,
        templatedLanguage: true,
        lowEngagement: true,
      },
    },
    {
      id: 5,
      reviewer: "Jennifer Williams",
      rating: 4,
      title: "Good fan but minor issues",
      content:
        "The fan works well overall and the energy efficiency is as advertised. However, I noticed the remote occasionally doesn't respond on the first press, and the LED light could be a bit brighter. The installation manual could be clearer about the wiring. Despite these minor issues, it's a decent purchase for the price point.",
      date: "2024-12-28",
      verified: true,
      helpful: 18,
      classification: "real",
      flags: {
        balancedReview: true,
        specificIssues: true,
        constructiveFeedback: true,
        naturalLanguage: true,
        verifiedPurchase: true,
      },
    },
    {
      id: 6,
      reviewer: "fan_lover_2024",
      rating: 5,
      title: "Best fan ever",
      content: "Best fan ever. Amazing quality. Fast shipping. Great seller. Highly recommended. Will buy again.",
      date: "2025-01-10",
      verified: true,
      helpful: 0,
      classification: "botted",
      flags: {
        repeatedKeywords: ["best", "great", "amazing"],
        shortSentences: true,
        genericPhrases: true,
        sameTimeCluster: true,
        suspiciousUsername: true,
      },
    },
    {
      id: 7,
      reviewer: "David Thompson",
      rating: 3,
      title: "Average performance",
      content:
        "The fan is okay but not exceptional. The remote works fine most of the time, though there's occasional lag. The LED lights are adequate but not as bright as I expected. Installation took longer than anticipated due to unclear instructions. It does the job but there are probably better options available at this price range.",
      date: "2024-11-15",
      verified: true,
      helpful: 12,
      classification: "real",
      flags: {
        honestCriticism: true,
        detailedFeedback: true,
        balancedPerspective: true,
        specificExperience: true,
        verifiedPurchase: true,
      },
    },
    {
      id: 8,
      reviewer: "QuickBuyer99",
      rating: 5,
      title: "Perfect",
      content:
        "Perfect product perfect delivery perfect everything thank you so much will definitely recommend to everyone amazing experience",
      date: "2025-01-11",
      verified: false,
      helpful: 0,
      classification: "botted",
      flags: {
        repeatedKeywords: ["perfect", "perfect", "perfect"],
        runOnSentence: true,
        excessivePositivity: true,
        unverifiedPurchase: true,
        recentCluster: true,
      },
    },
  ] as Review[]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Seller
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Reviews - Leclerc Fan</h1>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex-1 min-w-64">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Search reviews..." className="pl-10" />
                  </div>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Reviews</SelectItem>
                    <SelectItem value="real">Real Reviews</SelectItem>
                    <SelectItem value="botted">Botted Reviews</SelectItem>
                    <SelectItem value="suspicious">Suspicious Reviews</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="rating-high">Highest Rating</SelectItem>
                    <SelectItem value="rating-low">Lowest Rating</SelectItem>
                    <SelectItem value="helpful">Most Helpful</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline">Load More Reviews</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ReviewStats reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  )
}
