// pages/404.js
// import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <button onClick={handleGoHome} className="mt-8 text-blue-500 hover:text-blue-700">Go back to home</button>
    </div>
  );
}
