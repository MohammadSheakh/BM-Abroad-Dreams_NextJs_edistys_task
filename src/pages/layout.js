import Footer from "@/component/common/Layout/Footer";
import Navbar from "@/component/common/Layout/Navbar";

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-mainBackgroundColor">
            {/* className="bg-mainBackgroundColor" */}
            <Navbar />
            <main>{children}</main>
            <Footer />
        </html>
    );
}
