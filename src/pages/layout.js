import Footer from "@/component/common/Layout/Footer";
import Navbar from "@/component/common/Layout/Navbar";

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className="bg-mainBackgroundColor flex flex-col  justify-center "
        >
            {/* w-screen  mx-2 my-2 border-black border-2*/}
            <Navbar />
            <main className=" flex justify-center">
                {/* mx-2 my-2 border-black border-2 */}
                {children}
            </main>
            <Footer />
        </html>
    );
}
