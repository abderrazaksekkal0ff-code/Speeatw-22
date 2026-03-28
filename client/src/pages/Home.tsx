import { Button } from "@/components/ui/button";
import { Zap, Shield, Users, ArrowRight } from "lucide-react";

/**
 * Design Philosophy: Modern Bold Design
 * - Dark background with purple/blue accents
 * - Bold typography with Poppins for headers
 * - Smooth animations and hover effects
 * - High contrast for readability
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: "Poppins" }}>
              Speeatw
            </span>
          </div>
          <a href="https://discord.com/oauth2/authorize?client_id=1486768942486650974&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Add to Discord
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="space-y-4">
                <h1
                  className="text-4xl md:text-5xl font-bold leading-tight text-foreground"
                  style={{ fontFamily: "Poppins" }}
                >
                  Your Powerful Discord Companion
                </h1>
                <p className="text-lg text-muted-foreground">
                  Speeatw brings advanced moderation, fun commands, and community
                  engagement tools to your Discord server. Keep your community safe
                  and engaged with powerful automation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://discord.com/oauth2/authorize?client_id=1486768942486650974&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Add Speeatw Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-card"
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary" style={{ fontFamily: "Poppins" }}>
                    50K+
                  </p>
                  <p className="text-sm text-muted-foreground">Active Servers</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-accent" style={{ fontFamily: "Poppins" }}>
                    100K+
                  </p>
                  <p className="text-sm text-muted-foreground">Happy Users</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary" style={{ fontFamily: "Poppins" }}>
                    99.9%
                  </p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663130410319/ZwTCSAsrbeHCKcdBqwLkbB/hero-discord-bot-iJ38nAk9MUUvWUidY98Qnh.webp"
                  alt="Discord Bot Interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-card/30 border-y border-border">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              Why Choose Speeatw?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed to make server management effortless and
              keep your community thriving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Poppins" }}>
                Powerful Moderation
              </h3>
              <p className="text-sm text-muted-foreground">
                Advanced moderation tools including auto-mod, user management,
                logging, and customizable punishment systems to keep your server safe.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Poppins" }}>
                Community Features
              </h3>
              <p className="text-sm text-muted-foreground">
                Engage your community with fun commands, giveaways, welcome messages,
                member tracking, and customizable announcements.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Poppins" }}>
                Lightning Fast
              </h3>
              <p className="text-sm text-muted-foreground">
                Optimized for speed and reliability with 99.9% uptime guarantee.
                Instant responses and seamless integration with Discord.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="relative animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663130410319/ZwTCSAsrbeHCKcdBqwLkbB/moderation-feature-ULwk39jFgLUsheMF2f4pDM.webp"
                  alt="Moderation Features"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "Poppins" }}
              >
                Advanced Moderation Tools
              </h2>
              <p className="text-lg text-muted-foreground">
                Keep your Discord server safe with our comprehensive moderation suite.
                From automated spam detection to customizable warning systems, Speeatw
                has everything you need.
              </p>
              <ul className="space-y-3">
                {[
                  "Auto-moderation with smart filtering",
                  "User management and role assignment",
                  "Detailed logging and audit trails",
                  "Customizable punishment systems",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Community Features */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700 order-2 md:order-1">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "Poppins" }}
              >
                Engage Your Community
              </h2>
              <p className="text-lg text-muted-foreground">
                Build a thriving community with interactive features designed to keep
                members engaged and connected. From giveaways to custom announcements,
                Speeatw helps you create unforgettable experiences.
              </p>
              <ul className="space-y-3">
                {[
                  "Fun and interactive commands",
                  "Automated giveaway system",
                  "Welcome messages and member tracking",
                  "Customizable announcements",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative animate-in fade-in slide-in-from-right-4 duration-700 order-1 md:order-2">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663130410319/ZwTCSAsrbeHCKcdBqwLkbB/community-feature-MQ8iWqKRHxniNhSXhBubFA.webp"
                  alt="Community Features"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Add Speeatw to your Discord server today and start enjoying powerful
              features that will transform your community management.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://discord.com/oauth2/authorize?client_id=1486768942486650974&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Add Speeatw to Discord
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold" style={{ fontFamily: "Poppins" }}>
                  Speeatw
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your powerful Discord companion for moderation and community engagement.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold" style={{ fontFamily: "Poppins" }}>
                Product
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold" style={{ fontFamily: "Poppins" }}>
                Community
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Discord Server
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold" style={{ fontFamily: "Poppins" }}>
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 BrezScales. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
