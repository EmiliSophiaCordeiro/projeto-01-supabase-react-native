import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xejbpqhbookzgvaqzpdd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlamJwcWhib29remd2YXF6cGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NDQ5MDUsImV4cCI6MjA5NDMyMDkwNX0.hQhVFIyO8bf5uPO20chVf_5kr_nRfUzGYx9ufo0eiuk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);