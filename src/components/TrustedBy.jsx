export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-white/10">

      <div className="max-w-6xl mx-auto px-8">

        <p className="text-center uppercase tracking-[0.3em] text-gray-400 text-sm mb-10">
          Trusted by innovative teams
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-2xl font-bold text-gray-400">

          <span>Google</span>

          <span>Microsoft</span>

          <span>OpenAI</span>

          <span>Stripe</span>

          <span>Notion</span>

        </div>

      </div>

    </section>
  );
}