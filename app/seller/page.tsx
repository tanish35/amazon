import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TrustScoreMeter from "@/components/trust-score-meter"

export default function SellerPage() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-orange-400 text-orange-400"
            : i < rating
              ? "fill-orange-200 text-orange-400"
              : "fill-gray-200 text-gray-300"
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Leclerc Technologies Private Limited</h1>
                  <p className="text-gray-600 mb-3">Monaco</p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">{renderStars(3.5)}</div>
                    <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                      65% positive in the last 12 months (108 ratings)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-2">
                    Do you have a question for Leclerc Technologies Private Limited?
                  </p>
                  <Button variant="outline" className="bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-500">
                    Ask a question
                  </Button>
                </div>
              </div>

              {/* Shipping Performance */}
              <Card className="mb-6">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Shipping performance</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>30 days</span>
                      <button className="text-blue-600 hover:text-blue-800">What's this?</button>
                      <button className="text-blue-600 hover:text-blue-800">Give us feedback.</button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Fulfilled by seller</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Orders</span>
                          <span className="text-gray-600">Shipped on time</span>
                        </div>
                        <div className="flex justify-between">
                          <span>No orders</span>
                          <span>No shipments</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Fulfilled by Amazon</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Orders</span>
                          <span className="text-gray-600">Shipped on time</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-2xl font-bold">1,000+</span>
                          <span>Same as Amazon Prime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p className="text-gray-700 mb-6">
                Leclerc Technologies Private Limited is committed to providing each customer with the highest standard
                of customer service.
              </p>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-lg shadow-sm">
              <Tabs defaultValue="reviews" className="w-full">
              <TabsList className="flex flex-wrap w-full h-auto p-0 bg-transparent border-b rounded-none gap-2">
                  <TabsTrigger
                    value="reviews"
                    className="border-b-2 border-transparent data-[state=active]:border-orange-500 rounded-none py-3"
                  >
                    Reviews
                  </TabsTrigger>
                  <TabsTrigger
                    value="returns"
                    className="border-b-2 border-transparent data-[state=active]:border-orange-500 rounded-none py-3"
                  >
                    Returns, warranties and refunds
                  </TabsTrigger>
                  <TabsTrigger
                    value="shipping"
                    className="border-b-2 border-transparent data-[state=active]:border-orange-500 rounded-none py-3"
                  >
                    Shipping
                  </TabsTrigger>
                  <TabsTrigger
                    value="policies"
                    className="border-b-2 border-transparent data-[state=active]:border-orange-500 rounded-none py-3"
                  >
                    Policies
                  </TabsTrigger>
                  <TabsTrigger
                    value="help"
                    className="border-b-2 border-transparent data-[state=active]:border-orange-500 rounded-none py-3"
                  >
                    Help
                  </TabsTrigger>
                  <TabsTrigger
                    value="giftwrap"
                    className="border-b-2 border-transparent data-[state=active]:border-orange-500 rounded-none py-3"
                  >
                    Gift Wrap
                  </TabsTrigger>
                  <TabsTrigger
                    value="products"
                    className="border-b-2 border-transparent data-[state=active]:border-orange-500 rounded-none py-3"
                  >
                    Products
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="reviews" className="p-6">
                  <div className="space-y-6">
                    {/* Review 1 */}
                    <div className="border-b pb-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center">{renderStars(5)}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">"Good"</h4>
                          <p className="text-gray-600 text-sm mb-2">By Mannu goswami on 7 June, 2025.</p>
                        </div>
                      </div>
                    </div>

                    {/* Review 2 */}
                    <div className="border-b pb-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center">{renderStars(1)}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">
                            "It has not reached us yet.... Long been waiting for fan. You know it is basic need."
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">By Shilpa on 6 June, 2025.</p>
                          <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
                            <p className="text-sm">
                              <strong>Message from Amazon:</strong> This item was fulfilled by Amazon, and we take
                              responsibility for this fulfillment experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Feedback Table */}
                    <div className="mt-8">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 px-4"></th>
                              <th className="text-center py-2 px-4 font-semibold">30 days</th>
                              <th className="text-center py-2 px-4 font-semibold">90 days</th>
                              <th className="text-center py-2 px-4 font-semibold">12 months</th>
                              <th className="text-center py-2 px-4 font-semibold">Lifetime</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 px-4 font-medium">Positive</td>
                              <td className="text-center py-2 px-4">56%</td>
                              <td className="text-center py-2 px-4">59%</td>
                              <td className="text-center py-2 px-4">65%</td>
                              <td className="text-center py-2 px-4">87%</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-4 font-medium">Neutral</td>
                              <td className="text-center py-2 px-4">0%</td>
                              <td className="text-center py-2 px-4">2%</td>
                              <td className="text-center py-2 px-4">3%</td>
                              <td className="text-center py-2 px-4">2%</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 font-medium">Negative</td>
                              <td className="text-center py-2 px-4">44%</td>
                              <td className="text-center py-2 px-4">39%</td>
                              <td className="text-center py-2 px-4">32%</td>
                              <td className="text-center py-2 px-4">12%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="returns" className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Returns, Warranties and Refunds</h3>
                    <p className="text-gray-600">
                      Information about return policies, warranties, and refund procedures will be displayed here.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="shipping" className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Shipping Information</h3>
                    <p className="text-gray-600">Detailed shipping information and policies will be displayed here.</p>
                  </div>
                </TabsContent>

                <TabsContent value="policies" className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Seller Policies</h3>
                    <p className="text-gray-600">Seller policies and terms of service will be displayed here.</p>
                  </div>
                </TabsContent>

                <TabsContent value="help" className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Help & Support</h3>
                    <p className="text-gray-600">Help and support information will be displayed here.</p>
                  </div>
                </TabsContent>

                <TabsContent value="giftwrap" className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Gift Wrap Services</h3>
                    <p className="text-gray-600">Gift wrapping options and services will be displayed here.</p>
                  </div>
                </TabsContent>

                <TabsContent value="products" className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Products</h3>
                    <p className="text-gray-600">List of products from this seller will be displayed here.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Trust Score Sidebar */}
          <div className="lg:col-span-1">
            <TrustScoreMeter />
          </div>
        </div>
      </div>
    </div>
  )
}
