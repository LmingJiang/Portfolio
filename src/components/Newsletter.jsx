export default function Newsletter() {
  return (
    <section className="py-20 md:py-28">
      <h3 className="font-serif text-4xl md:text-5xl">Join our community</h3>
      <div className="mt-8 flex max-w-xl gap-3">
        <input className="flex-1 border border-white/20 bg-transparent px-4 py-3 text-sm" placeholder="Your email" />
        <button className="border border-cyan-300/50 px-5 py-3 text-sm">Subscribe</button>
      </div>
    </section>
  );
}
