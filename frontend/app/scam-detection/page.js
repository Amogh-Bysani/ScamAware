'use client';

import ScamDetection from '@/components/ScamDetection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, BookOpen } from 'lucide-react';

export default function ScamDetectionPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a0f2e,#2d1b4e,#1a242f)] opacity-95" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <Shield className="w-16 h-16 text-purple-400 animate-pulse" />
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500">
                            Scam Analysis
                        </h1>
                    </div>
                    <p className="text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto mb-8">
                        Submit a screenshot of any suspicious activity and have our AI system analyze its scam-likeliness.
                    </p>
                      <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/practice-problems">
                          <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
                            Back to Home
                          </Button>
                        </Link>
                        <Link href="/scams">
                          <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
                            Link Detector
                          </Button>
                        </Link>
                      </div>
                </div>
            </section>

            {/* Main Practice Problems */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <ScamDetection />
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-purple-500/20">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Shield className="w-6 h-6 text-purple-400" />
                        <span className="font-semibold text-purple-200">ScamAware</span>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-purple-200/70 hover:text-purple-200">About</a>
                        <a href="#" className="text-purple-200/70 hover:text-purple-200">Contact</a>
                        <a href="#" className="text-purple-200/70 hover:text-purple-200">Privacy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}


/*
'use client'; // Required since we're using `useState` inside App.jsx

import ScamDetection from '@/components/ScamDetection';

export default function DetectionPage() {
    return <ScamDetection />;
}
*/
