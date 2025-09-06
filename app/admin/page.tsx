import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Mail, Heart, Calendar, ArrowUpRight, Search, Brain, Shield, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface WaitlistEntry {
  id: string
  created_at: string
  email: string
  name: string
  health_conditions: string[]
  interested_features: string[]
}

export default async function AdminPage() {
  const supabase = await createClient()

  const { data: waitlistEntries, error } = await supabase
    .from("waitlist")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching waitlist:", error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <div className="text-rose-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Data</h3>
            <p className="text-gray-600 mb-4">Unable to fetch waitlist entries. Please check your database connection.</p>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const totalUsers = waitlistEntries?.length || 0
  const healthConditionsCount =
    waitlistEntries?.reduce(
      (acc, entry) => {
        entry.health_conditions?.forEach((condition) => {
          acc[condition] = (acc[condition] || 0) + 1
        })
        return acc
      },
      {} as Record<string, number>,
    ) || {}

  const featuresCount: Record<string, number> =
    waitlistEntries?.reduce(
      (acc, entry) => {
        entry.interested_features?.forEach((feature) => {
          acc[feature] = (acc[feature] || 0) + 1
        })
        return acc
      },
      {} as Record<string, number>,
    ) || {}

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-6 animate-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            SyncUp Waitlist Dashboard
            <Badge variant="outline" className="ml-3 bg-white border-rose-200 text-rose-700">Admin</Badge>
          </h1>
          <p className="text-gray-600">Manage and view your waitlist signups</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="overflow-hidden border-rose-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-rose-50 to-rose-100/50">
              <CardTitle className="text-sm font-medium">Total Signups</CardTitle>
              <Users className="h-4 w-4 text-rose-600" />
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-rose-600">{totalUsers}</div>
              <p className="text-xs text-gray-500 mt-1">Waitlist members</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-pink-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-pink-50 to-pink-100/50">
              <CardTitle className="text-sm font-medium">Most Common Condition</CardTitle>
              <Heart className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-pink-600 truncate">
                {Object.keys(healthConditionsCount).length > 0
                  ? Object.entries(healthConditionsCount).sort(([, a], [, b]) => b - a)[0][0]
                  : "N/A"}
              </div>
              <p className="text-xs text-gray-500 mt-1">Reported by users</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-purple-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-purple-50 to-purple-100/50">
              <CardTitle className="text-sm font-medium">Top Feature Request</CardTitle>
              <Calendar className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600 truncate">
                {Object.keys(featuresCount).length > 0
                  ? Object.entries(featuresCount).sort(([, a], [, b]) => b - a)[0][0]
                  : "N/A"}
              </div>
              <p className="text-xs text-gray-500 mt-1">Most requested</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-blue-50 to-blue-100/50">
              <CardTitle className="text-sm font-medium">Latest Signup</CardTitle>
              <Mail className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">
                {waitlistEntries && waitlistEntries.length > 0
                  ? new Date(waitlistEntries[0].created_at).toLocaleDateString()
                  : "N/A"}
              </div>
              <p className="text-xs text-gray-500 mt-1">Most recent</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search by name or email..." 
              className="pl-10 border-gray-200 focus:border-rose-400 focus:ring-rose-400"
            />
          </div>
        </div>

        {/* Waitlist Entries */}
        <Card className="border-gray-200 shadow-sm animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <CardHeader className="bg-white border-b border-gray-100">
            <CardTitle>Waitlist Entries</CardTitle>
            <CardDescription>All users who have signed up for SyncUp</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {waitlistEntries && waitlistEntries.length > 0 ? (
                waitlistEntries.map((entry: WaitlistEntry, index: number) => (
                  <div 
                    key={entry.id} 
                    className="p-4 hover:bg-gray-50 transition-colors duration-150 animate-fade-in" 
                    style={{ animationDelay: `${0.1 * (index % 10)}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{entry.name || "Anonymous User"}</h3>
                          <span className="text-sm text-gray-500">{entry.email}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 flex items-center">
                          <Calendar className="inline h-3 w-3 mr-1 text-gray-400" />
                          {new Date(entry.created_at).toLocaleDateString()} at{" "}
                          {new Date(entry.created_at).toLocaleTimeString()}
                        </p>

                        {entry.health_conditions && entry.health_conditions.length > 0 && (
                          <div className="mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                            <span className="text-sm font-medium text-gray-700 mr-2">Health Conditions:</span>
                            <div className="flex flex-wrap gap-1">
                              {entry.health_conditions.map((condition, index) => (
                                <Badge 
                                  key={index} 
                                  variant="secondary" 
                                  className="bg-rose-100 text-rose-800 hover:bg-rose-200 transition-colors duration-200"
                                >
                                  {condition}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {entry.interested_features && entry.interested_features.length > 0 && (
                          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            <span className="text-sm font-medium text-gray-700 mr-2">Interested Features:</span>
                            <div className="flex flex-wrap gap-1">
                              {entry.interested_features.map((feature, index) => (
                                <Badge 
                                  key={index} 
                                  variant="outline" 
                                  className="border-pink-200 text-pink-700 hover:bg-pink-50 transition-colors duration-200"
                                >
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="shrink-0 hidden md:flex items-center gap-1 hover:bg-rose-50 border-rose-200 text-rose-700"
                      >
                        Details
                        <ArrowUpRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 px-4">
                  <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No waitlist entries yet</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-6">
                    Share your landing page to start collecting signups for SyncUp!
                  </p>
                  <Button variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50">
                    View Landing Page
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Analytics Summary */}
        {waitlistEntries && waitlistEntries.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-rose-50 to-transparent">
                <CardTitle className="text-gray-900">Health Conditions Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {Object.entries(healthConditionsCount)
                    .sort(([, a], [, b]) => b - a)
                    .map(([condition, count], index) => (
                      <div key={condition} className="flex items-center">
                        <div className="w-full bg-gray-100 rounded-full h-2.5 mr-2">
                          <div 
                            className="bg-rose-400 h-2.5 rounded-full animate-width-expand" 
                            style={{ 
                              width: `${(count / totalUsers) * 100}%`,
                              animationDelay: `${0.1 * index}s`
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <span className="text-sm text-gray-700 flex-1">{condition}</span>
                          <Badge variant="secondary" className="ml-2 bg-white border-rose-200 text-rose-700">{count}</Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-pink-50 to-transparent">
                <CardTitle className="text-gray-900">Feature Interest Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {Object.entries(featuresCount)
                    .sort(([, a], [, b]) => b - a)
                    .map(([feature, count], index) => {
                      // Assign appropriate icons based on feature name
                      let FeatureIcon: React.ComponentType = () => null;
                      if (feature.toLowerCase().includes('track')) {
                        FeatureIcon = Calendar;
                      } else if (feature.toLowerCase().includes('mood') || feature.toLowerCase().includes('mental')) {
                        FeatureIcon = Brain;
                      } else if (feature.toLowerCase().includes('health') || feature.toLowerCase().includes('condition')) {
                        FeatureIcon = Heart;
                      } else if (feature.toLowerCase().includes('community') || feature.toLowerCase().includes('support')) {
                        FeatureIcon = Users;
                      } else if (feature.toLowerCase().includes('privacy') || feature.toLowerCase().includes('secure')) {
                        FeatureIcon = Shield;
                      } else {
                        FeatureIcon = Sparkles;
                      }
                      
                      return (
                        <div 
                          key={feature} 
                          className="flex items-center p-2 hover:bg-pink-50/30 rounded-lg transition-all duration-300 animate-fade-in" 
                          style={{ animationDelay: `${0.15 * index}s` }}
                        >
                          <div className="mr-3 text-pink-600 bg-pink-100 p-1.5 rounded-full animate-scale-in" style={{ animationDelay: `${0.2 * index}s` }}>
                            <FeatureIcon className="h-4 w-4" />
                          </div>
                          <div className="w-full">
                            <div className="flex justify-between items-center w-full mb-1">
                              <span className="text-sm font-medium text-gray-700 flex-1">{feature}</span>
                              <Badge 
                                variant="outline" 
                                className="ml-2 border-pink-200 text-pink-700 bg-white animate-scale-in"
                                style={{ animationDelay: `${0.25 * index}s` }}
                              >
                                {count}
                              </Badge>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3 relative overflow-hidden">
                              <div 
                                className="bg-gradient-to-r from-pink-400 to-rose-500 h-3 rounded-full animate-width-expand" 
                                style={{ 
                                  width: `${(count / totalUsers) * 100}%`,
                                  animationDelay: `${0.3 * index}s`
                                }}
                              >
                                {/* Add subtle pulse effect */}
                                <div className="absolute inset-0 bg-white opacity-10 animate-pulse"></div>
                              </div>
                            </div>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">Interest level</span>
                              <span className="text-xs font-medium text-pink-700">{Math.round((count / totalUsers) * 100)}%</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                
                {/* Add a summary card at the bottom */}
                <div className="mt-6 border-t border-gray-100 pt-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                  <div className="bg-pink-50/50 rounded-lg p-3 flex items-center">
                    <div className="bg-white shadow-sm rounded-full p-2 mr-3">
                      <Sparkles className="h-5 w-5 text-pink-600 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Feature Insight</h4>
                      <p className="text-xs text-gray-600">
                        "{Object.entries(featuresCount).sort(([, a], [, b]) => b - a)[0][0]}" is the most requested feature, 
                        with {Math.round((Object.entries(featuresCount).sort(([, a], [, b]) => (b as number) - (a as number))[0][1] / totalUsers) * 100)}% interest.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
