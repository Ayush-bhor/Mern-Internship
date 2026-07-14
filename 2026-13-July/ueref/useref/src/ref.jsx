import { useRef, useState } from "react"

export default function Ref() {
    const username = "admin"
    const password = "admin@123"

    const nameRef = useRef(null)
    const passRef = useRef(null)
    const [user, setUser] = useState("")

    function getSubmit() {
        const enteredName = nameRef.current?.value || ""
        const enteredPassword = passRef.current?.value || ""

        if (enteredName === username && enteredPassword === password) {
            if (nameRef.current) {
                nameRef.current.style.color = "red"
                nameRef.current.style.backgroundColor = "yellow"
            }

            if (passRef.current) {
                passRef.current.style.color = "red"
                passRef.current.style.backgroundColor = "yellow"
            }

            setUser("Login successful")
            return
        }

        setUser("Invalid username or password")
    }

    return (
        <>
            <input type="text" placeholder="Enter your name...." ref={nameRef} />
            <input type="password" placeholder="Enter your password" ref={passRef} />
            <button type="button" onClick={getSubmit}>
                LOGIN
            </button>
            <h1>{user}</h1>
        </>
    )
}