import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Wallet, Shield, HandCoins } from "lucide-react"

const steps = [
  {
    icon: Wallet,
    step: "01",
    title: "Connect Your Wallet",
    description:
      "Link your MetaMask or compatible wallet to access the platform and interact with our smart contracts.",
  },
  {
    icon: Search,
    step: "02",
    title: "Browse & Select",
    description:
      "Explore tokenized properties with verified ownership, inspection reports, and detailed blockchain records.",
  },
  {
    icon: Shield,
    step: "03",
    title: "Escrow Protection",
    description:
      "Deposit earnest money into our smart contract escrow system with multi-party approval from inspector, lender, and seller.",
  },
  {
    icon: HandCoins,
    step: "04",
    title: "Complete Purchase",
    description:
      "Once inspection passes and all parties approve, the smart contract automatically transfers the NFT and funds.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with real estate NFTs in four simple steps. Our streamlined process makes property investment
            accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-border hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-bold text-accent mb-2">STEP {step.step}</div>
                  <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
