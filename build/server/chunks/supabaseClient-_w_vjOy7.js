import { createClient } from '@supabase/supabase-js';

const PUBLIC_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51eWF2Z2RmZ25mc2l6amN2cmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NTI5NjgsImV4cCI6MjAxOTQyODk2OH0.pny8zqCICuhjqe5Qz-UvHXiOqvth5yyWsEbYk_2VElg";
const supabase = createClient("https://nuyavgdfgnfsizjcvrds.supabase.co", PUBLIC_SUPABASE_KEY);

export { supabase as s };
//# sourceMappingURL=supabaseClient-_w_vjOy7.js.map
