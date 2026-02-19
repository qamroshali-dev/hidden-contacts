import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, EyeOff, ShieldCheck, Shield } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-8 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                            Your Contacts, <br />
                            Hidden & Secure.
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                            A 100% offline, PIN-protected contact manager that keeps your private connections truly private. No cloud, no tracking.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <Link href="#download">
                                <Button size="lg" className="gap-2 text-lg h-14 px-8">
                                    Download Now <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="#features">
                                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                                    Learn More
                                </Button>
                            </Link>
                        </div>

                        <div className="pt-8 flex items-center justify-center md:justify-start gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Lock className="w-4 h-4 text-primary" />
                                <span>Encrypted</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <EyeOff className="w-4 h-4 text-primary" />
                                <span>Hidden</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-primary" />
                                <span>Offline</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative z-10 mx-auto w-72 h-[580px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800">
                            <div className="h-full w-full bg-white rounded-[2.5rem] overflow-hidden relative">
                                {/* Mockup Screen Content */}
                                <div className="absolute inset-0 bg-background flex flex-col">
                                    {/* Status Bar */}
                                    <div className="h-8 bg-background flex items-center justify-between px-6 text-xs font-medium">
                                        <span>9:41</span>
                                        <div className="flex gap-1">
                                            <div className="w-4 h-2.5 bg-foreground rounded-sm"></div>
                                        </div>
                                    </div>

                                    {/* App Content */}
                                    <div className="flex-1 p-6 flex flex-col items-center justify-center space-y-6">
                                        <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-lg transform rotate-3">
                                            <Shield className="w-12 h-12" />
                                        </div>
                                        <div className="text-center space-y-2">
                                            <h3 className="text-2xl font-bold">Hidden Contact</h3>
                                            <p className="text-sm text-muted-foreground">Enter PIN to unlock</p>
                                        </div>
                                        <div className="flex gap-4 mt-8">
                                            <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>
                                            <div className="w-3 h-3 rounded-full bg-primary animate-bounce delay-75"></div>
                                            <div className="w-3 h-3 rounded-full bg-primary animate-bounce delay-150"></div>
                                            <div className="w-3 h-3 rounded-full bg-primary animate-bounce delay-200"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
