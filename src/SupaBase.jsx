
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tuwhfmwhvvoxhhvjewak.supabase.co'
const supabaseKey = 'sb_publishable_pE93MXdVf5I02Ah-iviLiQ_opcHPUVK'
export const supabase = createClient(supabaseUrl, supabaseKey)