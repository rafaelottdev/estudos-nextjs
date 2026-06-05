import "@/styles/globals.sass"

import Header from "@/layout/Header/Header"
import Footer from "@/layout/Footer/Footer"
import Sidebar from "@/layout/Sidebar/Sidebar"

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <Header />

                <Sidebar />

                <main>
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
