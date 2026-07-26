async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <div>Produto: {id}</div>
    )
}

export default Page
