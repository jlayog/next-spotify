"use client";

//import the useState hook from react
import { useState } from "react";

//import the types from the database
import { Database } from "@/types_db";
//import the auth helpers from the supabase library
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
//import the session context provider from the supabase library
import { SessionContextProvider } from "@supabase/auth-helpers-react";

//define the props for the component
interface SupabaseProviderProps {
    children:React.ReactNode;
};

//define the component
const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
    children 
}) => {
    //set the state for the client
    const [supabaseClient] = useState(() => 
        createClientComponentClient<Database>()
    );

    //return the session context provider with the client
    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}

//export the component
export default SupabaseProvider;