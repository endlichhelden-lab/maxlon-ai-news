import React from 'react';
import { Terminal, Cpu, Brain, Network, Zap, Shield, Layers, Wrench, BookOpen, Activity } from 'lucide-react';

export const CURRICULUM_MODULES = [
  {
    id: 'm0',
    title: '0. Introduction',
    icon: <BookOpen className="w-4 h-4" />,
    duration: '15 min',
    content: (
      <div className="space-y-8 animate-in fade-in duration-700">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Introduction to Applied Intelligence</h1>
          <div className="p-6 bg-zinc-900 border-l-4 border-accent-500 rounded-r-lg">
            <h3 className="text-accent-500 font-mono text-sm uppercase tracking-widest mb-2 font-bold">Professor's Welcome</h3>
            <p className="text-zinc-300 leading-relaxed">
              Welcome to the lab. This curriculum is not designed to make you a passive observer of the AI revolution. It is designed to make you a practitioner. We will move from first principles—linear algebra and probability—to the bleeding edge of agentic workflows and LLM orchestration.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Philosophy</h3>
          <ul className="list-disc list-outside ml-6 space-y-2 text-zinc-400">
            <li><strong>First Principles First:</strong> Do not use a tool you cannot explain at a high level.</li>
            <li><strong>Build to Learn:</strong> Theory without implementation is merely philosophy.</li>
            <li><strong>Skepticism is a Virtue:</strong> Evaluate models rigourously. Do not trust the hype.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'm1',
    title: '1. Foundations',
    icon: <Activity className="w-4 h-4" />,
    duration: '2 hours',
    content: (
      <div className="space-y-8">
        <h1 className="text-4xl font-display font-bold text-white mb-6">The Mathematical Substrate</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">1.4 Linear Algebra Intuition</h3>
            <p className="text-zinc-400 mb-4">
              Matrices are not just grids of numbers; they are transformations of space. When we talk about "Embeddings" in AI, we are talking about high-dimensional vector spaces.
            </p>
            <div className="bg-zinc-900 p-4 rounded border border-white/5">
              <code className="text-sm font-mono text-emerald-400">
                Wait, why vectors?<br/>
                Because computers cannot understand "King" or "Queen".<br/>
                They understand:<br/>
                King = [0.8, 0.2, 0.9]<br/>
                Queen = [0.8, 0.2, 0.1]
              </code>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3">1.5 Python Essentials</h3>
            <p className="text-zinc-400 mb-4">
              Python is the lingua franca of AI. You must be fluent in <code>numpy</code> and <code>pandas</code>.
            </p>
            <ul className="space-y-2 text-sm text-zinc-500 font-mono">
              <li className="flex items-center"><span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>List Comprehensions</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>Vectorization (avoid loops)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>Broadcasting</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'm2',
    title: '2. Core Machine Learning',
    icon: <Cpu className="w-4 h-4" />,
    duration: '3 hours',
    content: (
      <div className="space-y-8">
        <h1 className="text-4xl font-display font-bold text-white mb-6">Core Machine Learning</h1>
        <p className="text-xl text-zinc-300">Before deep learning, there was statistical learning. These paradigms still power 70% of real-world production systems.</p>

        <div className="space-y-6">
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Supervised Learning</h3>
            <p className="text-zinc-400">
              Mapping Input A to Output B. The engine of the modern economy.
              <br/><span className="text-sm text-zinc-500 italic">Examples: Spam filters, Credit scoring, Image classification.</span>
            </p>
          </div>
          
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Overfitting & Regularization</h3>
            <div className="bg-red-900/10 border border-red-500/20 p-4 rounded">
              <h4 className="text-red-400 text-sm font-bold uppercase mb-1">Professor's Warning</h4>
              <p className="text-zinc-300 text-sm">
                A model that performs perfectly on training data but fails on test data has memorized, not learned. We use <strong>L1/L2 Regularization</strong> and <strong>Dropout</strong> to prevent this.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'm3',
    title: '3. Deep Learning',
    icon: <Brain className="w-4 h-4" />,
    duration: '4 hours',
    content: (
      <div className="space-y-8">
        <h1 className="text-4xl font-display font-bold text-white mb-6">Deep Learning & Neural Networks</h1>
        
        <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
          <h3 className="text-accent-500 font-mono text-sm uppercase tracking-widest mb-4 font-bold">The Universal Function Approximator</h3>
          <p className="text-zinc-300 mb-6">
            A neural network is simply a series of matrix multiplications passed through non-linear activation functions (ReLU, Sigmoid). This structure allows it to approximate <em>any</em> continuous function.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/40 p-4 rounded">
              <h4 className="text-white font-bold mb-1">Backpropagation</h4>
              <p className="text-xs text-zinc-400">The algorithm that allows the network to learn. It calculates the gradient of the loss function with respect to the weights.</p>
            </div>
            <div className="bg-black/40 p-4 rounded">
              <h4 className="text-white font-bold mb-1">Transformers</h4>
              <p className="text-xs text-zinc-400">"Attention Is All You Need" (Vaswani et al., 2017). The architecture that enabled parallel processing of sequences, leading to GPT.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'm5',
    title: '5. LLMs',
    icon: <Layers className="w-4 h-4" />,
    duration: '5 hours',
    content: (
      <div className="space-y-8">
        <h1 className="text-4xl font-display font-bold text-white mb-6">Large Language Models</h1>
        
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-white mb-4">The Training Pipeline</h3>
            <div className="flex flex-col md:flex-row gap-4 text-sm text-center">
              <div className="flex-1 p-4 bg-zinc-800 rounded border border-white/5">
                <span className="text-accent-500 font-bold block mb-2">1. Pre-training</span>
                Next-token prediction on internet-scale data. Learns grammar, facts, reasoning.
              </div>
              <div className="flex-1 p-4 bg-zinc-800 rounded border border-white/5">
                <span className="text-accent-500 font-bold block mb-2">2. SFT</span>
                Supervised Fine-Tuning. Teaching the model to follow instructions (Q&A format).
              </div>
              <div className="flex-1 p-4 bg-zinc-800 rounded border border-white/5">
                <span className="text-accent-500 font-bold block mb-2">3. RLHF / DPO</span>
                Reinforcement Learning from Human Feedback. Alignment, safety, and nuance.
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4">Context Window & Tokens</h3>
            <p className="text-zinc-400 mb-4">
              LLMs do not see words; they see tokens. ~0.75 words per token. The "Context Window" is the working memory of the model.
            </p>
            <div className="bg-emerald-900/10 border border-emerald-500/20 p-4 rounded">
              <h4 className="text-emerald-400 text-sm font-bold uppercase mb-1">Practical Insight</h4>
              <p className="text-zinc-300 text-sm">
                 Needles in Haystacks: While models like Gemini 1.5 Pro have 1M+ context, "Lost in the Middle" phenomena can still occur. Place critical instructions at the very beginning or very end of the prompt.
              </p>
            </div>
          </section>
        </div>
      </div>
    )
  },
  {
    id: 'm6',
    title: '6. AI Engineering',
    icon: <Wrench className="w-4 h-4" />,
    duration: '4 hours',
    content: (
      <div className="space-y-8">
        <h1 className="text-4xl font-display font-bold text-white mb-6">AI Engineering</h1>
        <p className="text-xl text-zinc-300">
          This is the discipline of building reliable systems on top of unreliable stochastic models.
        </p>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-white">
            <h3 className="text-xl font-bold text-white mb-2">RAG (Retrieval-Augmented Generation)</h3>
            <p className="text-zinc-400 mb-4">
              Stop hallucinations by grounding the model.
              <br/>1. Chunk your data.
              <br/>2. Embed it (Vector DB).
              <br/>3. Retrieve relevant chunks.
              <br/>4. Pass to LLM as context.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg border-l-4 border-white">
            <h3 className="text-xl font-bold text-white mb-2">Evals (Evaluations)</h3>
            <p className="text-zinc-400">
              If you don't have a way to measure it, you are just guessing.
              <br/>Build a "Golden Dataset" of inputs and ideal outputs. Run your system against it after every change.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'm8',
    title: '8. Ethics & Safety',
    icon: <Shield className="w-4 h-4" />,
    duration: '1 hour',
    content: (
      <div className="space-y-8">
        <h1 className="text-4xl font-display font-bold text-white mb-6">Ethics, Safety & Policy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">Alignment Problem</h3>
            <p className="text-zinc-400">
              How do we ensure AI systems pursue the goals we intend, rather than a literal interpretation that leads to catastrophe? (e.g., The Paperclip Maximizer).
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-2">Bias & Fairness</h3>
            <p className="text-zinc-400">
              Models trained on internet data inherit internet biases. Techniques like "Constitutional AI" aim to mitigate this without heavy-handed filtering.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'm9',
    title: '9. Real-World Tools',
    icon: <Terminal className="w-4 h-4" />,
    duration: 'High Priority',
    content: (
      <div className="space-y-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
          Real-World Tool <span className="text-accent-500">Deep Dive</span>
        </h1>

        {/* Cursor */}
        <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Cursor AI</h2>
            <span className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full uppercase tracking-widest font-bold">The Engineer's IDE</span>
          </div>
          <p className="text-zinc-300 mb-6 text-lg">
            A fork of VS Code with AI baked into the core. It indexes your entire codebase, allowing for "Context-Aware" coding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-accent-500 font-bold uppercase text-xs tracking-widest mb-2">Superpower</h4>
              <p className="text-sm text-zinc-400">
                <strong>@Codebase Indexing:</strong> You can ask, "Where is the authentication logic defined?" and it will search your entire project, not just the open file.
              </p>
            </div>
            <div>
              <h4 className="text-accent-500 font-bold uppercase text-xs tracking-widest mb-2">Professor's Tip</h4>
              <p className="text-sm text-zinc-400">
                Don't just use it to write code. Use it to <em>understand</em> code. Highlight a complex function and press <code>Cmd+L</code>: "Explain how this state update propagates."
              </p>
            </div>
          </div>
        </div>

        {/* Claude */}
        <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Claude 3.5 Sonnet</h2>
            <span className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full uppercase tracking-widest font-bold">The Deep Thinker</span>
          </div>
          <p className="text-zinc-300 mb-6 text-lg">
            Currently the SOTA (State of the Art) for coding and complex reasoning. Features "Artifacts" for rendering UI in real-time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-accent-500 font-bold uppercase text-xs tracking-widest mb-2">Superpower</h4>
              <p className="text-sm text-zinc-400">
                <strong>Large Context Recall:</strong> Claude excels at reading massive PDFs or documentation and answering questions without losing detail.
              </p>
            </div>
            <div>
              <h4 className="text-accent-500 font-bold uppercase text-xs tracking-widest mb-2">Professor's Tip</h4>
              <p className="text-sm text-zinc-400">
                Use "Artifacts" to prototype React components instantly. "Create a dashboard for tracking satellite debris in Tailwind CSS."
              </p>
            </div>
          </div>
        </div>

        {/* n8n */}
        <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-8">
           <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">n8n</h2>
            <span className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full uppercase tracking-widest font-bold">The Orchestrator</span>
          </div>
          <p className="text-zinc-300 mb-6 text-lg">
            A node-based workflow automation tool. It allows you to chain LLMs with real-world APIs (Gmail, Slack, PostgreSQL).
          </p>
          <div className="bg-black/30 p-4 rounded border border-white/5">
            <h4 className="text-white font-bold mb-2">Micro-Case Study</h4>
            <p className="text-sm text-zinc-400 font-mono">
              <strong>Goal:</strong> Automate customer support.<br/>
              <strong>Flow:</strong> Webhook (Email) → OpenAI Node (Classify sentiment) → If "Urgent" → Slack Node (Alert Team) → Else → OpenAI Node (Draft Reply) → Gmail Node (Send Draft).
            </p>
          </div>
        </div>

      </div>
    )
  },
  {
    id: 'm10',
    title: '10. The Playbook',
    icon: <Zap className="w-4 h-4" />,
    duration: 'Mastery',
    content: (
      <div className="space-y-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
          The "Apply AI" <span className="text-accent-500">Playbook</span>
        </h1>

        <div className="mb-12">
          <p className="text-xl text-zinc-300 leading-relaxed mb-6">
            Most people treat AI as a chatbot. You will treat it as a component in a system. Here is the framework for integrating AI into the real world.
          </p>
        </div>

        {/* The Agentic Loop */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">1. The Agentic Loop Blueprint</h3>
          <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6">
             <div className="flex-1 space-y-4">
                <div className="flex items-center">
                   <div className="w-8 h-8 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold mr-4">1</div>
                   <div><strong className="text-white">Plan:</strong> <span className="text-zinc-400">Break user request into steps.</span></div>
                </div>
                <div className="flex items-center">
                   <div className="w-8 h-8 rounded-full bg-zinc-700 text-white flex items-center justify-center font-bold mr-4">2</div>
                   <div><strong className="text-white">Act:</strong> <span className="text-zinc-400">Use a tool (Search, Code, API).</span></div>
                </div>
                <div className="flex items-center">
                   <div className="w-8 h-8 rounded-full bg-zinc-700 text-white flex items-center justify-center font-bold mr-4">3</div>
                   <div><strong className="text-white">Observe:</strong> <span className="text-zinc-400">Read the tool output.</span></div>
                </div>
                <div className="flex items-center">
                   <div className="w-8 h-8 rounded-full bg-zinc-700 text-white flex items-center justify-center font-bold mr-4">4</div>
                   <div><strong className="text-white">Refine:</strong> <span className="text-zinc-400">Did it work? If not, adjust plan.</span></div>
                </div>
             </div>
             <div className="w-full md:w-1/3 bg-black/40 p-4 rounded text-xs font-mono text-zinc-500">
                // Pseudocode<br/>
                while (goal_not_met):<br/>
                &nbsp;&nbsp;action = llm.decide_next_step(history)<br/>
                &nbsp;&nbsp;result = execute(action)<br/>
                &nbsp;&nbsp;history.append(result)
             </div>
          </div>
        </section>

        {/* Recipes */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-6">2. Implementation Recipes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-zinc-900 p-6 rounded-xl hover:border-accent-500/50 border border-transparent transition-colors group">
               <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent-500 transition-colors">The "Internal Research" Engine</h4>
               <p className="text-sm text-zinc-400 mb-4">Combine RAG with Perplexity-style search.</p>
               <div className="text-xs bg-black/30 p-3 rounded text-zinc-300 font-mono">
                 Inputs: Company Wiki + Web Search<br/>
                 Model: Gemini 1.5 Pro (Large Context)<br/>
                 Output: "State of the Union" Report
               </div>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl hover:border-accent-500/50 border border-transparent transition-colors group">
               <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent-500 transition-colors">The "Coding Buddy" Pipeline</h4>
               <p className="text-sm text-zinc-400 mb-4">Stop copy-pasting code manually.</p>
               <div className="text-xs bg-black/30 p-3 rounded text-zinc-300 font-mono">
                 Tool: Cursor<br/>
                 Config: Add Docs URL to @Docs<br/>
                 Prompt: "Scaffold a Next.js page using these docs."
               </div>
            </div>

          </div>
        </section>
      </div>
    )
  }
];