import Layout from '@/layout/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Correct import statement

export default function NotFound() {

  return (
    <Layout>
      <div className='bg-white py-[50px] md:py-[60px] lg:py-[80px]'>
        <div className='container sm:container md:container lg:max-w-[1204px] px-4 mx-auto'>
          <div className="flex flex-col items-center justify-center">
            {/* <h1 className="text-6xl font-bold text-orange-600 mb-4">404</h1> */}
            <div className="flex flex-col items-center">
              <img
                src="/Home/Image404.png" // Replace this with your image URL
                alt="Page Not Found"
                className="mb-6 md:mb-[40px] lg:mb-[58px]"
              />
              <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em]">Page Not Found</h2>
              <p className="text-[#666666] font-medium text-base  gotham-font text-center mb-1.5 tracking-[-0.04em]  text-center mb-6 md:mb-[30px] lg:mb-[40px]">
                Sorry, the page you are looking for is not available.
              </p>
              <Link
                href="/"
                className="block text-[#EE834E] button-animation-border hover:text-white border border-[#EE834E] hover:border-[#ECCD6E]  text-base lg:text-lg rounded px-6 md:px-12 py-2 text-center tracking-[-0.04em]"
              >Back to Home </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}