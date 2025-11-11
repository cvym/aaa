import { motion } from "framer-motion";

interface NavBarProps {
  onStartPurchase: () => void;
}

const NavBar = ({ onStartPurchase }: NavBarProps) => {
  return (
    <header className="sticky top-0 z-50 pt-6">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="nav-shell flex items-center justify-between rounded-full px-6 py-3"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <a href="#top" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full bg-gradient-to-br from-brand via-brand-accent to-brand-light shadow-[0_18px_36px_-18px_rgba(138,92,246,0.9)]">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_70%)]" />
            </div>
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.45em] text-white/50">S1lents</p>
              <p className="text-lg font-semibold leading-tight text-white">Custom Discord Bots</p>
            </div>
          </a>

          <motion.nav
            className="flex items-center gap-5 text-sm font-medium"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <a href="#features" className="link-underline text-white/70 transition hover:text-white">
              Features
            </a>
            <a href="#pricing" className="link-underline text-white/70 transition hover:text-white">
              Pricing
            </a>
            <a href="#process" className="link-underline text-white/70 transition hover:text-white">
              Process
            </a>
            <a href="#reviews" className="link-underline text-white/70 transition hover:text-white">
              Reviews
            </a>
            <motion.button
              className="rounded-full bg-gradient-to-r from-brand to-brand-accent px-5 py-2 font-semibold text-white shadow-[0_18px_40px_-20px_rgba(88,101,242,0.85)] transition hover:from-brand-accent hover:to-brand"
              whileTap={{ scale: 0.96 }}
              onClick={onStartPurchase}
            >
              Purchase
            </motion.button>
          </motion.nav>
        </motion.div>
      </div>
    </header>
  );
};

export default NavBar;

