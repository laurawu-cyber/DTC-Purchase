import { useNavigate } from 'react-router'
import Header from './components/landing/Header'
import HeroSection from './components/landing/HeroSection'
import TrustBar from './components/landing/TrustBar'
import PlatformSection from './components/landing/PlatformSection'
import ProductivitySection from './components/landing/ProductivitySection'
import AiAssistantSection from './components/landing/AiAssistantSection'
import TestimonialsSection from './components/landing/TestimonialsSection'
import WorkspaceManagementSection from './components/landing/WorkspaceManagementSection'
import PrivacySection from './components/landing/PrivacySection'
import IntegrationsSection from './components/landing/IntegrationsSection'
import SecuritySection from './components/landing/SecuritySection'
import PricingSection from './components/landing/PricingSection'
import FaqSection from './components/landing/FaqSection'
import Footer from './components/landing/Footer'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <HeroSection onGetStarted={() => navigate('/sign-in')} />
        <TrustBar />
        <PlatformSection />
        <ProductivitySection />
        <AiAssistantSection />
        <TestimonialsSection />
        <WorkspaceManagementSection />
        <PrivacySection />
        <IntegrationsSection />
        <SecuritySection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
