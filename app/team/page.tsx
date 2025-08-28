import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Team & Testimonials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Meet the visionary leaders driving innovation in genomic medicine and hear from our valued partners
          </p>
        </div>
      </section>

      {/* Full Team Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to transforming healthcare through AI and genomics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* CEO - More Prominent */}
            <Card className="lg:col-span-3 md:col-span-2 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="/professional-nigerian-male-ceo-in-black-suit--conf.png"
                      alt="Omale Martins Adaji, CEO"
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Omale Martins Adaji</h3>
                    <Badge variant="default" className="mb-4 bg-primary">
                      Chief Executive Officer & Founder
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      Visionary leader with over 15 years of experience in biotechnology and AI. Omale founded
                      GenePilot.AI with the mission to democratize precision medicine through innovative genomic
                      solutions. He holds a PhD in Computational Biology and has led groundbreaking research in
                      personalized therapeutics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Team Members */}
            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src="/professional-nigerian-female-scientist-in-black-su.png"
                    alt="Dr. Amina Kano, CTO"
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-secondary/20"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Amina Kano</h3>
                <Badge variant="secondary" className="mb-3">
                  Chief Technology Officer
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Leading our AI and machine learning initiatives with expertise in genomic data analysis and cloud
                  infrastructure development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src="/professional-nigerian-male-doctor-in-black-suit--m.png"
                    alt="Prof. Chukwuma Okafor, Chief Medical Officer"
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-accent/20"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Prof. Chukwuma Okafor</h3>
                <Badge variant="secondary" className="mb-3">
                  Chief Medical Officer
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Renowned geneticist ensuring clinical validity and regulatory compliance of our genomic solutions
                  across healthcare applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src="/professional-nigerian-female-business-executive-in.png"
                    alt="Mrs. Folake Adebayo, Chief Operating Officer"
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary/20"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Mrs. Folake Adebayo</h3>
                <Badge variant="secondary" className="mb-3">
                  Chief Operating Officer
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Driving operational excellence and strategic partnerships to scale GenePilot.AI's impact across
                  African healthcare systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src="/professional-nigerian-male-data-scientist-in-black.png"
                    alt="Dr. Ibrahim Musa, Head of Data Science"
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-secondary/20"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Ibrahim Musa</h3>
                <Badge variant="secondary" className="mb-3">
                  Head of Data Science
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Leading advanced analytics and predictive modeling initiatives to extract actionable insights from
                  complex genomic datasets.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src="/professional-nigerian-female-regulatory-affairs-sp.png"
                    alt="Dr. Grace Eze, Head of Regulatory Affairs"
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-accent/20"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Grace Eze</h3>
                <Badge variant="secondary" className="mb-3">
                  Head of Regulatory Affairs
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Ensuring compliance with international healthcare regulations and guiding our path to global market
                  approval and adoption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Full Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Partners Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading healthcare organizations and research institutions worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border shadow-md">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "GenePilot.AI's platform has revolutionized our approach to genetic therapy development. The AI-driven
                  insights have accelerated our research timeline by 40% and improved our success rate in identifying
                  viable therapeutic targets. Their team's expertise in both genomics and AI is unmatched."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-foreground">Dr. Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">Research Director, BioTech Innovations</p>
                    <p className="text-xs text-muted-foreground">San Francisco, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-secondary mb-4" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "The precision and accuracy of GenePilot.AI's genomic analysis tools have been instrumental in our
                  clinical decision-making process. We've seen a 35% improvement in treatment outcomes since
                  implementing their risk scoring algorithms in our oncology department."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-foreground">Prof. Michael Okafor</p>
                    <p className="text-sm text-muted-foreground">Chief Medical Officer, Lagos University Hospital</p>
                    <p className="text-xs text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "As a genetic counselor, I rely on GenePilot.AI's interpretive tools daily. Their platform makes
                  complex genomic data accessible and actionable for both healthcare providers and patients. The
                  explainable AI features give us confidence in our recommendations."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-foreground">Dr. Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">
                      Senior Genetic Counselor, Precision Health Institute
                    </p>
                    <p className="text-xs text-muted-foreground">Barcelona, Spain</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "GenePilot.AI's digital twin technology has transformed our clinical trial design. We can now simulate
                  patient responses before enrollment, reducing trial costs by 50% and improving patient safety. This is
                  the future of pharmaceutical development."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-foreground">Dr. James Thompson</p>
                    <p className="text-sm text-muted-foreground">VP of Clinical Development, PharmaCorp Global</p>
                    <p className="text-xs text-muted-foreground">London, UK</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-secondary mb-4" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "The seamless integration with our existing laboratory systems was impressive. GenePilot.AI's APIs
                  work flawlessly with our LIMS, and the real-time analysis capabilities have reduced our turnaround
                  time from weeks to hours. Our lab efficiency has never been higher."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-foreground">Dr. Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Laboratory Director, Genomics Center of Excellence</p>
                    <p className="text-xs text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-md">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "Working with GenePilot.AI has elevated our research capabilities to world-class standards. Their
                  platform enabled us to publish three high-impact papers this year and secure major grant funding. The
                  collaboration has been transformative for our genomics program."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-foreground">Prof. David Mensah</p>
                    <p className="text-sm text-muted-foreground">Director, Institute for Genomic Medicine</p>
                    <p className="text-xs text-muted-foreground">Accra, Ghana</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Growing Network</h3>
                <p className="text-muted-foreground mb-6">
                  Become part of a global community of healthcare innovators leveraging AI and genomics to improve
                  patient outcomes and advance medical research.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <Badge variant="outline">500+ Healthcare Partners</Badge>
                  <Badge variant="outline">50+ Countries</Badge>
                  <Badge variant="outline">1M+ Patients Served</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
