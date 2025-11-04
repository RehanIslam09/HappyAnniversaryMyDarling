import Link from 'next/link';
import Header from '@/Components/header';
import FlowerSide from '@/Components/flowerSide';
import HomeSection from '@/Components/HomeSection';
import FlowerSideLeft from '@/Components/FlowerSideLeft';

export default function Home() {
  return (
    <main>
      <Header />
      <FlowerSideLeft />
      <FlowerSide />
      <HomeSection />
    </main>
  );
}
