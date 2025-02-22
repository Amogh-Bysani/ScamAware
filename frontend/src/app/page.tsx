'use client';

import { Shield, BookOpen, Target, Users, AlertTriangle, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a,#1e293b)] opacity-95" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <Shield className="w-16 h-16 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              ScamShield
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your trusted companion in the fight against online scams. Learn, practice, and stay protected.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
          <BookOpen className="w-12 h-12 mb-4 text-chart-1" />
          <h2 className="text-xl font-semibold mb-3">Interactive Learning</h2>
          <p className="text-muted-foreground mb-4">
            Master scam detection through engaging lessons and real-world scenarios.
          </p>
          <Button variant="outline" className="w-full">Start Learning</Button>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
          <Target className="w-12 h-12 mb-4 text-chart-2" />
          <h2 className="text-xl font-semibold mb-3">Practice Arena</h2>
          <p className="text-muted-foreground mb-4">
            Test your skills in a safe environment with simulated scam attempts.
          </p>
          <Button variant="outline" className="w-full">Enter Arena</Button>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02]">
          <Users className="w-12 h-12 mb-4 text-chart-3" />
          <h2 className="text-xl font-semibold mb-3">Community Forum</h2>
          <p className="text-muted-foreground mb-4">
            Connect with others and get expert advice on potential scams.
          </p>
          <Button variant="outline" className="w-full">Join Discussion</Button>
        </Card>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-lg bg-card/30 backdrop-blur">
              <AlertTriangle className="w-8 h-8 text-chart-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Scam Detection Tool</h3>
                <p className="text-muted-foreground">
                  Advanced AI-powered analysis of suspicious messages and links.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-lg bg-card/30 backdrop-blur">
              <Brain className="w-8 h-8 text-chart-5 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Interactive Tutorials</h3>
                <p className="text-muted-foreground">
                  Engaging, scenario-based learning covering various scam types.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6" />
            <span className="font-semibold">ScamShield</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground">About</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}