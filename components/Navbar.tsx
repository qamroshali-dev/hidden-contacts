import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-bold text-xl">Hidden Label</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#security" className="text-sm font-medium hover:text-primary transition-colors">
                        Security
                    </Link>
                    <Link href="#download" className="text-sm font-medium hover:text-primary transition-colors">
                        Download
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#download">
                        <Button>Get App</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
