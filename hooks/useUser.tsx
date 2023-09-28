// Load User Details & Subscription check

import { User } from "@supabase/auth-helpers-nextjs";
import { 
    createContext,
    useContext, 
    useState,
    useEffect 
} from "react";

import { Subscription, UserDetails } from "@/types";
// Remap useUser to avoid conflicts in naming schema
import { 
        useSessionContext, 
        useUser as useSupaUser 
} from "@supabase/auth-helpers-react";

type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined >(
    undefined
);

export interface Props {
    [propName: string]: any;
};

export const MyUserContextProvider = (props: Props) => {
    // Get session and supabase client from session context
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase
    } = useSessionContext();
    // get user from supabase
    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoading] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    // Fetch from database
    const getUserDetails = () => supabase.from('users').select('*').single();
    const getSubscription = () => supabase
                                    .from('subscriptions')
                                    .select('*, prices(*, products(*))')
                                    .in('status', ['trialing', 'active'])
                                    .single();
    // Fetch user details and subscription from database when user is logged in
    useEffect(() => {
        // If user is loaded and user details and subscription are not loaded
        if (user && !isLoadingData && !userDetails && !subscription) {
            // Set loading to true
            setIsLoading(true);

            // Get user details and subscription in parallel
            Promise.allSettled([getUserDetails(), getSubscription()]).then(
                (results) => {
                    const userDetailsPromise = results[0];
                    const subscriptionPromise = results[1];

                    // If user details promise is resolved
                    if (userDetailsPromise.status === 'fulfilled') {
                        // Set user details
                        setUserDetails(userDetailsPromise.value.data as UserDetails);
                    }

                    // If subscription promise is resolved
                    if (subscriptionPromise.status === 'fulfilled') {
                        // Set subscription
                        setSubscription(subscriptionPromise.value.data as Subscription);
                    }

                    // Set loading to false if data passes check
                    setIsLoading(false);
                }
            );
        // If user is not loaded and user details and subscription are not loading
        } else if (!user && !isLoadingUser && !isLoadingData) {
            // Set user details and subscription to null
            setUserDetails(null);
            setSubscription(null);
        }
    }, [user, isLoadingUser]);

    // Create value object
    const value = {
        accessToken,
        user,
        userDetails,
        isLoading: isLoadingUser || isLoadingData,
        subscription
    };

    return <UserContext.Provider value={value} {...props} />
};

// Export a constant function called useUser which will return the UserContext
export const useUser = () => {
    // Get the UserContext from the UserContextProvider
    const context = useContext(UserContext);
    // If the context is undefined, throw an error
    if (context === undefined) {
        throw new Error('useUser must be used within a MyUserContextProvider');
    }
    // Return the context
    return context;
}