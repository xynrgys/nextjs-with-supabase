import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";

export default async function Index() {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="font-bold text-xl">Serpent</div>
          {isSupabaseConnected && <AuthButton />}
        </nav>
      </header>

      {/* Hero Section */}
      <div className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <Header />
          <h1 className="text-4xl font-bold mb-6">Welcome to Serpent</h1>
          <p className="text-lg mb-8 text-center">
            Discover the power of Serpent, a cutting-edge platform that revolutionizes the way you work.
          </p>
          <DeployButton />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.
            </p>
          </div>
          {/* Add more feature cards here */}
        </div>
      </div>

      {/* Next Steps Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Next Steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/young-so-273827132/"
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:underline"
            >
              Young
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
