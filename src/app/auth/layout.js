import { AuthNavBar } from "@/components/navbar/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <div className='h-screen bg-pink-100'>
                <AuthNavBar />
                {children}
            </div>
        </>
    )

}