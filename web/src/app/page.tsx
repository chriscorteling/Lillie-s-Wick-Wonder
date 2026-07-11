import Hero from '@/components/Hero'
import NewsBanner from '@/components/NewsBanner'
import FeaturedCollections from '@/components/FeaturedCollections'
import BrandStory from '@/components/BrandStory'
import Newsletter from '@/components/Newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsBanner />
      <FeaturedCollections />
      <BrandStory />
      <Newsletter />
    </>
  )
}
