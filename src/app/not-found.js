import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-6">
      <div className="text-center">
        {/* 404 Text with a soft shadow */}
        <h1 className="text-9xl font-extrabold text-[#244D3F] opacity-10">
          404
        </h1>
        
        {/* Absolute positioned content to overlap the big 404 */}
        <div className="relative -mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8 text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          {/* Simple Button - matched with your theme color */}
          <Link 
            href="/home" 
            className="inline-block bg-[#244D3F] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#1a3a2f] transition-all duration-300 active:scale-95"
          >
            Back to Homepage
          </Link>
        </div>

        {/* Minimal Illustration using CSS */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gray-200 rounded-full"></div>
          <div className="w-4 h-1 bg-[#244D3F] mx-2 rounded-full"></div>
          <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}