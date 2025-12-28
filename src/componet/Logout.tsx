import { useEffect } from "react";
import { logoutUser } from "../utils/auth";

const LogoutPage = () => {
    
    useEffect(() => {
        logoutUser();

        window.location.replace("https://www.google.com");
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            Logging you out...
        </div>
    );
};

export default LogoutPage;
