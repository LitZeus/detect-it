import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      'Supabase configuration is missing. Please make sure to:',
      '\n1. Click the "Connect to Supabase" button in the top right',
      '\n2. Create a new Supabase project',
      '\n3. Copy your Supabase URL and anon key',
      '\n4. Create a .env file with:',
      '\n   VITE_SUPABASE_URL=your_supabase_url',
      '\n   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key'
    );
    // Provide a mock client that shows helpful error messages
    return createClient('https://example.com', 'mock-key', {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();