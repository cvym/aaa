const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[rgba(6,7,18,0.76)] py-10 text-sm text-white/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} S1lents. Custom Discord bots & hosting.</p>
        <div className="flex gap-4">
          <a href="mailto:contact@s1lents.dev" className="transition hover:text-white">
            contact@s1lents.dev
          </a>
          <a href="https://discord.gg/AfQj8wJApb" className="transition hover:text-white">
            Discord
          </a>
          <a href="https://github.com" className="transition hover:text-white">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

