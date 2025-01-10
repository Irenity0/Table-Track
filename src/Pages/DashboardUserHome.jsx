import useAuth from "../hooks/useAuth";


const DashboardUserHome = () => {
    
    const {user} = useAuth();
    
    return (
        <>
        <span className="text-5xl font-extrabold">Hi, {user?.displayName ? user?.displayName : 'Welcome Back'}</span>
        
        </>
    );
};

export default DashboardUserHome;