import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';

function Home() {
    return (
        <section>
            <h2>Home Page</h2>
            {/* <p>Welcome to the routing demo.</p> */}
        </section>
    );
}

export default function Navbar() {
    return (
        <>
            <nav>
                <h1>Navbar</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Service />} />
            </Routes>
        </>
    );
}