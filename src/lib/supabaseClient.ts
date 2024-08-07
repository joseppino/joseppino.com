import { env } from '$env/dynamic/public';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://nuyavgdfgnfsizjcvrds.supabase.co', (env.PUBLIC_SUPABASE_KEY));