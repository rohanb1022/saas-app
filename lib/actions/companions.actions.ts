"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const createCompanion = async ( formData : CreateCompanion) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data , error } = await supabase
        .from('companions')
        .insert({... formData , author})
        .select();

        console.log(data)
    if( error || !data){
        throw new Error(error?.message || "Failed to create Companion")
    }

    return data[0];
}