"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    jobTitle: "",
    programInterest: "",
    teamSize: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log(formData)
    toast({
      title: "Training request submitted",
      description: "We'll be in touch with you shortly to discuss your training needs.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      jobTitle: "",
      programInterest: "",
      teamSize: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to transform your middle management? Get in touch to discuss your leadership development needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Request Training</h2>
              <p className="text-gray-500 mb-8">
                Fill out the form below to request information about our training programs or to schedule a consultation
                with our team.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Training Request Form</CardTitle>
                  <CardDescription>Please provide details about your organization and training needs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input
                          id="jobTitle"
                          name="jobTitle"
                          placeholder="HR Director"
                          value={formData.jobTitle}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="teamSize">Team Size</Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("teamSize", value)}
                          value={formData.teamSize}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="501+">501+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Program Interest</Label>
                      <RadioGroup
                        defaultValue={formData.programInterest}
                        onValueChange={(value) => handleSelectChange("programInterest", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mas" id="mas" />
                          <Label htmlFor="mas">Managerial Action Sequence (MAS)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="self-leadership" id="self-leadership" />
                          <Label htmlFor="self-leadership">Self-Leadership Training</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="custom" id="custom" />
                          <Label htmlFor="custom">Custom Program</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="not-sure" id="not-sure" />
                          <Label htmlFor="not-sure">Not Sure / Need Consultation</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please share any specific challenges or goals for your leadership development program."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700">
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Get in Touch</h2>
                <p className="text-gray-500 mb-8">
                  Have questions about our programs or want to learn more about how we can help your organization?
                  Contact us directly using the information below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-slate-800 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-500">info@commandteamcoaching.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-slate-800 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-500">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-slate-800 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Office</h3>
                      <p className="text-gray-500">
                        123 Leadership Way
                        <br />
                        Suite 456
                        <br />
                        Business District, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold">How long do your training programs typically last?</h3>
                    <p className="text-gray-500">
                      Our core programs range from 6-8 weeks, but we also offer condensed workshops and extended
                      development programs based on your needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold">Can you deliver training virtually?</h3>
                    <p className="text-gray-500">
                      Yes, all of our programs can be delivered in-person, virtually, or through a hybrid approach to
                      accommodate your team's needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold">How do you measure the effectiveness of your training?</h3>
                    <p className="text-gray-500">
                      We establish clear metrics at the beginning of each program and use a combination of assessments,
                      surveys, and performance data to track progress.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold">How many participants can you accommodate in a program?</h3>
                    <p className="text-gray-500">
                      Our programs work best with groups of 10-20 participants, but we can scale to accommodate larger
                      organizations through multiple cohorts.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
