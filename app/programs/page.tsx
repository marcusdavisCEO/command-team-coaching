import Link from "next/link"
import { ArrowRight, BarChart3, BookOpen, CheckCircle, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Training Programs</h1>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive leadership development programs designed to transform middle managers into confident,
                effective leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="mas" className="space-y-8">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
              <TabsTrigger value="mas">Managerial Action Sequence</TabsTrigger>
              <TabsTrigger value="self-leadership">Self-Leadership</TabsTrigger>
            </TabsList>

            <TabsContent value="mas" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Managerial Action Sequence (MAS)</h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    The Managerial Action Sequence (MAS) is our flagship program that provides middle managers with a
                    structured approach to leadership. This practical framework breaks down the complex role of
                    management into clear, actionable steps that can be consistently applied to drive team performance.
                  </p>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    MAS equips managers with the tools to effectively communicate, delegate, monitor progress, provide
                    feedback, and develop their team members. By mastering this sequence, managers create predictability
                    and clarity that builds trust and enhances execution.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Managerial Action Sequence training"
                    className="rounded-lg object-cover"
                    width={500}
                    height={400}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <div className="p-2 bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-slate-800" />
                    </div>
                    <CardTitle>Program Structure</CardTitle>
                    <CardDescription>A comprehensive approach to management development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">6-week intensive program</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Combination of workshops and coaching</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Practical application exercises</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Peer learning and feedback</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Progress tracking and assessment</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="p-2 bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <BarChart3 className="h-6 w-6 text-slate-800" />
                    </div>
                    <CardTitle>Key Components</CardTitle>
                    <CardDescription>Essential elements of the MAS framework</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Communicating Updates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Team Briefing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Situational Reviews</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Performance Management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Strategic Planning</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="p-2 bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-slate-800" />
                    </div>
                    <CardTitle>Outcomes</CardTitle>
                    <CardDescription>The impact of MAS on leadership effectiveness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Improved team communication</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Enhanced execution and follow-through</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Increased team accountability</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">More effective delegation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Stronger trust within teams</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="self-leadership" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Self-Leadership Training</h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Our Self-Leadership program is built on the principle that effective leadership of others begins
                    with leading oneself. This program helps middle managers develop the personal mastery, emotional
                    intelligence, and self-awareness needed to show up as confident, consistent leaders.
                  </p>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Through this training, managers learn to manage their own behaviors, emotions, and time effectively,
                    creating a foundation of personal integrity that inspires trust and respect from their teams.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Self-Leadership training"
                    className="rounded-lg object-cover"
                    width={500}
                    height={400}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <div className="p-2 bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-slate-800" />
                    </div>
                    <CardTitle>Program Structure</CardTitle>
                    <CardDescription>A transformative approach to personal leadership</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">8-week development program</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Individual assessment and coaching</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Reflective practice exercises</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Accountability partnerships</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Personal development planning</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="p-2 bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <BarChart3 className="h-6 w-6 text-slate-800" />
                    </div>
                    <CardTitle>Key Components</CardTitle>
                    <CardDescription>Essential elements of self-leadership</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Emotional Intelligence</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Decision Making</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Time Management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Personal Accountability</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Resilience Building</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="p-2 bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-slate-800" />
                    </div>
                    <CardTitle>Outcomes</CardTitle>
                    <CardDescription>The impact of self-leadership on effectiveness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Increased self-awareness</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Improved emotional regulation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Enhanced personal productivity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Stronger personal integrity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                        <span className="text-gray-500">Greater leadership presence</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Programs Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Custom Programs</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                We understand that every organization has unique challenges and objectives. That's why we offer
                customized training programs that address your specific leadership development needs.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our team works closely with you to assess your current leadership landscape, identify key areas for
                improvement, and design a tailored program that aligns with your strategic goals.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our customization process includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                    <span className="text-gray-500">Organizational assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                    <span className="text-gray-500">Stakeholder interviews</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                    <span className="text-gray-500">Program design and development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                    <span className="text-gray-500">Implementation planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                    <span className="text-gray-500">Measurement and evaluation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-slate-800 hover:bg-slate-700">
                    Discuss Custom Training
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Custom leadership program"
                className="rounded-lg object-cover"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Middle Management?
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss how our training programs can empower your managers and strengthen your
                organization.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-200">
                  Request Training
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
