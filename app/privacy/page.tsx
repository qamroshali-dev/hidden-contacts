import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-32 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p>
                            Hidden Label ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your information is handled when you use our mobile application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Data Collection and Usage</h2>
                        <p className="font-medium text-lg mb-2">We do not collect any personal data.</p>
                        <p>
                            Hidden Label is designed as a completely offline application. All data you enter into the app (contacts, notes, etc.) is stored locally on your device and is encrypted. We do not have access to your data, your PIN, or your usage patterns.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
                        <p>
                            Your data is stored using AES-256 encryption on your device's secure storage. Your PIN is hashed and stored securely. Since the app does not connect to the internet, your data never leaves your device unless you manually export or share it (if such features are available and used by you).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Permissions</h2>
                        <p>
                            The app requires minimal permissions to function. We do not request internet access, location data, or access to your device's main contacts list unless verified by you for specific actions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                        <p>
                            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
