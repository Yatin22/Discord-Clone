const AuthLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="bg-red h-full">
        {children}
        </div>
    );
}
 
export default AuthLayout;