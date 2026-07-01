<script setup>
import { ref } from 'vue'
import AppNav from './components/AppNav.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import TaxReformSection from './components/TaxReformSection.vue'
import CompetitorsSection from './components/CompetitorsSection.vue'
import HowItWorksSection from './components/HowItWorksSection.vue'
import CTASection from './components/CTASection.vue'
import AppFooter from './components/AppFooter.vue'
import TaxAlertModal from './components/TaxAlertModal.vue'
import { useScrollReveal } from './composables/useScrollReveal'

useScrollReveal()

const showTaxModal = ref(true)
</script>

<template>
  <TaxAlertModal v-if="showTaxModal" @close="showTaxModal = false" />
  <AppNav />
  <main>
    <HeroSection />
    <StatsSection />
    <FeaturesSection />
    <TaxReformSection />
    <CompetitorsSection />
    <HowItWorksSection />
    <CTASection />
  </main>
  <AppFooter />
</template>

<style>
main { position: relative; }
</style>
