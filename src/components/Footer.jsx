export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-20 text-sm text-white/70">
      <p className="mx-auto mb-10 max-w-4xl text-center font-serif text-3xl italic text-white">“Complex capability should feel clear, confident and actionable.”</p>
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 md:grid-cols-12 md:px-20">
        <div className="md:col-span-4">
          <p className="mb-4 text-white">Newsletter</p>
          <p>hello@portfolio-designer.com</p>
        </div>
        <div className="grid gap-8 md:col-span-8 md:grid-cols-3">
          <div><p className="text-white">HQ</p><p>Chengdu</p></div>
          <div><p className="text-white">Links</p><p>About / Works / Process</p></div>
          <div><p className="text-white">Social</p><p>LinkedIn / Behance</p></div>
        </div>
      </div>
    </footer>
  );
}
