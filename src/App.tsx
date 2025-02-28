import { ProfileForm } from '@/components/auth/ProfileForm';
import { Layout } from '@/components/layout/Layout';
import { Toaster } from '@/components/ui/sonner';
import { supabase } from '@/lib/supabase';
import { Dashboard } from '@/pages/Dashboard';
import { Home } from '@/pages/Home';
import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Navigate to="/dashboard" /> : <Home />} />
          <Route
            path="dashboard"
            element={user ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            path="profile"
            element={user ? <ProfileForm /> : <Navigate to="/" />}
          />
          
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;