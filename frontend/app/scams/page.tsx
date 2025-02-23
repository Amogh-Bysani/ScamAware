'use client';

import { ArrowLeft, Mail, Globe, AlertCircle, Bug, UserX, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const scamCategories = [
  {
    id: 'phishing',
    title: 'Phishing Scams',
    description: 'Deceptive attempts to steal sensitive information through fake emails and text messages.',
    icon: Mail,
    color: 'purple',
  },
  {
    id: 'pharming',
    title: 'Pharming',
    description: 'Malicious redirection of legitimate website traffic to fake sites.',
    icon: Globe,
    color: 'cyan',
  },
  {
    id: 'popup',
    title: 'Pop-Up Phishing',
    description: 'Fraudulent pop-up windows designed to steal information or install malware.',
    icon: AlertCircle,
    color: 'purple',
  },
  {
    id: 'malware',
    title: 'Malware',
    description: 'Harmful software including viruses, spyware, trojans, and ransomware.',
    icon: Bug,
    color: 'cyan',
  },
  {
    id: 'spoofing',
    title: 'Spoofing',
    description: 'Impersonation of legitimate websites, phone numbers, or social media accounts.',
    icon: UserX,
    color: 'purple',
  },
];

export default function ScamsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#1a0f2e,#2d1b4e,#1a242f)]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-purple-200 hover:text-purple-100 hover:bg-purple-500/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-purple-200 mb-6">Learn About Scams</h1>
        <p className="text-lg text-purple-200/80 mb-12 max-w-3xl">
          Explore different types of online scams and learn how to protect yourself. Each category provides detailed information and prevention tips.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scamCategories.map((category) => (
            <Link href={`/scams/${category.id}`} key={category.id}>
              <Card className={`group p-6 bg-black/40 backdrop-blur border-${category.color}-500/20 hover:border-${category.color}-500/40 transition-all duration-300 hover:bg-black/60 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] cursor-pointer`}>
                <div className="flex items-start gap-4">
                  <category.icon className={`w-8 h-8 text-${category.color}-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-${category.color}-300`} />
                  <div className="flex-1">
                    <h2 className={`text-xl font-semibold mb-2 text-${category.color}-200 group-hover:text-${category.color}-100`}>
                      {category.title}
                    </h2>
                    <p className={`text-${category.color}-200/70 group-hover:text-${category.color}-200 mb-4`}>
                      {category.description}
                    </p>
                    <div className={`flex items-center text-${category.color}-400 group-hover:text-${category.color}-300`}>
                      Learn More
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
