import React from 'react';
import aiRide from '../assets/images/homevideo.png';

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover opacity-30"
          src="/media/ride-hero.mp4"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to Yaimo</h1>
          <p className="text-lg max-w-2xl mx-auto">
            The first ride-hailing platform powered entirely by AI agents—from dispatch to driver support.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {[
          { title: 'AI Dispatching', desc: 'Real-time optimized routing powered by LLMs and agent memory.' },
          { title: 'Driver-Centric Design', desc: 'No surprise bans, instant support, fair pricing.' },
          { title: 'Global & Borderless', desc: 'One platform across cities and borders, no ops needed.' },
        ].map((f, i) => (
          <div key={i} className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* AI Preview */}
      <section className="text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">See How It Feels to Ride with Yaimo</h2>
        <div className="max-w-xl mx-auto border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur">
          <p className="italic mb-4">"Hi Winner! I’ll be your AI ride host today. Let’s get you to the market safely and smoothly."</p>
          <img
            className="rounded-lg shadow-lg w-full"
            // controls
            src={aiRide}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/5 py-12">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl font-semibold">What Drivers Are Saying</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="p-4 border border-white/10 rounded-xl">
              “With Yaimo, I finally feel respected. The AI helped me fix an issue in seconds.”
              <div className="mt-2 text-xs text-white/60">— Sami, Moto driver in Lomé</div>
            </div>
            <div className="p-4 border border-white/10 rounded-xl">
              “I used to be scared of getting suspended. Now I talk to an agent that listens to me first.”
              <div className="mt-2 text-xs text-white/60">— Aïcha, Gozem switcher</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Ready to Drive or Ride with Us?</h2>
        <a
          href="/contact"
          className="inline-block px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-full"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}

// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
// import { Link } from "react-router";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// // export default function Home() {
// //   return <Welcome />;
// // }
// const Home = () => (
//   <section className="space-y-6">
//     <h2 className="text-4xl sm:text-5xl font-bold">AI-Native Ride-Hailing</h2>
//     <p className="text-lg sm:text-xl max-w-2xl">
//       We're not selling tools to ride-hailing companies. We're replacing them.
//       Our AI agents onboard drivers, dispatch rides, and host each trip like a co-pilot.
//     </p>
//     <div>
//       <Link
//         to="/apply"
//         className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
//       >
//         Apply to YC with Us
//       </Link>
//     </div>
//   </section>
// );

export default Home;