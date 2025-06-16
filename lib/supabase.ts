import { createClient } from "@supabase/supabase-js"
import {auth} from "@clerk/nextjs/server"

export const createSupabaseClient= () => {
    // our use gets created when he does signup in the clerk but our database is in the supabase
    // So createClient is the method which helps us to link that user from clerk to supabase
    // auth() is the method which returns the currrent logged in user's token , name , id 

    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
            async accessToken(){
                return ((await auth()).getToken())
            }
        }
    )
}