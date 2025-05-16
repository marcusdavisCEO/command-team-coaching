import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DeploymentGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Deploying Your Command Team Coaching Website</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Option 1: Deploy to Vercel (Recommended)</h2>
          <p className="mb-4">
            Vercel is the platform created by the team behind Next.js and offers the simplest deployment experience:
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Steps to Deploy on Vercel</CardTitle>
              <CardDescription>The easiest way to deploy your Next.js website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Create a GitHub repository</strong>
                    <p className="text-sm text-gray-500">
                      Push your code to a new GitHub repository. You can use GitHub Desktop or command line.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Sign up for Vercel</strong>
                    <p className="text-sm text-gray-500">
                      Go to{" "}
                      <a
                        href="https://vercel.com"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        vercel.com
                      </a>{" "}
                      and sign up for an account using your GitHub account.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Import your repository</strong>
                    <p className="text-sm text-gray-500">
                      Click "Add New..." → "Project" and select your GitHub repository.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Configure your project</strong>
                    <p className="text-sm text-gray-500">
                      Vercel will automatically detect that you're using Next.js. You can keep the default settings.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Deploy</strong>
                    <p className="text-sm text-gray-500">
                      Click "Deploy" and Vercel will build and deploy your website.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Add your custom domain</strong>
                    <p className="text-sm text-gray-500">
                      Go to your project settings → Domains, and add commandteamcoaching.com. Vercel will guide you
                      through updating your DNS settings.
                    </p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button className="bg-black hover:bg-gray-800 text-white" asChild>
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                Deploy to Vercel
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Option 2: Deploy to Netlify</h2>
          <p className="mb-4">Netlify is another excellent platform for hosting Next.js websites:</p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Steps to Deploy on Netlify</CardTitle>
              <CardDescription>A powerful platform with a generous free tier</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Create a GitHub repository</strong>
                    <p className="text-sm text-gray-500">Push your code to a new GitHub repository.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Sign up for Netlify</strong>
                    <p className="text-sm text-gray-500">
                      Go to{" "}
                      <a
                        href="https://netlify.com"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        netlify.com
                      </a>{" "}
                      and sign up for an account using your GitHub account.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Create a new site</strong>
                    <p className="text-sm text-gray-500">
                      Click "Add new site" → "Import an existing project" and select your GitHub repository.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Configure your build settings</strong>
                    <p className="text-sm text-gray-500">
                      Set the build command to <code>npm run build</code> and the publish directory to{" "}
                      <code>.next</code>.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Deploy</strong>
                    <p className="text-sm text-gray-500">
                      Click "Deploy site" and Netlify will build and deploy your website.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Add your custom domain</strong>
                    <p className="text-sm text-gray-500">
                      Go to Site settings → Domain management, and add commandteamcoaching.com. Netlify will guide you
                      through updating your DNS settings.
                    </p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button className="bg-[#00AD9F] hover:bg-[#00968A] text-white" asChild>
              <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">
                Deploy to Netlify
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Option 3: Traditional Web Hosting</h2>
          <p className="mb-4">If you prefer traditional web hosting, you'll need to:</p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Steps for Traditional Hosting</CardTitle>
              <CardDescription>For use with cPanel or similar hosting services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Build your Next.js project</strong>
                    <p className="text-sm text-gray-500">
                      Run <code>npm run build</code> locally to create a production build.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Export your project</strong>
                    <p className="text-sm text-gray-500">
                      Add <code>"export": "next export"</code> to your package.json scripts and run{" "}
                      <code>npm run export</code> to create a static version of your site.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Upload files to your hosting provider</strong>
                    <p className="text-sm text-gray-500">
                      Upload the contents of the <code>out</code> directory to your web hosting provider using FTP or
                      their file manager.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <strong>Configure your domain</strong>
                    <p className="text-sm text-gray-500">
                      Point your domain to your hosting provider through your domain registrar's DNS settings.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-4">
                <p className="text-amber-800 text-sm">
                  <strong>Note:</strong> Traditional hosting may not support all Next.js features. For the best
                  experience, we recommend using Vercel or Netlify.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="mb-4">If you need assistance with deploying your website, you have several options:</p>

          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <div>
                <strong>Hire a web developer</strong> to handle the deployment for you
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <div>
                <strong>Contact your domain registrar</strong> for assistance with DNS settings
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-slate-800 rounded-full p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <div>
                <strong>Refer to the documentation</strong> for{" "}
                <a
                  href="https://nextjs.org/docs/deployment"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js deployment
                </a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
