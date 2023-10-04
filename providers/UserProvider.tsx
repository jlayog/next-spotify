"use client";

// Import the UserContextProvider from the hooks folder
import { MyUserContextProvider } from "@/hooks/useUser";

// Create an interface for the UserProviderProps
interface UserProviderProps {
    children: React.ReactNode;
};

// Create a React functional component called UserProvider
const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    // Return the UserContextProvider with the children passed in
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}

// Export the UserProvider component
export default UserProvider;