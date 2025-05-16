import { Award, BookOpen, CheckCircle, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Command Team Coaching
              </h1>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transforming middle management through trust-building, accountability, and practical leadership
                frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Command Team Coaching was founded with a clear vision: to address the critical gap in leadership
                development for middle managers. We recognized that while organizations invest heavily in executive
                leadership and entry-level training, the vital middle layer of management often receives insufficient
                support.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our founders, with decades of combined experience in corporate leadership and organizational
                development, created a coaching approach specifically designed to empower middle managers with the
                tools, techniques, and mindset needed to excel in their pivotal roles.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                Today, Command Team Coaching partners with organizations across industries to develop confident,
                action-oriented leaders who effectively bridge the gap between strategic vision and frontline execution.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Command Team Coaching founders"
                className="rounded-lg object-cover"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Approach</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our coaching methodology is built on four key pillars that create transformative leadership development.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="p-2 bg-slate-100 rounded-full">
                <BookOpen className="h-6 w-6 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold text-center">Practical Frameworks</h3>
              <p className="text-center text-gray-500">
                We provide structured, repeatable processes that managers can immediately apply to their daily work.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="p-2 bg-slate-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold text-center">Trust-Building</h3>
              <p className="text-center text-gray-500">
                We emphasize integrity and consistency as the foundation for effective leadership and team cohesion.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="p-2 bg-slate-100 rounded-full">
                <Users className="h-6 w-6 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold text-center">Self-Leadership</h3>
              <p className="text-center text-gray-500">
                We believe that leading others effectively begins with mastering how to lead oneself.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="p-2 bg-slate-100 rounded-full">
                <Award className="h-6 w-6 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold text-center">Measurable Results</h3>
              <p className="text-center text-gray-500">
                We focus on creating tangible improvements in leadership effectiveness and team performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Value of Trust Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Trust in leadership"
                className="rounded-lg object-cover"
                width={500}
                height={400}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">The Value of Trust-Building</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Trust is the foundation of effective leadership and the core of what Command Team Coaching aims to
                develop in every middle manager we train. Unlike surface-level motivation or temporary tactics,
                trust-building establishes long-term influence, deeper collaboration, and sustainable team performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                  <span className="text-gray-500">
                    <strong className="text-slate-900">Enhanced Manager Credibility:</strong> When middle managers
                    consistently act with transparency, reliability, and fairness, they earn the respect and confidence
                    of both their teams and upper leadership.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                  <span className="text-gray-500">
                    <strong className="text-slate-900">Team Alignment and Cohesion:</strong> Trust leads to open
                    communication and shared purpose, reducing friction and aligning efforts toward common goals.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                  <span className="text-gray-500">
                    <strong className="text-slate-900">Improved Execution and Initiative:</strong> Teams led by
                    trustworthy managers are more likely to take ownership, speak up with ideas or concerns, and stay
                    committed through challenges.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-slate-800 mr-2 mt-0.5" />
                  <span className="text-gray-500">
                    <strong className="text-slate-900">Retention and Engagement:</strong> Employees are far more likely
                    to stay with organizations—and perform at high levels—when they trust their direct supervisors.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Process</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How we implement our coaching programs to create lasting change in your organization.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-center">Assessment</h3>
              <p className="text-center text-gray-500">
                We begin with a thorough assessment of your organization's current leadership landscape, identifying
                specific needs and opportunities.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-center">Customization</h3>
              <p className="text-center text-gray-500">
                We tailor our programs to address your organization's unique challenges and align with your strategic
                objectives.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-center">Implementation</h3>
              <p className="text-center text-gray-500">
                We deliver our training through a combination of workshops, one-on-one coaching, and practical
                application exercises.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-center">Integration</h3>
              <p className="text-center text-gray-500">
                We work with your managers to integrate new leadership practices into their daily routines and team
                interactions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white font-bold text-xl">
                5
              </div>
              <h3 className="text-xl font-bold text-center">Measurement</h3>
              <p className="text-center text-gray-500">
                We establish clear metrics to track progress and demonstrate the impact of our coaching on leadership
                effectiveness.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white font-bold text-xl">
                6
              </div>
              <h3 className="text-xl font-bold text-center">Sustainability</h3>
              <p className="text-center text-gray-500">
                We provide ongoing support and resources to ensure that new leadership practices become permanent
                organizational capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
