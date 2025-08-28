import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About GenePilot.AI</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Pioneering the future of personalized medicine through cutting-edge AI and genomics technology
          </p>
        </div>
      </section>

      {/* What We Do - Expanded Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-powered genomic solutions transforming healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Drug-Gene Interaction Models</h3>
                <p className="text-muted-foreground text-sm">
                  AI-powered prediction models that analyze how genetic variations affect drug metabolism and efficacy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Genome Annotation</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive genomic variant analysis with clinical significance scoring and interpretation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Digital Twin Profiles</h3>
                <p className="text-muted-foreground text-sm">
                  Virtual patient modeling for therapy simulation and treatment outcome prediction.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Risk Scoring</h3>
                <p className="text-muted-foreground text-sm">
                  Polygenic risk scores for disease susceptibility and treatment response prediction.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Precision Therapy</h3>
                <p className="text-muted-foreground text-sm">
                  Personalized treatment recommendations based on individual genetic profiles.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Clinical Validation</h3>
                <p className="text-muted-foreground text-sm">
                  Evidence-based genomic insights validated through clinical studies and real-world data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Platform */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Insight at the Genetic Level</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Our cloud-based computing platform processes vast genomic datasets with unprecedented speed and
                  accuracy. Built on proprietary algorithms and validated through extensive clinical research.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Proprietary Datasets:</strong> Curated genomic databases with clinical annotations
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Integration-Ready APIs:</strong> Seamless connectivity with existing healthcare systems
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Cloud Infrastructure:</strong> Scalable, secure, and compliant with healthcare standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/dna-helix-with-cloud-and-ai-circuit-minimalist-g.png"
                  alt="DNA helix with cloud and AI circuit illustration"
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why GenePilot */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Safer, Faster, More Accurate</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why leading healthcare organizations choose GenePilot.AI for their genomic medicine initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Clinically Validated ML Algorithms</h3>
                  <p className="text-muted-foreground">
                    Our machine learning models are rigorously tested and validated through clinical trials and
                    real-world evidence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Seamless EHR and Lab Integration</h3>
                  <p className="text-muted-foreground">
                    Direct integration with electronic health records and laboratory information systems for streamlined
                    workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Transparent Model Explainability</h3>
                  <p className="text-muted-foreground">
                    Clear, interpretable AI insights that healthcare providers can understand and trust for clinical
                    decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Scalable Architecture</h3>
                  <p className="text-muted-foreground">
                    Enterprise-grade infrastructure that grows with your organization's needs and patient volume.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Practice?</h3>
                <p className="text-muted-foreground mb-6">
                  Join leading healthcare organizations already using GenePilot.AI to deliver personalized medicine at
                  scale.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">HIPAA Compliant</Badge>
                  <Badge variant="secondary">FDA Validated</Badge>
                  <Badge variant="secondary">ISO 27001 Certified</Badge>
                  <Badge variant="secondary">SOC 2 Type II</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
