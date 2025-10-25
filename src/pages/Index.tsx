import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { ContentSection } from "@/components/ContentSection";
import { Check, Shield, Users, Zap } from "lucide-react";
import networkIllustration from "@/assets/network-illustration.png";
import customerIllustration from "@/assets/customer-illustration.png";
import professionalIllustration from "@/assets/professional-illustration.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-background">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">About Us</h1>
          <p className="text-xl text-muted-foreground">
            Empowering growth through trusted professional connections
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Built by Unified Transformation Consultants
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <a href="https://gignut.com" className="text-primary font-semibold hover:underline">
                    Gignut.com
                  </a>{" "}
                  is a digital initiative by Unified Transformation Consultants (UTCONS) - a business
                  growth consulting and technology organization based in Pune, India.
                </p>
                <p>
                  At UTCONS, we believe that meaningful connections drive growth. Through Gignut, we
                  translate that belief into a simple, transparent, and intelligent platform that bridges
                  the gap between Customers seeking expertise and Professionals ready to deliver it.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={networkIllustration}
                alt="Professional networking platform"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Purpose</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            To simplify the way people find trusted professionals — and to give professionals a smarter,
            more direct way to grow their business.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={Check}
              title="No Clutter"
              description="Clean, focused experience"
            />
            <FeatureCard
              icon={Check}
              title="No Commissions"
              description="Fair and transparent pricing"
            />
            <FeatureCard
              icon={Check}
              title="No Guesswork"
              description="Verified experts you can trust"
            />
          </div>
        </div>
      </section>

      {/* For Customers */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">For Customers</h2>
              <p className="text-lg text-muted-foreground mb-4 font-semibold">
                Finding the right professional shouldn't be overwhelming.
              </p>
              <p className="text-muted-foreground">
                Gignut empowers customers to post their requirements effortlessly and receive responses
                from qualified, verified experts - quickly, securely, and without any middle layers.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={customerIllustration}
                alt="Customer experience"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Professionals */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                For Professionals
              </h2>
              <p className="text-lg text-muted-foreground mb-4 font-semibold">
                Your skills deserve visibility, not noise.
              </p>
              <p className="text-muted-foreground">
                Gignu helps professionals and business units showcase their expertise to real, intentful
                customers ready to engage — building reputation, trust, and sustained growth over time.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={professionalIllustration}
                alt="Professional showcase"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust and Technology */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Powered by Trust and Technology</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Every connection on Gignut is powered by:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={Shield}
              title="Secure Encryption"
              description="Protecting user identities with industry-leading security standards"
            />
            <FeatureCard
              icon={Users}
              title="Transparent Matching"
              description="Driven by relevance, not ads - ensuring genuine connections"
            />
            <FeatureCard
              icon={Zap}
              title="Simplicity and Control"
              description="For both Customers and Professionals - complete transparency at every step"
            />
          </div>
          <p className="text-muted-foreground mt-12 max-w-3xl mx-auto">
            We exist to make professional discovery effortless and business relationships more meaningful.
          </p>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-20 px-4 bg-background text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Learn More</h2>
          <p className="text-muted-foreground mb-8">
            Visit{" "}
            <span className="font-semibold">www.utcons.com</span> to know more about the vision,
            capabilities, and consulting expertise that power Gignut and other transformation initiatives
            by Unified Transformation Consultants
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg"
            asChild
          >
            <a href="https://www.utcons.com" target="_blank" rel="noopener noreferrer">
              Visit UTCONS
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
