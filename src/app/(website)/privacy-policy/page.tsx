import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | Chat Toolkit", description: "Privacy information for Chat Toolkit." };

export default function PrivacyPolicyPage() {
  return <main className="mx-auto max-w-3xl px-6 py-16 leading-7">
    <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>
    <p className="mb-8 text-sm text-muted-foreground">Last updated: November 9, 2026</p>
    <p>Chat Toolkit provides a directory of online tools and related information. This policy explains how information may be processed when you use the website.</p>
    <h2 className="mt-8 text-2xl font-semibold">Information processed</h2>
    <p>Browsing the directory does not require an account. Hosting providers and website infrastructure may process technical information such as IP addresses, browser information, request timestamps, and diagnostic logs. If you choose to contact us or submit information through a form, the information you provide may be processed to respond to your request or operate that feature.</p>
    <h2 className="mt-8 text-2xl font-semibold">Analytics, cookies and external services</h2>
    <p>The website may use analytics, security services, and cookies or similar technologies. External websites linked from Chat Toolkit have their own privacy practices. Features such as sign-in, payments, or submissions, if enabled, may involve additional service providers and data processing.</p>
    <h2 className="mt-8 text-2xl font-semibold">Use and sharing</h2>
    <p>Information may be used to operate, secure, maintain, and improve the website, respond to inquiries, and comply with applicable law. Information may be shared with service providers supporting these functions or when legally required.</p>
    <h2 className="mt-8 text-2xl font-semibold">Retention and rights</h2>
    <p>Information is retained as needed for the purposes described above, subject to applicable law. Depending on your location, you may have rights to request access, correction, or deletion of personal information.</p>
    <h2 className="mt-8 text-2xl font-semibold">Updates</h2>
    <p>This policy may change as Chat Toolkit's features and service providers change. Updates will be posted on this page.</p>
    <h2 className="mt-8 text-2xl font-semibold">Contact</h2>
    <p>Questions about this page can be sent to <a className="underline" href="mailto:contact@chattoolkit.com">contact@chattoolkit.com</a>. This email address is pending activation.</p>
    <p className="mt-8 text-sm text-muted-foreground">This is an initial policy draft. Contact information and the site's actual data-handling practices must be confirmed before final publication.</p>
  </main>;
}
