import { motion } from "framer-motion";

interface HeroSectionProps {
  onStartPurchase: () => void;
}

const HeroSection = ({ onStartPurchase }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-28 sm:py-32">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-aurora" aria-hidden="true" />

      <div className="relative z-[1] mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pill"
          >
            <span>Custom Bots</span>
            <span className="divider" />
            <span>Hosting</span>
            <span className="divider" />
            <span>Support</span>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
          >
            Build the Discord bot your community deserves —
            <span className="gradient-text"> in English and French.</span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-base text-white/70 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            __S1lents__ delivers stable, reliable and tailor-made Discord bots. From moderation to
            economy systems, analytics, AI assistants, ticket flows and web integrations, we
            engineer the exact features you need — plus optional 24/7 hosting.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
          >
            <button
              onClick={onStartPurchase}
              className="rounded-full bg-gradient-to-r from-brand to-brand-accent px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_20px_45px_-20px_rgba(88,101,242,0.9)] transition hover:from-brand-accent hover:to-brand"
            >
              Start your project
            </button>
            <a
              href="https://discord.gg/AfQj8wJApb"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:border-white hover:bg-white/5 hover:text-white"
            >
              Join Support Server
            </a>
          </motion.div>

          <motion.div
            className="grid gap-4 text-sm text-white/70 sm:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-5">
              <p className="text-white">Built for growth</p>
              <p className="mt-2 text-white/70">
                Automations, dashboards & smart onboarding to scale your server.
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-white">Hosting ready</p>
              <p className="mt-2 text-white/70">
                Keep your bot online 24/7 with monitoring, alerts and quick fixes.
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-white">2 languages</p>
              <p className="mt-2 text-white/70">
                Process, documentation & support disponibles en français et anglais.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="glass card-accent flex-1 rounded-3xl p-8 shadow-[0_0_55px_-18px_rgba(88,101,242,0.45)]"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-brand-light">Quick overview</p>
          <h3 className="mt-4 text-2xl font-heading font-semibold text-white">From idea to live bot.</h3>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
              <span>Modular architecture with TypeScript / Python micro-services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
              <span>Lavalink, AI models, web dashboards, OAuth2 flows ready</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
              <span>Staging environment included before production rollout</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
              <span>Ticket-based support with SLAs agreed upfront</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
              <span>Optional analytics portal & staff training session</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

