/**
 * Main Landing Page
 * Combines all sections for GeneraDocs MVP
 * Updated with new UseCases section
 */

import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import UseCases from '@/components/UseCases';
import ForWho from '@/components/ForWho';
import Demo from '@/components/Demo';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <UseCases />
      <ForWho />
      <Demo />
      <FinalCTA />
      <Footer />
    </main>
  );
}
