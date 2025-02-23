'use client';

import { Shield, BookOpen, Target, Users, AlertTriangle, Brain, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a0f2e,#2d1b4e,#1a242f)] opacity-95" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <Shield className="w-16 h-16 text-purple-400 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500">
              ScamAware
            </h1>
          </div>
          <p className="text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto mb-8">
            Your trusted companion in the fight against online scams. Learn, practice, and stay protected.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
              Get Started
            </Button>
            <Link href="/scams">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
                Learn About Scams
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 bg-card/50 backdrop-blur border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-[1.02]">
          <BookOpen className="w-12 h-12 mb-4 text-purple-400" />
          <h2 className="text-xl font-semibold mb-3">Interactive Learning</h2>
          <p className="text-muted-foreground mb-4">
            Master scam detection through engaging lessons and real-world scenarios.
          </p>
          <Link href="/scams">
            <Button variant="outline" className="w-full border-purple-500/50 hover:bg-purple-500/10">Start Learning</Button>
          </Link>
        </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:scale-[1.02]">
            <Target className="w-12 h-12 mb-4 text-cyan-400" />
            <h2 className="text-xl font-semibold mb-3">Practice Arena</h2>
            <p className="text-muted-foreground mb-4">
              Test your skills in a safe environment with simulated scam attempts.
            </p>
            <Link href="/practice-problems">
              <Button variant="outline" className="w-full border-cyan-500/50 hover:bg-cyan-500/10">
                Enter Arena
              </Button>
            </Link>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-[1.02]">
            <Users className="w-12 h-12 mb-4 text-purple-400" />
            <h2 className="text-xl font-semibold mb-3">Helpdesk for Legal Recourse & Support</h2>
            <p className="text-muted-foreground mb-4">
              Get expert legal guidance on what to do if you've been scammed.
            </p>
            <Link href="/helpdesk">
              <Button variant="outline" className="w-full border-purple-500/50 hover:bg-purple-500/10">
                Get Support
              </Button>
            </Link>
          </Card>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-[linear-gradient(45deg,#0a0418,#1a0f2e)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-200">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/scam-detection">
                <div className="group flex items-start gap-4 p-6 rounded-lg bg-black/40 backdrop-blur border border-purple-500/20 transition-all duration-300 hover:bg-black/60 hover:border-purple-500/40 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] cursor-pointer">
                  <AlertTriangle className="w-8 h-8 text-purple-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-300" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-200 transition-colors duration-300 group-hover:text-purple-100">
                      Scam Detection Tool
                    </h3>
                    <p className="text-purple-200/70 transition-colors duration-300 group-hover:text-purple-200">
                      Advanced AI-powered analysis of suspicious messages and links.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/scam-news">
                <div className="group flex items-start gap-4 p-6 rounded-lg bg-black/40 backdrop-blur border border-cyan-500/20 transition-all duration-300 hover:bg-black/60 hover:border-cyan-500/40 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                  <Brain className="w-8 h-8 text-cyan-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-300" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-200 transition-colors duration-300 group-hover:text-cyan-100">
                      Scam News
                   </h3>
                    <p className="text-cyan-200/70 transition-colors duration-300 group-hover:text-cyan-200">
                      Covers recent news regarding active scams to keep yourself to-date.
                    </p>
                 </div>
                </div>
              </Link>
            </div>
          </div>
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
