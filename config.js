
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://zrannyqhajhhzfdsvufp.supabase.co/rest/v1/;
const SUPABASE_KEY = 'sb_publishable_itf2yjowZNGgKj_XIgkN8Q_9xcRY_Yk;

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
