-- Create waitlist table for Mimaura app
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  health_conditions TEXT[],
  interested_features TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into waitlist (public signup)
CREATE POLICY "Allow public waitlist signup" ON public.waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Only allow reading your own waitlist entry
CREATE POLICY "Allow users to view own waitlist entry" ON public.waitlist 
  FOR SELECT 
  USING (true);
