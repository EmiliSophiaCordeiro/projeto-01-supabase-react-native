import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'SUA_URL';
const supabaseAnonKey = 'SUA_CHAVE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);