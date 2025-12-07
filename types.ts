export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  imageUrl?: string;
  category: 'Breakthrough' | 'Business' | 'Policy' | 'Research' | 'Hardware' | 'Startup' | 'Product';
  tags: string[];
  content?: string; // Full article content
}

export interface CompanyUpdate {
  id: string;
  title: string;
  date: string;
  type: 'Model Release' | 'Policy' | 'Infrastructure' | 'Blog' | 'Research' | 'Business' | 'Product';
}

export interface Company {
  id: string;
  name: string;
  logoUrl: string; // Using placeholders for this demo
  description: string;
  updates: CompanyUpdate[];
  primaryColor: string;
  fundingBadge?: string; // New field for funding status
}

export interface VideoContent {
  id: string;
  title: string;
  channel: string;
  thumbnailUrl: string;
  duration: string;
  views: string;
  category: 'Explainer' | 'Interview' | 'Demo' | 'Event' | 'Tutorial';
}

export interface RedditThread {
  id: string;
  subreddit: string;
  title: string;
  upvotes: number;
  comments: number;
  topInsight: string;
}

export interface MarketAsset {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  type: 'Stock' | 'Crypto';
}

export interface EduConcept {
  id: string;
  title: string;
  description: string;
  iconName: 'Brain' | 'MessageSquare' | 'Database' | 'Layers';
}

export interface ToolGuide {
  id: string;
  toolName: string;
  company: string;
  description: string;
  bestFor: string[];
  tips: string[];
}