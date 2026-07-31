import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Login.css";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        usn: "",
        email: "",
        password: "",
        university: "",
        department: "",
        semester: "",
        section: "",
        role: "STUDENT"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await register(formData);

            toast.success(response.data.message);

            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Registration Failed"
            );
        }
    };

    return (

        <div className="login-container">

            <ToastContainer />

            <div className="login-box">

                <h1>CampusVault</h1>

                <h3>Register</h3>

                <form onSubmit={handleSubmit}>

                    <input
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="usn"
                        placeholder="USN"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="university"
                        placeholder="University"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="department"
                        placeholder="Department"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="semester"
                        placeholder="Semester"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="section"
                        placeholder="Section"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

                <p>
                    Already have an account?
                    <Link to="/"> Login</Link>
                </p>

            </div>

        </div>
    );
}

export default Register;