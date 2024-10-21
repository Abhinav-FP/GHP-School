import Layout from '@/layout/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Correct import statement

export default function NotFound() {

  return (
    <Layout>
    <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-6xl font-bold text-orange-600 mb-4">404</h1> */}
      <div className="flex flex-col items-center">
        <img
          src="/Home/Image404.png" // Replace this with your image URL
          alt="Page Not Found"
          className="mb-4"
        />
        <h2 className="text-[36px] text-[#1E1E1E] font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-500 text-center mb-6">
          Sorry, the page you are looking for is not available.
        </p>
        <Link
          href="/"
          className="px-6 py-2 text-[#EE834E] border-2 border-[#EE834E]"
        >
          Back to Home
        </Link>
      </div>
    </div>
    </Layout>
  );
}