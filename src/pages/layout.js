import Footer from "@/component/common/Layout/Footer";
import Navbar from "@/component/common/Layout/Navbar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </html>
    );
}
