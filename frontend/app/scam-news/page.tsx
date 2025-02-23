'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader, Globe, Newspaper } from 'lucide-react';

export default function ScamNewsPage() {
    const [news, setNews] = useState<{
        title: string;
        link: string;
        source: string;
        image: string | null;
        publishedAt: string;
        description: string;
    }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch('/api/scam-news');
                const data = await response.json();
                setNews(data.articles);
            } catch (error) {
                console.error('Error fetching scam news:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchNews();
    }, []);

    return (
        <div className="min-h-screen bg-[linear-gradient(135deg,#1a0f2e,#2d1b4e,#1a242f)] text-purple-200 p-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-6 flex justify-center items-center gap-3">
                    <Newspaper className="w-10 h-10 text-purple-400"/>
                    Scam News & Alerts
                </h1>
                <p className="text-lg text-muted-foreground text-center mb-10">
                    Stay updated on the latest scam trends and fraud alerts from trusted sources.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Link href="/">
                        <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
                            Back to Home
                        </Button>
                    </Link>
                </div>
                {/* Loading State */}
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader className="animate-spin w-8 h-8 text-muted-foreground"/>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {news.map((article, index) => (
                            <Card key={index}
                                  className="p-6 border-purple-500/30 hover:shadow-lg transition-all bg-black/40 backdrop-blur">
                                {/* Article Image (if available) */}
                                {article.image && (
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover rounded mb-4"
                                    />
                                )}

                                {/* Article Title & Metadata */}
                                <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                                <p className="text-sm text-purple-400 mb-2">{article.source} • {new Date(article.publishedAt).toLocaleDateString()}</p>
                                <p className="text-muted-foreground mb-4">{article.description}</p>

                                {/* Read More Button */}
                                <div className="mt-4 flex justify-between items-center">
                                    <Link href={article.link} target="_blank">
                                        <Button variant="outline"
                                                className="border-purple-400 text-purple-400 hover:bg-purple-500/10">
                                            Read More
                                        </Button>
                                    </Link>
                                    <Globe className="w-6 h-6 text-purple-400"/>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
