import { PUBLIC_SB_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(PUBLIC_SB_URL, PUBLIC_SUPABASE_KEY);