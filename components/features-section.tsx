import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Globe, Lock, TrendingUp, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure Escrow",
    description:
      "Smart contracts ensure secure transactions with automated escrow services, protecting both buyers and sellers.",
  },
  {
    icon: Zap,
    title: "Instant Transactions",
    description:
      "Lightning-fast property transfers powered by blockchain technology, eliminating traditional paperwork delays.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Invest in properties worldwide without geographical restrictions or complex international procedures.",
  },
  {
    icon: Lock,
    title: "Blockchain Security",
    description: "Immutable property records and ownership verification through decentralized blockchain technology.",
  },
  {
    icon: TrendingUp,
    title: "Fractional Ownership",
    description:
      "Own portions of high-value properties through tokenization, making real estate investment accessible to everyone.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a community of forward-thinking investors reshaping the future of real estate investment.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Why Choose RealEstate NFT?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of real estate investment with cutting-edge blockchain technology and innovative
            features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
