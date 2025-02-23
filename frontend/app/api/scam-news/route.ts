import { NextResponse } from 'next/server';

const GOOGLE_NEWS_API = `https://newsapi.org/v2/everything?q=scam+alert&sortBy=publishedAt&apiKey=f4a39cfd1b374e119fdb2cc4b3d3c532`;

export async function GET() {
    try {
        // Fetch Google News API (Replace with your API Key)
        const googleResponse = await fetch(GOOGLE_NEWS_API);
        const googleData = await googleResponse.json();

        return NextResponse.json({
            articles: googleData.articles.map((article: any) => ({
                title: article.title,
                link: article.url,
                source: article.source.name,
                image: article.urlToImage || null,
                publishedAt: article.publishedAt,
                description: article.description || '',
            }))
        });
    } catch (error) {
        console.error("Failed to fetch scam news:", error);
        return NextResponse.json({ error: 'Failed to fetch scam news' }, { status: 500 });
    }
}