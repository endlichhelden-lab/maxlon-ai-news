import { Company, NewsItem, RedditThread, VideoContent, MarketAsset, EduConcept, ToolGuide } from './types';

export const HERO_HEADLINES = [
  "Reasoning models accelerate the timeline.",
  "Compute infrastructure hits physical limits.",
  "Open weights challenge the proprietary standard."
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: '1',
    title: 'Gemini 2.5 Flash: Efficiency Redefined',
    summary: 'DeepMind’s new architecture cuts latency by 40% while holding ground on reasoning. A massive step for edge deployment.',
    content: `Google DeepMind has unveiled Gemini 2.5 Flash. The headline isn't just speed—though it is 40% faster—it's the retention of reasoning capabilities on smaller hardware.
    
    This effectively brings server-class logic to mobile chipsets. It’s a shift that moves AI from a cloud-dependent service to a native utility on your device. Implications for privacy and offline accessibility are substantial.`,
    source: 'DeepMind Journal',
    date: 'Today',
    category: 'Breakthrough',
    tags: ['Architecture', 'Edge', 'Efficiency'],
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'The Rubin Roadmap',
    summary: 'Nvidia looks past Blackwell. The incoming architecture promises a 3x leap in memory bandwidth.',
    content: `Jensen Huang isn't waiting for the dust to settle on Blackwell. At Computex, the "Rubin" architecture was teased—named after astronomer Vera Rubin.
    
    The focus is breaking the memory wall. With HBM4 memory and a 3x bandwidth increase, Rubin is designed specifically for the trillion-parameter era. It’s not just a GPU; it’s the engine block for planetary-scale compute.`,
    source: 'TechCrunch',
    date: '5h ago',
    category: 'Hardware',
    tags: ['Semiconductors', 'Infrastructure', 'Scale'],
    imageUrl: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'EU AI Act: Enforcement Begins',
    summary: 'The grace period ends. Stringent compliance checks begin for foundation models, putting pressure on open source.',
    content: `The EU AI Act has entered full enforcement. "General Purpose AI Models" now face strict transparency protocols.
    
    While giants like OpenAI are ready, the open-source community faces a hurdle. The "systemic risk" classification is based on compute thresholds that mid-sized labs are rapidly approaching. It raises a critical question: does regulation solidify the incumbents?`,
    source: 'Reuters',
    date: '8h ago',
    category: 'Policy',
    tags: ['Regulation', 'Global', 'Law'],
    imageUrl: 'https://images.unsplash.com/photo-1555432384-2259d6795b6c?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Constitutional AI',
    summary: 'Anthropic publishes the framework for self-supervision, moving away from human-in-the-loop bottlenecks.',
    content: `Anthropic’s latest paper details "Constitutional AI" (CAI). It replaces the army of human contractors used in RLHF with a set of principles—a constitution.
    
    The goal is to reduce "sycophancy"—the model telling you what you want to hear. By automating alignment, Anthropic aims to enforce safety constraints that are too subtle for human labelers to catch consistently.`,
    source: 'Anthropic Research',
    date: '12h ago',
    category: 'Research',
    tags: ['Safety', 'Alignment', 'Methodology'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Colossus: The $6B Supercomputer',
    summary: 'xAI secures funding to build the world’s largest training cluster in Memphis.',
    content: `xAI has closed a $6 billion Series B. The capital has one purpose: "Colossus."
    
    Planned for Memphis, this cluster aims to network over 100,000 H100 GPUs. It is a brute-force approach to AGI, with Grok-3 slated to be trained on this infrastructure. The target? Surpassing GPT-5 capabilities by late 2025.`,
    source: 'Bloomberg',
    date: '1d ago',
    category: 'Business',
    tags: ['Capital', 'Infrastructure', 'xAI'],
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Intelligence on iOS',
    summary: 'Apple integrates generative models at the OS level. Privacy remains the core differentiator.',
    content: `iOS 19 Beta is out, and "Apple Intelligence" is live. It’s a deep integration: context-aware Siri, writing tools, and generative imagery.
    
    The differentiator is architecture. Most requests are processed on-device. Complex queries hand off to "Private Cloud Compute," a server infrastructure that Apple claims never stores data. It’s AI for the privacy-conscious mass market.`,
    source: 'The Verge',
    date: '1d ago',
    category: 'Product',
    tags: ['Consumer', 'Mobile', 'Privacy'],
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop'
  }
];

// UPDATED: Added Meta, Amazon, Microsoft
export const COMPANIES: Company[] = [
  {
    id: 'meta',
    name: 'Meta',
    description: 'Driving the open-weight standard with Llama.',
    logoUrl: '',
    primaryColor: 'bg-blue-600',
    fundingBadge: 'Public (META)',
    updates: [
      { id: 'm1', title: 'Llama 4 Training Begins', date: '1d ago', type: 'Model Release' },
      { id: 'm2', title: 'Reality Labs ROI', date: '3d ago', type: 'Business' }
    ]
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    description: 'The enterprise backbone of the AI era.',
    logoUrl: '',
    primaryColor: 'bg-blue-500',
    fundingBadge: 'Public (MSFT)',
    updates: [
      { id: 'ms1', title: 'Copilot Integration', date: '2d ago', type: 'Product' },
      { id: 'ms2', title: 'Azure AI Studio', date: '1w ago', type: 'Infrastructure' }
    ]
  },
  {
    id: 'amazon',
    name: 'Amazon',
    description: 'AWS infrastructure and Anthropic partnership.',
    logoUrl: '',
    primaryColor: 'bg-orange-500',
    fundingBadge: 'Public (AMZN)',
    updates: [
      { id: 'a1', title: 'Olympus Model Rumors', date: '12h ago', type: 'Research' },
      { id: 'a2', title: 'Bedrock API Update', date: '4d ago', type: 'Infrastructure' }
    ]
  },
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'Pushing the frontier of scale and reasoning.',
    logoUrl: '',
    primaryColor: 'bg-green-500',
    fundingBadge: '$6.6B Round',
    updates: [
      { id: 'u1', title: 'GPT-5 Pre-training', date: '2d ago', type: 'Model Release' },
      { id: 'u2', title: 'Safety Team Update', date: '1w ago', type: 'Policy' }
    ]
  },
];

export const REDDIT_THREADS: RedditThread[] = [
  {
    id: 'r1',
    subreddit: 'r/LocalLLaMA',
    title: 'Llama-3 405B on consumer hardware?',
    upvotes: 2400,
    comments: 450,
    topInsight: 'Possible with 4-bit quantization, but expect low tokens per second.'
  },
  {
    id: 'r2',
    subreddit: 'r/MachineLearning',
    title: 'Mamba-2 vs Transformers',
    upvotes: 1800,
    comments: 210,
    topInsight: 'SSMs show promise for context, but attention mechanisms still rule retrieval.'
  },
  {
    id: 'r3',
    subreddit: 'r/Singularity',
    title: 'Q* demo leak analysis',
    upvotes: 5600,
    comments: 1200,
    topInsight: 'Community consensus suggests the interface is dated; likely a fake.'
  }
];

export const VIDEOS: VideoContent[] = [
  {
    id: 'v1',
    title: 'Inside Diffusion Transformers',
    channel: 'Andrej Karpathy',
    thumbnailUrl: 'https://images.unsplash.com/photo-1617791160505-6f00504e3caf?q=80&w=1000&auto=format&fit=crop',
    duration: '1:45:20',
    views: '2.1M',
    category: 'Explainer'
  },
  {
    id: 'v2',
    title: 'The Road to GPT-5',
    channel: 'AI Explained',
    thumbnailUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop',
    duration: '18:45',
    views: '890K',
    category: 'Explainer'
  },
  {
    id: 'v3',
    title: 'Figure 02: Hardware Demo',
    channel: 'Figure',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop',
    duration: '03:15',
    views: '5.6M',
    category: 'Demo'
  }
];

export const MARKET_DATA: MarketAsset[] = [
  { symbol: 'NVDA', name: 'Nvidia', price: '1,164.37', change: '+3.45%', isPositive: true, type: 'Stock' },
  { symbol: 'MSFT', name: 'Microsoft', price: '428.50', change: '+0.82%', isPositive: true, type: 'Stock' },
  { symbol: 'META', name: 'Meta', price: '498.20', change: '+0.45%', isPositive: true, type: 'Stock' },
  { symbol: 'AMZN', name: 'Amazon', price: '182.45', change: '+1.10%', isPositive: true, type: 'Stock' },
  { symbol: 'GOOGL', name: 'Alphabet', price: '176.80', change: '-0.24%', isPositive: false, type: 'Stock' },
  { symbol: 'BTC', name: 'Bitcoin', price: '68,450.00', change: '+2.12%', isPositive: true, type: 'Crypto' },
];

export const EDU_CONCEPTS: EduConcept[] = [
  {
    id: 'ec1',
    title: 'The Transformer',
    description: 'The architecture that changed everything. Predicting the next token via attention mechanisms.',
    iconName: 'Brain'
  },
  {
    id: 'ec2',
    title: 'Prompt Strategy',
    description: 'Precision input. Guiding probability distributions to desired outputs.',
    iconName: 'MessageSquare'
  },
  {
    id: 'ec3',
    title: 'RAG Architecture',
    description: 'Grounding models. Connecting static weights to dynamic, private data sources.',
    iconName: 'Database'
  }
];

export const TOOL_GUIDES: ToolGuide[] = [
  {
    id: 'tg1',
    toolName: 'Claude 3.5 Sonnet',
    company: 'Anthropic',
    description: 'The current benchmark for nuance and coding. Features "Artifacts" for real-time rendering.',
    bestFor: ['Complex Refactoring', 'Document Analysis', 'Nuanced Writing'],
    tips: [
      'Use Artifacts to visualize HTML/React components instantly.',
      'Upload project zips for context-aware suggestions.',
      'Request "Chain of Thought" for logic validation.'
    ]
  },
  {
    id: 'tg2',
    toolName: 'GPT-4o',
    company: 'OpenAI',
    description: 'The multimodal standard. Native audio, vision, and reasoning in a single model.',
    bestFor: ['Data Visualization', 'Voice Interaction', 'Rapid Prototyping'],
    tips: [
      'Assign a specific persona in Custom Instructions.',
      'Upload raw data sheets for instant graphing.',
      'Use voice mode for brainstorming sessions.'
    ]
  },
  {
    id: 'tg4',
    toolName: 'DeepSeek-R1',
    company: 'DeepSeek',
    description: 'Open weights, high performance. A cost-effective reasoning engine.',
    bestFor: ['Local Inference', 'Logic Tasks', 'JSON Extraction'],
    tips: [
      'Check the reasoning trace to verify logic steps.',
      'Deploy locally via Ollama for total privacy.',
      'Excellent for structured data formatting.'
    ]
  }
];

export const EDU_VIDEOS: VideoContent[] = [
  {
    id: 'ev1',
    title: 'LLM Fundamentals',
    channel: 'Andrej Karpathy',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop',
    duration: '1:00:00',
    views: '4.5M',
    category: 'Tutorial'
  },
  {
    id: 'ev2',
    title: 'Prompt Engineering',
    channel: 'DeepLearningAI',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    duration: '45:20',
    views: '1.2M',
    category: 'Tutorial'
  },
];

export const COMPANY_LEARNING_VIDEOS: VideoContent[] = [
  {
    id: 'clv1',
    title: 'GPT-4o Capability Demo',
    channel: 'OpenAI',
    thumbnailUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
    duration: '26:10',
    views: '8.4M',
    category: 'Demo'
  },
  {
    id: 'clv2',
    title: 'Building with Claude',
    channel: 'Anthropic',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    duration: '14:20',
    views: '450K',
    category: 'Tutorial'
  }
];
