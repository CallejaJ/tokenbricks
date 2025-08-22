import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import PropertyShowcase from "@/components/property-showcase";
import HowItWorks from "@/components/how-it-works";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <section id='properties'>
        <PropertyShowcase />
      </section>
      <HowItWorks />
      <CTASection />
      <section id='about'>
        <div className='py-20 px-4 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-serif font-bold text-foreground mb-6'>
              About TokenBricks
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              We're revolutionizing real estate investment through blockchain
              technology, making property ownership more accessible,
              transparent, and secure than ever before.
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-2xl font-serif font-semibold text-foreground mb-4'>
                Our Mission
              </h3>
              <p className='text-muted-foreground mb-6'>
                To democratize real estate investment by leveraging NFT
                technology and smart contracts, creating a transparent,
                efficient, and secure marketplace for property transactions.
              </p>
              <h3 className='text-2xl font-serif font-semibold text-foreground mb-4'>
                Why Choose Us
              </h3>
              <ul className='space-y-3 text-muted-foreground'>
                <li className='flex items-start'>
                  <span className='text-primary mr-2'>•</span>
                  Blockchain-verified property ownership
                </li>
                <li className='flex items-start'>
                  <span className='text-primary mr-2'>•</span>
                  Smart contract escrow protection
                </li>
                <li className='flex items-start'>
                  <span className='text-primary mr-2'>•</span>
                  Transparent transaction history
                </li>
                <li className='flex items-start'>
                  <span className='text-primary mr-2'>•</span>
                  Global accessibility 24/7
                </li>
              </ul>
            </div>
            <div className='bg-muted rounded-lg p-8'>
              <h3 className='text-2xl font-serif font-semibold text-foreground mb-4'>
                Platform Statistics
              </h3>
              <div className='grid grid-cols-2 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    500+
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Properties Listed
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    $50M+
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Total Volume
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    1,200+
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Active Users
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    99.9%
                  </div>
                  <div className='text-sm text-muted-foreground'>Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
