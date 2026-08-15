'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthBackground from '../components/auth/AuthBackground';

type AuthView = 'login' | 'signup' | 'forgot';

export default function AuthPage() {
  const router = useRouter();
  const [view, setView] = useState<AuthView>('login');
  
  // Login & Shared States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Expanded Sign Up States
  const [fullName, setFullName] = useState('');
  const [university, setUniversity] = useState('');
  const [username, setUsername] = useState('');
  const [year, setYear] = useState('');

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (view === 'login') {
      document.cookie = "token=true; path=/";
      router.push('/library');
    } else if (view === 'signup') {
      console.log('Registering user with full details:', { 
        fullName, 
        university, 
        username, 
        year, 
        email, 
        password 
      });
      alert('Registration successful! Switching to login view.');
      setView('login');
    } else {
      console.log('Sending reset link to:', email);
      alert('Reset link sent successfully!');
      setView('login');
    }
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 bg-black select-none text-white">
      <AuthBackground />

      <div className="w-full max-w-[360px] space-y-3 z-10 text-white">
        
        {/* Main Box Container */}
        <div 
          style={{ borderRadius: '20px' }} 
          className="bg-black border border-white/20 p-8 pt-10 pb-6 flex flex-col items-center shadow-2xl box-border overflow-hidden text-white"
        >
          {/* Logo Heading */}
          <h1 className="text-4xl font-bold mb-8 tracking-tighter italic text-white font-sans">
            PupilMD
          </h1>
          
          <form onSubmit={handleAuthSubmit} className="w-full flex flex-col gap-3 box-border">
            
            {/* VIEW 1: LOGIN FORM */}
            {view === 'login' && (
              <>
                <div className="w-full box-border">
                  <input
                    type="text"
                    placeholder="Mobile number, username, or email"
                    style={{ borderRadius: '6px', color: 'white' }}
                    className="w-full bg-[#121212] border border-white/10 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-white/40 box-border"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full box-border">
                  <input
                    type="password"
                    placeholder="Password"
                    style={{ borderRadius: '6px', color: 'white' }}
                    className="w-full bg-[#121212] border border-white/10 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-white/40 box-border"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  style={{ borderRadius: '8px' }}
                  className="w-full bg-[#4cb5f9] hover:bg-[#0095f6] text-white font-semibold py-2 text-sm mt-2 transition-colors"
                >
                  Log in
                </button>
              </>
            )}

            {/* VIEW 2: EXPANDED SIGN UP FORM (Forced White Text Inline) */}
            {view === 'signup' && (
              <>
                <div className="w-full box-border">
                  <input
                    type="text"
                    placeholder="Full name"
                    style={{ borderRadius: '6px', color: 'white' }}
                    className="w-full bg-[#121212] border border-white/10 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-white/40 box-border"
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full box-border">
                  <input
                    type="text"
                    placeholder="University"
                    style={{ borderRadius: '6px', color: 'white' }}
                    className="w-full bg-[#121212] border border-white/10 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-white/40 box-border"
                    onChange={(e) => setUniversity(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full box-border">
                  <input
                    type="text"
                    placeholder="Username"
                    style={{ borderRadius: '6px', color: 'white' }}
                    className="w-full bg-[#121212] border border-white/10 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-white/40 box-border"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full box-border">
                  <input
                    type="text"
                    placeholder="Year"
                    style={{ borderRadius: '6px', color: 'white' }}
                    className="w-full bg-[#121212] border border-white/10 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-white/40 box-border"
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full box-border">
                  <input
                    type="email"
                    placeholder="Email"
                    style={{ borderRadius: '6px', color: 'white' }}
                    className="w-full bg-[#121212] border border-white/10 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-white/40 box-border"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full box-border">
                  <input
                    type="password"
                    placeholder="Password"
                    style={{ borderRadius: '6px', color: 'white' }}
                    className="w-full bg-[#121212] border border-white/10 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-white/40 box-border"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  style={{ borderRadius: '8px' }}
                  className="w-full bg-[#4cb5f9] hover:bg-[#0095f6] text-white font-semibold py-2 text-sm mt-2 transition-colors"
                >
                  Sign up
                </button>
              </>
            )}

            {/* VIEW 3: FORGOT PASSWORD FORM (Forced White Text Inline) */}
            {view === 'forgot' && (
              <>
                <p className="text-white/70 text-xs text-center mb-2 px-2 leading-relaxed">
                  Enter your email and we'll send you a link to get back into your medical account.
                </p>
                <div className="w-full box-border">
                  <input
                    type="email"
                    placeholder="Email Address"
                    style={{ borderRadius: '6px', color: 'white' }}
                    className="w-full bg-[#121212] border border-white/10 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-white/40 box-border"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  style={{ borderRadius: '8px' }}
                  className="w-full bg-[#4cb5f9] hover:bg-[#0095f6] text-white font-semibold py-2 text-sm mt-2 transition-colors"
                >
                  Send Login Link
                </button>
              </>
            )}

          </form>

          {/* Divider Elements */}
          <div className="flex items-center w-full my-6">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="px-3 text-white/40 text-xs font-semibold uppercase tracking-wider">or</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          {view !== 'login' ? (
            <button 
              onClick={() => setView('login')} 
              className="text-[#4cb5f9] hover:text-[#0095f6] text-xs font-semibold hover:underline mb-2 transition-colors"
            >
              Back to Login
            </button>
          ) : (
            <button 
              onClick={() => setView('forgot')} 
              className="text-[#4cb5f9] hover:text-[#0095f6] text-xs font-normal hover:underline mb-2 transition-colors"
            >
              Forgot password?
            </button>
          )}
        </div>

        {/* Bottom Switch Box Container */}
        <div 
          style={{ borderRadius: '20px' }} 
          className="w-full bg-black border border-white/20 p-5 text-center shadow-sm box-border text-white"
        >
          {view === 'signup' ? (
            <p className="text-sm text-white/60">
              Have an account?{' '}
              <button 
                onClick={() => setView('login')} 
                className="text-[#4cb5f9] hover:text-[#0095f6] font-semibold cursor-pointer hover:underline transition-colors"
              >
                Log in
              </button>
            </p>
          ) : (
            <p className="text-sm text-white/60">
              Don't have an account?{' '}
              <button 
                onClick={() => setView('signup')} 
                className="text-[#4cb5f9] hover:text-[#0095f6] font-semibold cursor-pointer hover:underline transition-colors"
              >
                Sign up
              </button>
            </p>
          )}
        </div>

      </div>
    </main>
  );
}