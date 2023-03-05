import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

//dotenv config
dotenv.config();

//supabase setup
const supabaseUrl = "https://tghtmxvonwrxpqauhixi.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
    },
});

export default supabase;
