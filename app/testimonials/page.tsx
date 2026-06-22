import TestimonialsPage from '@/components/TestimonialsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials — Viruthi',
  description:
    'Real stories from real couples. Read what clients say about their journey at Viruthi Relationship Counselling.',
};

export default function Testimonials() {
  return (
    <main style={{ background: '#FFFFFF', position: 'relative' }}>
      <TestimonialsPage />
    </main>
  );
}
