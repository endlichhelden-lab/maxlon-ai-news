import { GoogleGenAI } from "@google/genai";
import { NEWS_DATA, MARKET_DATA } from "../constants";
import { NewsItem } from "../types";

// Initialize Gemini
// Note: In a real production app, ensure this is handled securely or via a backend proxy
// if exposing the key to the client is a concern. For this demo, we assume process.env.API_KEY is available.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

// Helper to sanitize JSON response from the model
const parseNewsResponse = (text: string): Partial<NewsItem>[] => {
  try {
    // Remove markdown code blocks if present
    const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
    // Attempt to extract the array part if there's extra text
    const arrayMatch = cleaned.match(/\[[\s\S]*\]/);
    const jsonStr = arrayMatch ? arrayMatch[0] : cleaned;
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error("Failed to parse news JSON", e);
    return [];
  }
};

export const fetchRealtimeNews = async (): Promise<{ news: NewsItem[], sources: string[] }> => {
  if (!apiKey) {
    console.warn("No API Key found, returning static data.");
    return { news: [], sources: [] };
  }

  try {
    const prompt = `
      Act as a tech news editor for a premium AI news platform.
      Search for the 6 most significant and recent Artificial Intelligence news stories from the last 24-48 hours.
      Focus on: Model releases (OpenAI, DeepMind, Anthropic), Hardware (Nvidia), Policy, and big Tech investments.
      
      Return a STRICT JSON array of objects. Each object must have:
      - title: string (Headline)
      - summary: string (Concise, max 2 sentences)
      - content: string (2-3 paragraphs of analysis on why this matters)
      - source: string (Publication name)
      - date: string (Relative time, e.g. "2h ago")
      - category: One of ['Breakthrough', 'Business', 'Policy', 'Research', 'Hardware', 'Startup', 'Product']
      - tags: string array (e.g. ['LLMs', 'Nvidia'])
      
      Do NOT include markdown formatting. Just the raw JSON string.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        // Note: responseMimeType is not supported with googleSearch
      }
    });

    const rawItems = parseNewsResponse(response.text || '');
    
    // Extract grounding URLs (Verified Sources)
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = chunks
      .map((c: any) => c.web?.uri)
      .filter((u: string) => u); // Filter undefined

    // Post-process items: Add IDs and Images (since search doesn't return good article images consistently)
    const processedNews: NewsItem[] = rawItems.map((item, index) => ({
      id: `live-${Date.now()}-${index}`,
      title: item.title || "News Update",
      summary: item.summary || "No summary available.",
      content: item.content || item.summary,
      source: item.source || "AI Web Search",
      date: item.date || "Today",
      category: (item.category as any) || "Breakthrough",
      tags: item.tags || ["AI", "Tech"],
      // Rotate through high-quality abstract tech images
      imageUrl: `https://images.unsplash.com/photo-${[
        '1677442136019-21780ecad995', // Neural Blue
        '1620712943543-bcc4688e7485', // Chip
        '1591405351990-4726e331f141', // Server
        '1555432384-2259d6795b6c', // Interface
        '1512941937669-90a1b58e7e9c', // Mobile
        '1451187580459-43490279c0fa'  // Network
      ][index % 6]}?q=80&w=800&auto=format&fit=crop`
    }));

    return { news: processedNews, sources: sources as string[] };

  } catch (error) {
    console.error("Gemini Live News Error:", error);
    return { news: [], sources: [] };
  }
};

export const generateDailyBriefing = async (): Promise<string> => {
  if (!apiKey) {
    return "Demo Mode: API Key not configured for live briefing. Add your Gemini Key to view real-time insights.";
  }

  try {
    const headlines = NEWS_DATA.map(n => `- ${n.title}: ${n.summary}`).join('\n');
    
    const prompt = `
      You are an elite AI news analyst for "Maxlon's Latest AI News".
      Based on the following news headlines, generate a concise, futuristic, high-energy "Morning Briefing" summary (max 3 sentences).
      Focus on the bigger picture impact of these combined events.
      
      Headlines:
      ${headlines}
      
      Output plain text only.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Analyzing global data streams...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System offline. Unable to synthesize daily briefing at this moment.";
  }
};

export const generateNewsletterEmail = async (userEmail: string): Promise<string> => {
  if (!apiKey) {
    return `
      <div style="font-family: monospace; color: #333;">
        <h2>System Notification</h2>
        <p>API Key missing. Unable to generate AI Newsletter.</p>
        <p>In production, this would contain:</p>
        <ul>
          <li>Market Analysis</li>
          <li>Top Headlines</li>
          <li>AI Fun Fact</li>
        </ul>
      </div>
    `;
  }

  try {
    const headlines = NEWS_DATA.slice(0, 3).map(n => `- ${n.title}`).join('\n');
    const stocks = MARKET_DATA.slice(0, 5).map(s => `${s.symbol}: ${s.price} (${s.change})`).join(', ');
    const crypto = MARKET_DATA.filter(m => m.type === 'Crypto').slice(0, 3).map(c => `${c.symbol}: ${c.price}`).join(', ');

    const prompt = `
      You are the editor of "Maxlon's Neural Network Newsletter". Write a daily email update for a subscriber named ${userEmail.split('@')[0]}.
      
      Include the following sections formatted in clean HTML (no markdown code blocks, just raw HTML):
      1. <h3>Greeting</h3>: Futuristic and welcoming.
      2. <h3>Market Pulse</h3>: Summarize these financial stats: Stocks [${stocks}], Crypto [${crypto}].
      3. <h3>Top Headlines</h3>: Briefly mention these: ${headlines}.
      4. <h3>Fun Fact</h3>: Include one mind-blowing fact about AI or technology history.
      
      Style: Professional, high-tech, concise. Use inline styles for dark mode compatibility (dark background #0f172a, white text).
      Do not include the <html> or <body> tags, just the inner container div.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "<p>Error generating neural feed.</p>";
  } catch (error) {
    console.error("Gemini Email Gen Error:", error);
    return "<p>Neural link disrupted. Please try again later.</p>";
  }
};