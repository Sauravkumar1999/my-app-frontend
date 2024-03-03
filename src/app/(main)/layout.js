import Footer from "@/components/footer/Footer"
import { MainNavBar } from "@/components/navbar/Navbar"

export default function Layout({ children }) {
    return (
        <>
            <MainNavBar />
            {children}
            <Footer />
        </>
    )

}