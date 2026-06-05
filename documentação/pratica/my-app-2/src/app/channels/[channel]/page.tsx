async function Page({ params }: {params: Promise<{ channelName: string }>}) {
    const { channelName } = await params
    return (
        <section>Canal do {channelName}</section>
    )
}

export default Page
