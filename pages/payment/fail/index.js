// Import the necessary modules
import ErrorIcon from '@mui/icons-material/Error';
import { useRouter } from 'next/router';

// Define the Fail component
function Fail() {
  // Use the useRouter hook to access the router instance
  const router = useRouter();

  return (
    <div className='mt-[50px] h-[100vh] flex justify-center items-center border'>
      <div className='w-[500px] h-[350px] border border-black flex flex-col justify-center items-center shadow-3xl'>
        <ErrorIcon sx={{ color: "#E30000", fontSize: "150px" }} />
        <h3 className='text-[#656565] text-[35px]'>Your Payment Failed</h3>
        <p className='text-black text-[20px]'>Please try again</p>
        {/* Ensure that the router is only used on the client side */}
        <button
          className='mt-[8px] ml-[10px] bg-white text-blue-800 w-[150px] h-[40px] rounded-[0px] border border-black tracking-wide leading-3 mb-[20px] hover:bg-[#374A94] hover:text-[#fff] hover:border '
          onClick={() => router.push("/")}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

// Export the Fail component
export default Fail;
