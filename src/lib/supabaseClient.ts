import { createClient } from '@supabase/supabase-js'

// MAYBE ABSTRACT OUT KEY???
export const supabase = createClient('https://nuyavgdfgnfsizjcvrds.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51eWF2Z2RmZ25mc2l6amN2cmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NTI5NjgsImV4cCI6MjAxOTQyODk2OH0.pny8zqCICuhjqe5Qz-UvHXiOqvth5yyWsEbYk_2VElg');