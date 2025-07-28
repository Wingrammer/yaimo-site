import React from 'react';
import ChatbotPreview from '~/components/ChatbotPreview';
import driverHeroImage from '../assets/images/driver_banner.png';

function Drivers() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Built for Drivers</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Yaimo is designed with one goal in mind: driver fairness and freedom.
        </p>
        <img
          src={driverHeroImage}
          alt="Friendly Driver Experience"
          className="w-full max-w-xl mx-auto rounded-xl border border-white/10"
        />
      </section>

      {/* Key Driver Perks */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {[
          {
            title: 'Automated Onboarding',
            desc: 'Drivers register via a fast automated process. No LLMs involved — just clean, clear steps.',
          },
          {
            title: 'Manual Verification Required',
            desc: 'We make sure every driver is real before activating their account. Trust matters.',
          },
          {
            title: '$10/Day Lease Model',
            desc: 'Drive freely once approved. Drivers owe $10 per day, deducted automatically or collected daily.',
          },
          {
            title: 'No Instant Suspensions',
            desc: 'Unlike competitors, we don’t auto-suspend without facts. Every case is reviewed fairly.',
          },
          {
            title: 'Equal Access for All',
            desc: 'Solo or fleet? Doesn’t matter. Everyone gets the same opportunities and support.',
          },
          {
            title: 'Multilingual Support',
            desc: 'Have issues? Our LLM-based agents speak your language and resolve disputes with care.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-white/80">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="text-center space-y-6 py-12">
        <h2 className="text-2xl font-semibold">How to Start Driving</h2>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6 text-sm text-white/90">
          <div className="p-4 border border-white/10 rounded-lg">1. Register via our app</div>
          <div className="p-4 border border-white/10 rounded-lg">2. Upload ID, license, and city info</div>
          <div className="p-4 border border-white/10 rounded-lg">3. Get verified and hit the road!</div>
        </div>
        <a
          href="/contact"
          className="inline-block mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
}

// function Drivers() {
//   return (
//     <div className="space-y-16">
//       {/* Hero Section */}
//       <section className="text-center space-y-4">
//         <h1 className="text-4xl font-bold">Built for Drivers</h1>
//         <p className="text-lg max-w-2xl mx-auto">
//           Yaimo is more than a platform — it's a fair, transparent partner. We built this with drivers in mind.
//         </p>
//         <img
//           src="/media/driver-friendly.png"
//           alt="Friendly Driver Experience"
//           className="w-full max-w-xl mx-auto rounded-xl border border-white/10"
//         />
//       </section>

//       {/* Driver Perks */}
//       <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
//         {[
//           {
//             title: 'No Surprise Suspensions',
//             desc: 'Your account is safe. We use LLMs to understand disputes before taking action.',
//           },
//           {
//             title: 'Instant Support',
//             desc: 'Get answers in seconds, not hours. Our AI agent is always online and multilingual.',
//           },
//           {
//             title: 'Fair & Transparent Pricing',
//             desc: 'We don’t take more than we should. You’ll always know where your money goes.',
//           },
//           {
//             title: 'Onboard in Minutes',
//             desc: 'Start driving today. No paperwork. Just a smart chat interface that handles everything.',
//           },
//           {
//             title: 'Keep Your Independence',
//             desc: 'Whether you own your vehicle or rent daily, our system works for you.',
//           },
//           {
//             title: 'No Favoritism',
//             desc: 'Fleet or solo, all drivers are treated equally with AI-driven fairness.',
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition"
//           >
//             <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//             <p className="text-sm text-white/80">{item.desc}</p>
//           </div>
//         ))}
//       </section>

//       {/* AI Agent Preview */}
//       <section className="max-w-4xl mx-auto space-y-6 text-center">
//         <h2 className="text-3xl font-bold">Meet Your AI Assistant</h2>
//         <p className="text-white/80">
//           Our AI chat agent helps you register, manage your trips, and resolve issues—all without ever waiting.
//         </p>
//         {/* <ChatbotPreview /> */}
//         <video
//           className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
//           controls
//           src="/media/ai-driver-onboarding.mp4"
//         />
//       </section>

//       {/* How to Start */}
//       <section className="text-center space-y-6 py-12">
//         <h2 className="text-2xl font-semibold">How to Get Started</h2>
//         <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6 text-sm text-white/90">
//           <div className="p-4 border border-white/10 rounded-lg">1. Open the App</div>
//           <div className="p-4 border border-white/10 rounded-lg">2. Talk to the Onboarding Bot</div>
//           <div className="p-4 border border-white/10 rounded-lg">3. Upload Docs & Start Driving</div>
//         </div>
//         <a
//           href="/contact"
//           className="inline-block mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
//         >
//           Join Now
//         </a>
//       </section>
//     </div>
//   );
// }

// const Drivers = () => (
//   <section className="space-y-4 max-w-xl">
//     <h2 className="text-3xl font-semibold">Driver-First Platform</h2>
//     <p>
//       No more instant suspensions, ignored support, or unfair commissions.
//       We’re building a fair, transparent platform where AI works for you.
//     </p>
//     <p>
//       Start with chat-based onboarding, AI-assisted ride resolution, and instant pay.
//     </p>
//   </section>
// );

export default Drivers;