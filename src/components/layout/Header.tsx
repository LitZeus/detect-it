import { supabase } from '@/lib/supabase';
import { Brain } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAuthenticated(!!user);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setIsAuthenticated(!!session?.user);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <header className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <Brain className="h-8 w-8 text-primary-foreground" />
            <h1 className="text-2xl font-bold text-primary-foreground">
              Detection of Varicose Veins
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {!isAuthenticated && (
                <li>
                  <Link to="/" className="text-primary-foreground hover:text-primary-foreground/80">
                    Home
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li>
                  <Link to="/dashboard" className="text-primary-foreground hover:text-primary-foreground/80">
                    Dashboard
                  </Link>
                </li>
              )}
              <li>
                <Link to="/" className="text-primary-foreground hover:text-primary-foreground/80">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
