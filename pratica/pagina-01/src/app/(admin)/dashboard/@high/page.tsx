async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    return (
        <div>Dashboard alta</div>
    )
}

export default Page
