function dashboardLayout({ children, high, low }: {children: React.ReactNode, high: React.ReactNode, low: React.ReactNode}) {
    return (
        <div>
            dashboard layout
            
            {children}

            {high}

            {low}
        </div>
    )
}

export default dashboardLayout
