import Link from "next/link"
import { ArrowRight, Award, BarChart3, Building, CheckCircle, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/testimonial-card"
import { ProgramCard } from "@/components/program-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Empowering Middle Managers to Lead with Confidence
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bridging the gap between upper leadership and frontline teams through transformative coaching and
                practical frameworks.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/programs">
                  <Button size="lg" className="bg-slate-50 text-slate-900 hover:bg-slate-200">
                    Explore Our Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-slate-50 text-slate-50 hover:bg-slate-800">
                    Request Training
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Leadership coaching session"
                className="rounded-lg object-cover"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Command Team Coaching, our mission is to empower middle managers in large organizations with
                transformative leadership tools and techniques rooted in integrity, service, and personal growth.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="p-2 bg-slate-100 rounded-full">
                <Building className="h-6 w-6 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold">Bridge the Gap</h3>
              <p className="text-center text-gray-500">
                We bridge the gap between upper leadership and frontline teams by developing confident, action-oriented
                leaders.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="p-2 bg-slate-100 rounded-full">
                <Users className="h-6 w-6 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold">Practical Frameworks</h3>
              <p className="text-center text-gray-500">
                Through our MAS and Self-Leadership programs, we deliver repeatable frameworks that equip managers to
                lead effectively.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="p-2 bg-slate-100 rounded-full">
                <Award className="h-6 w-6 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold">Trust-Building</h3>
              <p className="text-center text-gray-500">
                Our coaching approach is grounded in trust-building, accountability, and the belief that leadership
                begins with how we show up every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Programs</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transformative training programs designed to develop confident, action-oriented leaders.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ProgramCard
              title="Managerial Action Sequence (MAS)"
              description="A structured approach to management that provides clear steps for effective team leadership, communication, and execution."
              features={[
                "Communicating Updates",
                "Team Briefing",
                "Situational Reviews",
                "Performance Management",
                "Strategic Planning",
              ]}
              icon={<BarChart3 className="h-10 w-10 text-slate-800" />}
            />
            <ProgramCard
              title="Self-Leadership Training"
              description="Develop the personal mastery needed to lead others by first leading yourself with clarity, courage, and consistency."
              features={[
                "Emotional Intelligence",
                "Decision Making",
                "Time Management",
                "Personal Accountability",
                "Resilience Building",
              ]}
              icon={<CheckCircle className="h-10 w-10 text-slate-800" />}
            />
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/programs">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-700">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from organizations that have transformed their leadership through our programs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="Command Team Coaching transformed our middle management. Their practical approach to leadership development has created a more cohesive and effective organization."
              author="Sarah Johnson"
              title="VP of Operations, Global Tech Inc."
            />
            <TestimonialCard
              quote="The MAS program gave our managers a clear framework for action. We've seen improved communication and execution across all departments."
              author="Michael Chen"
              title="Director of HR, Innovate Solutions"
            />
            <TestimonialCard
              quote="The Self-Leadership training has been a game-changer for our leadership development pipeline. Our managers are more confident and effective."
              author="Jessica Williams"
              title="Chief People Officer, Enterprise Systems"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Leadership?
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss how Command Team Coaching can empower your middle managers and strengthen
                your organization.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-200">
                  Request Training
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-slate-800">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
