import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service | Chat Toolkit", description: "Terms for using Chat Toolkit." };

export default function TermsOfServicePage() {
  return <main className="mx-auto max-w-3xl px-6 py-16 leading-7">
    <h1 className="mb-6 text-4xl font-bold">Terms of Service</h1>
    <p className="mb-8 text-sm text-muted-foreground">Last updated: November 9, 2026</p>
    <p>These terms govern your use of the Chat Toolkit website. By accessing the website, you agree to comply with these terms, subject to applicable law.</p>
    <h2 className="mt-8 text-2xl font-semibold">Directory information</h2>
    <p>Chat Toolkit provides information and links about tools and services. Listings are informational and do not guarantee the accuracy, availability, safety, or suitability of third-party products. Third-party services have their own terms and policies.</p>
    <h2 className="mt-8 text-2xl font-semibold">Acceptable use</h2>
    <p>Do not misuse the website, attempt unauthorized access, interfere with its operation, submit unlawful or deceptive material, or use automated systems to overwhelm its services.</p>
    <h2 className="mt-8 text-2xl font-semibold">Submissions</h2>
    <p>If submission features are made available, you are responsible for the information you submit and must have the rights needed to provide it. Chat Toolkit may review, edit, or remove submissions to maintain the directory and enforce these terms.</p>
    <h2 className="mt-8 text-2xl font-semibold">Availability and changes</h2>
    <p>Features and listings may be changed, suspended, or discontinued. Chat Toolkit does not promise uninterrupted access or error-free information.</p>
    <h2 className="mt-8 text-2xl font-semibold">Liability</h2>
    <p>To the extent permitted by applicable law, Chat Toolkit is not responsible for losses arising from third-party websites or services. Nothing in these terms excludes rights or remedies that cannot legally be excluded.</p>
    <h2 className="mt-8 text-2xl font-semibold">Changes to these terms</h2>
    <p>Updated terms will be posted on this page. Continued use after an update may be subject to the revised terms as permitted by applicable law.</p>
    <p className="mt-8 text-sm text-muted-foreground">This is an initial terms draft. Contact information, applicable jurisdiction, and enabled features must be confirmed before final publication.</p>
  </main>;
}
