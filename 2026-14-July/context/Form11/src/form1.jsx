import { useState } from "react";

export default function Form1() {
    const [formdata, setFormData] = useState({ name: "", email: "", password: "" });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // log details to browser console
        console.log("Form submitted:", formdata);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formdata.name}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formdata.email}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formdata.password}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}