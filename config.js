import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://zrannyqhajhhzfdsvufp.supabase.co';
const SUPABASE_KEY = 'PASTE_YOUR_EXISTING_PUBLISHABLE_KEY_HERE';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
