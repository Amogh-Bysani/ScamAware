'use client';

import { ArrowLeft, Shield, AlertTriangle, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HelpdeskPage() {
    return (
        <div className="min-h-screen bg-[linear-gradient(135deg,#1a0f2e,#2d1b4e,#1a242f)] text-purple-200 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <Link href="/">
                    <Button variant="ghost" className="text-purple-200 hover:text-purple-100 hover:bg-purple-500/10">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>

                {/* Header Section */}
                <div className="bg-black/40 backdrop-blur rounded-lg border border-purple-500/20 p-8 mt-6">
                    <h1 className="text-3xl font-bold text-purple-200 mb-4 flex items-center gap-2">
                        <LifeBuoy className="w-8 h-8 text-purple-400" />
                        Scam Helpdesk: Legal Recourse & Support
                    </h1>
                    <p className="text-lg text-purple-200/80 mb-8">
                        If you've been scammed, don't panic. Use this guide to understand your legal options and take action to report and recover from the scam.
                    </p>

                    {/* FAQ Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-purple-200 mb-4">What to Do If You’ve Been Scammed</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-purple-200/80">
                                <Shield className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <span><strong>Secure Your Accounts:</strong> Change passwords immediately and enable two-factor authentication.</span>
                            </li>
                            <li className="flex items-start gap-3 text-purple-200/80">
                                <Shield className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <span><strong>Contact Your Bank:</strong> If you shared payment details, notify your bank to block unauthorized transactions.</span>
                            </li>
                            <li className="flex items-start gap-3 text-purple-200/80">
                                <Shield className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <span><strong>Report the Scam:</strong> Report to <a href="https://reportfraud.ftc.gov" className="text-purple-400 underline hover:text-purple-300" target="_blank">FTC</a>, <a href="https://www.ic3.gov" className="text-purple-400 underline hover:text-purple-300" target="_blank">FBI IC3</a>, or local law enforcement.</span>
                            </li>
                            <li className="flex items-start gap-3 text-purple-200/80">
                                <Shield className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <span><strong>Scan Your Device:</strong> Run a security scan to remove malware or keyloggers.</span>
                            </li>
                            <li className="flex items-start gap-3 text-purple-200/80">
                                <Shield className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <span><strong>Monitor Your Identity:</strong> Use credit monitoring tools to detect fraudulent activity.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Report & Support Links */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-purple-200 mb-4">Where to Get Help</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <span><a href="https://reportfraud.ftc.gov" className="text-purple-400 underline hover:text-purple-300" target="_blank">Federal Trade Commission (FTC) Fraud Report</a></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <span><a href="https://www.ic3.gov" className="text-purple-400 underline hover:text-purple-300" target="_blank">FBI Internet Crime Complaint Center (IC3)</a></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <span><a href="https://www.consumerfinance.gov/complaint/" className="text-purple-400 underline hover:text-purple-300" target="_blank">Consumer Financial Protection Bureau</a></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <span><a href="https://www.identitytheft.gov/" className="text-purple-400 underline hover:text-purple-300" target="_blank">IdentityTheft.gov (for stolen personal info)</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
