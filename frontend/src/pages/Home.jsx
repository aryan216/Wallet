import { useNavigate } from "react-router-dom";
export function Home() {
  const navigate=useNavigate();  
  return (
    <div className="App">
      {/* Header Section */}
      <header className="bg-teal-600 text-white p-5 flex justify-between items-center">
        <div className="text-xl font-bold">PayFast</div>
        
        <button onClick={(e)=>{
            navigate("/signin")
        }} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-400">Login</button>
      </header>

      {/* Hero Section */}
      <section className="bg-teal-800 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Fast, Secure Payments</h1>
        <p className="text-xl mb-6">Send and receive money instantly with just a few clicks. Simplified payments for everyone.</p>
        <button onClick={(e)=>{
            navigate("/signup")}} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-400">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="flex justify-around flex-wrap gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <h3 className="text-2xl font-semibold mb-4">Secure Payments</h3>
            <p>Your transactions are protected with the highest security standards.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <h3 className="text-2xl font-semibold mb-4">Instant Transfers</h3>
            <p>Send money instantly to anyone around the world.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <h3 className="text-2xl font-semibold mb-4">Low Fees</h3>
            <p>Enjoy some of the lowest transaction fees in the market.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-600 text-white py-4">
        <p className="text-center">&copy; 2024 PayFast. All rights reserved.</p>
        
      </footer>
    </div>
  );
}


