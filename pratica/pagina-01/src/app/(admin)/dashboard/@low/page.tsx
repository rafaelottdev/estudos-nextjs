async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    return (
        <div>Dashboard baixo</div>
    )
}

export default Page
