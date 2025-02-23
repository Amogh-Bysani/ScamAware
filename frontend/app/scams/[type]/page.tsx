import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Shield, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const scamDetails = {
  phishing: {
    title: 'Understanding Email & Text Phishing',
    description: 'Phishing is a cybercrime where attackers pose as legitimate institutions to trick you into revealing sensitive information.',
    content: 'Phishing scams create a sense of urgency or fear to manipulate victims into acting quickly.',
    preventionTips: [
      'Never click on links in unexpected emails or texts.',
      'Check the sender\'s email address carefully for subtle misspellings.',
      'Hover over links to preview URLs before clicking.',
      'Don\'t provide personal information in response to unsolicited messages.',
      'Use two-factor authentication whenever possible.',
      'Keep your software and systems updated.',
    ],
  },
  pharming: {
    title: 'Understanding Pharming Attacks',
    description: 'Pharming is a cyber attack that redirects website traffic to fraudulent sites.',
    content: 'Unlike phishing, pharming attacks happen even when users enter a legitimate website address.',
    preventionTips: [
      'Always check for HTTPS and valid SSL certificates.',
      'Keep your DNS settings secure.',
      'Use trusted DNS servers.',
      'Install and maintain reputable security software.',
      'Be alert for website irregularities.',
      'Regularly clear your DNS cache.',
    ],
  },
  popup: {
    title: 'Pop-Up Phishing',
    description: 'Fake pop-up messages designed to steal information or install malware.',
    content: 'These pop-ups often pretend to be system alerts, tricking users into entering credentials or downloading malicious software.',
    preventionTips: [
      'Never enter sensitive information into pop-ups.',
      'Use a pop-up blocker in your browser.',
      'Close suspicious pop-ups using task manager instead of clicking "Close".',
      'Keep your browser and extensions updated.',
    ],
  },
  malware: {
    title: 'Malware Attacks',
    description: 'Malware includes viruses, spyware, and ransomware used to damage or steal data.',
    content: 'Cybercriminals distribute malware via email attachments, fake downloads, and compromised websites.',
    preventionTips: [
      'Never download files from untrusted sources.',
      'Use reputable antivirus software.',
      'Be cautious of unexpected email attachments.',
      'Keep your operating system and software updated.',
    ],
  },
  spoofing: {
    title: 'Spoofing Attacks',
    description: 'Fraudulent emails, calls, or websites pretending to be legitimate entities.',
    content: 'Spoofing scams trick users into believing they are interacting with trusted sources.',
    preventionTips: [
      'Verify the sender’s identity before responding to emails or calls.',
      'Do not provide personal information to unknown contacts.',
      'Check URLs carefully before entering login details.',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(scamDetails).map((type) => ({ type }));
}

export default function ScamTypePage({ params }: { params: { type: string } }) {
  const scamType = params.type;
  const details = scamDetails[scamType as keyof typeof scamDetails];

  if (!details) return notFound();

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#1a0f2e,#2d1b4e,#1a242f)] text-purple-200 p-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/scams">
          <Button variant="ghost" className="text-purple-200 hover:text-purple-100 hover:bg-purple-500/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Scams
          </Button>
        </Link>

        <div className="bg-black/40 backdrop-blur rounded-lg border border-purple-500/20 p-8 mt-6">
          <h1 className="text-3xl font-bold text-purple-200 mb-4">{details.title}</h1>
          <p className="text-xl text-purple-200/80 mb-8">{details.description}</p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-200 mb-4">What You Need to Know</h2>
            <p className="text-purple-200/80 leading-relaxed">{details.content}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-200 mb-4">Prevention Tips</h2>
            <ul className="space-y-3">
              {details.preventionTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-purple-200/80">
                  <Shield className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <Link href="/helpdesk">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Report a Scam
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
