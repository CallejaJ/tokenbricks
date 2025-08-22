import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-accent-foreground mb-6">
          Ready to Revolutionize Your Real Estate Investment?
        </h2>
        <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
          Join thousands of investors who are already benefiting from blockchain-powered real estate. Start your journey
          today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg"
          >
            Start Investing Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent px-8 py-4 text-lg bg-transparent"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get Updates
          </Button>
        </div>
      </div>
    </section>
  )
}
