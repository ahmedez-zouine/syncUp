import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Mail, Heart, Calendar } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
interface WaitlistEntry 
{
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
    return <div>Error loading waitlist data</div>
  }

  const totalUsers = waitlistEntries?.length || 0
  const healthConditionsCount =
    waitlistEntries?.reduce(
      (acc, entry) => {
        entry.health_conditions?.forEach((condition: string | number) => {
          acc[condition] = (acc[condition] || 0) + 1
        })
        return acc
      },
      {} as Record<string, number>,
    ) || {}

  const featuresCount: Record<string, number> =
    waitlistEntries?.reduce(
      (acc, entry) => {
        entry.interested_features?.forEach((feature: string | number) => {
          acc[feature] = (acc[feature] || 0) + 1
        })
        return acc
      },
      {} as Record<string, number>,
    ) || {}

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-6">
        {/* <ThemeToggle /> */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mimaura Waitlist Dashboard</h1>
          <p className="text-gray-600">Manage and view your waitlist signups</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Signups</CardTitle>
              <Users className="h-4 w-4 text-rose-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-rose-600">{totalUsers}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Most Common Condition</CardTitle>
              <Heart className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pink-600">
                {Object.keys(healthConditionsCount).length > 0
                  ? Object.entries(healthConditionsCount).sort(([, a], [, b]) => (b as number) - (a as number))[0][0]
                  : "N/A"}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Feature Request</CardTitle>
              <Calendar className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                {Object.keys(featuresCount).length > 0
                  ? Object.entries(featuresCount).sort(([, a], [, b]) => b - a)[0][0]
                  : "N/A"}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Latest Signup</CardTitle>
              <Mail className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {waitlistEntries && waitlistEntries.length > 0
                  ? new Date(waitlistEntries[0].created_at).toLocaleDateString()
                  : "N/A"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Waitlist Entries */}
        <Card>
          <CardHeader>
            <CardTitle>Waitlist Entries</CardTitle>
            <CardDescription>All users who have signed up for Mimaura</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {waitlistEntries && waitlistEntries.length > 0 ? (
                waitlistEntries.map((entry: WaitlistEntry) => (
                  <div key={entry.id} className="border rounded-lg p-4 bg-white">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{entry.name}</h3>
                          <span className="text-sm text-gray-500">{entry.email}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Signed up on {new Date(entry.created_at).toLocaleDateString()} at{" "}
                          {new Date(entry.created_at).toLocaleTimeString()}
                        </p>

                        {entry.health_conditions && entry.health_conditions.length > 0 && (
                          <div className="mb-2">
                            <span className="text-sm font-medium text-gray-700 mr-2">Health Conditions:</span>
                            <div className="flex flex-wrap gap-1">
                              {entry.health_conditions.map((condition, index) => (
                                <Badge key={index} variant="secondary" className="bg-rose-100 text-rose-800">
                                  {condition}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {entry.interested_features && entry.interested_features.length > 0 && (
                          <div>
                            <span className="text-sm font-medium text-gray-700 mr-2">Interested Features:</span>
                            <div className="flex flex-wrap gap-1">
                              {entry.interested_features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="border-pink-200 text-pink-700">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No waitlist entries yet. Share your landing page to start collecting signups!
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Analytics Summary */}
        {waitlistEntries && waitlistEntries.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Health Conditions Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(healthConditionsCount)
                    .sort(([, a], [, b]) => (b as number) - (a as number))
                    .map(([condition, count]) => (
                      <div key={condition} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{condition}</span>
                        <Badge variant="secondary">{String(count)}</Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature Interest Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(featuresCount)
                    .sort(([, a], [, b]) => b - a)
                    .map(([feature, count]) => (
                      <div key={feature} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{feature}</span>
                        <Badge variant="outline">{String(count)}</Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
