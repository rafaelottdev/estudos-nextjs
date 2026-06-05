export default function RootLayout(
    {
        children,
        sidebar,
    }
    :
    Readonly<{children: React.ReactNode, sidebar: React.ReactNode}>
) {
    return (
        <html lang="en">
            <body>
                {children}
                {sidebar}
            </body>
        </html>
    )
}