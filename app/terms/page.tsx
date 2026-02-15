import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-32 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                        <p>
                            By downloading or using the Hidden Label app, these terms will automatically apply to you. You should make sure therefore that you read them carefully before using the app.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Use of the App</h2>
                        <p>
                            Hidden Label is provided for personal use. You are responsible for keeping your device and access to the app secure. We strongly recommend that you do not jailbreak or root your phone, which could compromise your device's security and the app's functionality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. PIN Recovery</h2>
                        <p>
                            <strong className="text-primary">Important:</strong> Because Hidden Label is an offline, zero-knowledge app, we cannot recover your PIN if you forget it. You are solely responsible for remembering your PIN. If you lose your PIN, you may lose access to your stored data permanently.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                        <p>
                            The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to the developer.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Updates and Termination</h2>
                        <p>
                            We may wish to update the app at some point. The app is currently available on Android & iOS – the requirements for system (and for any additional systems we decide to extend the availability of the app to) may change, and you'll need to download the updates if you want to keep using the app.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
