type UserData = {
    userName: string,
    userEmail: string,
    userPassword: string
}

export async function sendUser(props: UserData) {
    const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(props)
    })
}
