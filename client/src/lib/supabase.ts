import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rzybeieghgpchebvfhtc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6eWJlaWVnaGdwY2hlYnZmaHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0NDEwOTIsImV4cCI6MjA4MzAxNzA5Mn0.cnxtU2BIKAzmNIBlI-mYqHlPqR-cgK7F_KCM0MdNInk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
