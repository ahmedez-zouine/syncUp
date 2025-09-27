-- Create waitlist table for Mimaura app (Version 2)
-- Drop table if exists to ensure clean creation
DROP TABLE IF EXISTS public.waitlist;

-- Create waitlist table
CREATE TABLE public.waitlist (
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

-- Allow reading waitlist entries (for admin purposes)
CREATE POLICY "Allow reading waitlist entries" ON public.waitlist 
  FOR SELECT 
  USING (true);

-- Verify table creation
SELECT 'Waitlist table created successfully' as status;
