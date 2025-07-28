import React from 'react';
import banner from '../assets/images/tech_banner.png'

function Tech() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Full-Stack AI, Reimagined for Mobility</h1>
        <p className="text-lg max-w-2xl mx-auto text-white/80">
          We don't just sell AI — we operate as AI. Our platform is built around automation from day one, with LLMs used exactly where they shine.
        </p>
      </section>

      {/* Architecture Diagram */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Platform Architecture</h2>
        <img
          src={banner}
          alt="AI Architecture"
          className="mx-auto border border-white/10 rounded-xl"
        />
        <p className="text-sm text-white/60 mt-2">
          Onboarding and ride operations powered by automation. LLMs strictly used in rider co-pilot and support contexts.
        </p>
      </section>

      {/* System Capabilities */}
      <section className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
        {[
          {
            title: 'Automated Dispatch & Routing',
            description: 'No LLMs here. We use fast rule-based algorithms and realtime traffic signals for city-wide trip routing.',
          },
          {
            title: 'Co-Pilot LLM Assistants',
            description: 'Riders get an optional AI assistant who speaks their language, tracks trip progress, and answers in seconds.',
          },
          {
            title: 'Support via AI Agent',
            description: 'LLMs help drivers and riders report issues, get policy help, or resolve trip-related complaints—no waiting.',
          },
          {
            title: 'Secure Driver Operations',
            description: 'Verification, balance handling, and fleet status are automated and traceable. No hallucinations allowed.',
          },
        ].map((item, i) => (
          <div key={i} className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-white/80">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Tech Logos */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Tech We Use</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
          <span className="px-3 py-1 border border-white/20 rounded-full">Supabase</span>
          <span className="px-3 py-1 border border-white/20 rounded-full">OpenAI (for LLM support only)</span>
          <span className="px-3 py-1 border border-white/20 rounded-full">Flutter</span>
          <span className="px-3 py-1 border border-white/20 rounded-full">LangChain (support only)</span>
          <span className="px-3 py-1 border border-white/20 rounded-full">Remix</span>
          <span className="px-3 py-1 border border-white/20 rounded-full">Pinecone</span>
          <span className="px-3 py-1 border border-white/20 rounded-full">Vercel</span>
        </div>
      </section>

      {/* Optional Demo Video */}
      {/* <section className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">See It In Action</h2>
        <video controls className="rounded-xl w-full shadow-xl" src="/media/ai-platform-demo.mp4" />
        <p className="text-white/60 text-sm">Demo of real-time ride routing and LLM support interactions.</p>
      </section> */}
    </div>
  );
}

// function Tech() {
//   return (
//     <div className="space-y-16">
//       {/* Hero */}
//       <section className="text-center space-y-4">
//         <h1 className="text-4xl font-bold">Built as a Full-Stack AI Platform</h1>
//         <p className="text-lg max-w-2xl mx-auto text-white/80">
//           Yaimo doesn’t just use AI—we are AI-native. Our LLMs and agents orchestrate the ride-hailing experience end to end.
//         </p>
//       </section>

//       {/* Architecture Diagram */}
//       <section className="max-w-4xl mx-auto text-center">
//         <h2 className="text-2xl font-semibold mb-4">System Architecture</h2>
//         <img
//           src="/media/aimobility-architecture.svg"
//           alt="AI Architecture"
//           className="mx-auto border border-white/10 rounded-xl"
//         />
//         <p className="text-sm text-white/60 mt-2">Real-time agent orchestration + vector memory + stream dispatch engine.</p>
//       </section>

//       {/* Tech Stack */}
//       <section className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
//         {[
//           {
//             title: 'Dispatch AI Agents',
//             description: 'Each city runs autonomous dispatchers trained on local traffic, geography, and demand cycles. They talk to drivers via LLM-powered dialogs.',
//           },
//           {
//             title: 'Rider Co-Pilots',
//             description: 'Every ride comes with an AI co-pilot. It chats with the rider, provides ETA updates, and handles route disputes on the fly.',
//           },
//           {
//             title: 'Vector Memory',
//             description: 'Driver behavior, trip issues, and feedback are stored in a vector DB and retrieved using semantic search for personalized decisions.',
//           },
//           {
//             title: 'Multilingual LLM Interface',
//             description: 'Our AI agents operate in French, English, Ewe, Yoruba, and more. Riders and drivers use voice or chat with zero friction.',
//           },
//         ].map((item, i) => (
//           <div key={i} className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
//             <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//             <p className="text-sm text-white/80">{item.description}</p>
//           </div>
//         ))}
//       </section>

//       {/* Tools / Tech Logos */}
//       <section className="text-center space-y-4">
//         <h2 className="text-2xl font-semibold">Powered By</h2>
//         <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
//           <span className="px-3 py-1 border border-white/20 rounded-full">OpenAI GPT-4</span>
//           <span className="px-3 py-1 border border-white/20 rounded-full">Pinecone</span>
//           <span className="px-3 py-1 border border-white/20 rounded-full">Supabase</span>
//           <span className="px-3 py-1 border border-white/20 rounded-full">FastAPI</span>
//           <span className="px-3 py-1 border border-white/20 rounded-full">Remix / React Router</span>
//           <span className="px-3 py-1 border border-white/20 rounded-full">Langchain</span>
//           <span className="px-3 py-1 border border-white/20 rounded-full">Vercel</span>
//         </div>
//       </section>

//       {/* Optional Video */}
//       <section className="max-w-4xl mx-auto text-center space-y-4">
//         <h2 className="text-2xl font-semibold">Platform Demo</h2>
//         <video controls className="rounded-xl w-full shadow-xl" src="/media/ai-platform-demo.mp4" />
//         <p className="text-white/60 text-sm">Watch how our agents assign, route, and chat through real-time simulation.</p>
//       </section>
//     </div>
//   );
// }


export default Tech;