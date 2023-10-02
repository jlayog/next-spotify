"use client"

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    // Prevent errors caused by Modals (hydration errors)
    // Ensuring none of the modals can be opened or seen during server-side rendering
    // by changing isMounted to true, once client is loaded
    // There is react hooks trick for this but I forgot...
    useEffect(() =>{
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
            <UploadModal />
        </>
    )
}

export default ModalProvider; 