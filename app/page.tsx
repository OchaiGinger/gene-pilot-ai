import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/abstract-dna-double-helix-with-ai-circuit-patterns.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            GenePilot.AI – Personalized Genomics, Powered by AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            From lab to life — transforming healthcare, one genome at a time.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Precision Medicine at Scale</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              GenePilot.AI is your gateway to precision medicine. We harness AI, genomics, and predictive modeling to
              enable faster, smarter, and safer genetic therapy development. Our cutting-edge platform transforms
              complex genomic data into actionable insights for healthcare providers, researchers, and biotechnology
              companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Excellence</h2>
            <p className="text-lg text-muted-foreground">Meet the visionary leading GenePilot.AI's mission</p>
          </div>

          <div className="flex justify-center">
            <Card className="max-w-sm bg-card border shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src="/professional-nigerian-male-ceo-in-black-suit--conf.png"
                    alt="Omale Martins Adaji, CEO"
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Omale Martins Adaji</h3>
                <Badge variant="secondary" className="mb-4">
                  Chief Executive Officer
                </Badge>
                <p className="text-muted-foreground text-sm mb-4">
                  Leading GenePilot.AI's vision to revolutionize personalized medicine through innovative AI-driven
                  genomic solutions.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/team">Meet the Full Team</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">See what our partners say about GenePilot.AI</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border shadow-md">
              <CardContent className="p-6">
                <p className="text-muted-foreground italic mb-4">
                  "GenePilot.AI's platform has revolutionized our approach to genetic therapy development. The AI-driven
                  insights have accelerated our research timeline by 40%."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-foreground">Dr. Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">Research Director, BioTech Innovations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md">
              <CardContent className="p-6">
                <p className="text-muted-foreground italic mb-4">
                  "The precision and accuracy of GenePilot.AI's genomic analysis tools have been instrumental in our
                  clinical decision-making process."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-foreground">Prof. Michael Okafor</p>
                    <p className="text-sm text-muted-foreground">Chief Medical Officer, Lagos University Hospital</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/team">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground">Comprehensive AI-powered genomic solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">AI-Driven Drug-Gene Interaction Models</h3>
                <p className="text-muted-foreground">
                  Advanced machine learning algorithms predict drug efficacy and safety based on individual genetic
                  profiles.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Genome Annotation & Risk Scoring</h3>
                <p className="text-muted-foreground">
                  Comprehensive genomic analysis with intelligent risk assessment for personalized healthcare decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Digital Twin Profiles for Therapy Trials</h3>
                <p className="text-muted-foreground">
                  Create virtual patient models to simulate treatment outcomes and optimize therapy protocols.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
