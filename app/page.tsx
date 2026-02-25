import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { Shield, Smartphone, Lock, EyeOff, Zap, WifiOff } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      icon: Lock,
      title: "PIN Protected",
      description: "Secure your contacts with a robust PIN code. Only you have the key to access your hidden connections."
    },
    {
      icon: Shield,
      title: "AES Encryption",
      description: "All contact data is encrypted using military-grade AES-256 standard before being stored on your device."
    },
    {
      icon: WifiOff,
      title: "100% Offline",
      description: "No internet required. Your data never leaves your device, ensuring complete privacy and isolation."
    },
    {
      icon: EyeOff,
      title: "Completely Hidden",
      description: "Contacts stored in Hidden Contact don't appear in your regular phone book or other apps."
    },
    {
      icon: Smartphone,
      title: "Local Storage",
      description: "Data resides physically on your phone. No cloud backups that can be compromised or subpoenaed."
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Optimized for speed. Quickly search and view your saved hidden contacts instantly from the app."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />

        {/* Features Section */}
        <section id="features" className="py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Hidden Contact?</h2>
              <p className="text-muted-foreground">
                We prioritize your privacy above all else. Built for journalists, business professionals, and anyone who values confidentiality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <h2 className="text-3xl font-bold">Uncompromising Security</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start text-left">
                    <div className="bg-primary/20 p-2 rounded-lg mt-1">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Zero-Knowledge Architecture</h4>
                      <p className="text-muted-foreground text-sm">We don't know who your contacts are. We can't see your PIN. You are in total control.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start text-left">
                    <div className="bg-primary/20 p-2 rounded-lg mt-1">
                      <WifiOff className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">No Network Permissions</h4>
                      <p className="text-muted-foreground text-sm">The app doesn't even have permission to access the internet. Data leaks are impossible.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                {/* Visual element representing security/shield */}
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20"></div>
                  <div className="bg-background rounded-full p-8 shadow-2xl relative z-10 w-64 h-64 flex items-center justify-center border-4 border-primary/10">
                    <Shield className="w-32 h-32 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to secure your connections?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Download Hidden Contact today and experience the peace of mind that comes with true privacy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* App Store Buttons placeholders */}
              <Button size="lg" className="h-16 px-8 text-lg gap-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.523 15.3414C17.523 13.8948 18.5985 13.0645 18.6672 13.0187C17.7507 11.6669 16.3248 11.4552 15.8206 11.4323C14.6125 11.3006 13.4385 12.1649 12.8255 12.1649C12.2126 12.1649 11.2334 11.4552 10.2307 11.4724C8.91307 11.4953 7.73887 12.2565 7.06297 13.4646C5.64227 15.9866 6.70207 19.8962 8.08257 21.9469C8.75277 22.9436 9.54917 23.9918 10.5975 23.946C11.5942 23.9002 11.9723 23.2987 13.1925 23.2987C14.4127 23.2987 14.7508 23.946 15.8321 23.9231C16.9548 23.9002 17.6534 22.8806 18.318 21.8954C19.0627 20.7611 19.3837 19.6671 19.4009 19.5984C19.3837 19.587 17.523 18.848 17.523 15.3414ZM14.9969 9.3815C15.5469 8.7056 15.9136 7.7661 15.8206 6.8208C15.0042 6.8552 14.0225 7.3764 13.4324 8.0809C12.9226 8.6712 12.4586 9.6106 12.5675 10.5271C13.4672 10.6073 14.4469 10.0574 14.9969 9.3815Z" /></svg>
                App Store
              </Button>
              <Button size="lg" className="h-16 px-8 text-lg gap-3 bg-zinc-800 hover:bg-zinc-900">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,12.5L17.38,15.69L15.29,13.6L17.38,11.5L20.3,14.68C20.48,14.86 20.48,15.14 20.3,15.32M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" /></svg>
                Google Play
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
