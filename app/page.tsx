export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-drake-900 to-drake-500">
      <nav className="bg-black bg-opacity-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">🎵 Drake Ranker</h1>
          <div className="space-x-4">
            <a href="/auth/login" className="text-white hover:text-gray-300">Login</a>
            <a href="/auth/signup" className="bg-drake-500 text-white px-4 py-2 rounded hover:bg-drake-600">Sign Up</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Rank Drake's Best Songs</h2>
          <p className="text-xl text-gray-200 mb-8">Create your own Drake ranking, share it with the community, and see what others think</p>
          <a href="/auth/signup" className="inline-block bg-drake-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-drake-600 transition">
            Get Started
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-bold mb-2">Create Rankings</h3>
            <p className="text-gray-600">Drag and drop to rank your favorite Drake songs in any order</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="text-xl font-bold mb-2">Share & Compete</h3>
            <p className="text-gray-600">Post your rankings and challenge friends to see who has the best taste</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="text-xl font-bold mb-2">Like & Discover</h3>
            <p className="text-gray-600">Like rankings from other users and discover new perspectives on Drake's catalog</p>
          </div>
        </div>

        <section className="bg-white rounded-lg p-8 shadow">
          <h3 className="text-2xl font-bold mb-4">Popular Rankings</h3>
          <p className="text-gray-600">Sign in to see the community's top ranked Drake song lists</p>
        </section>
      </main>
    </div>
  )
}
