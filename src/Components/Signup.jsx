import React, { useState } from "react";
import shop from "../image/Amazon_logo.svg (1).png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignUp() {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPass(e.target.value);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        return re.test(String(email).toLowerCase());
    };

    const register = async () => {
        if (!email || !pass) {
            alert("Please enter your email and password");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (pass.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password: pass }),
            });

            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Account created successfully",
                    toast: true,
                    position: "top-end",
                    timer: 3000,
                    timerProgressBar: true,
                });
                nav("/login"); // Redirect to login after sign up
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred during sign-up");
        }
    };

    return (
        <div className="signup" id="signup">
            <div className="container">
                <div className="signup-in">
                    <div className="img">
                        <img src={shop} alt="shop" />
                    </div>
                    <div className="box">
                        <div className="box-in">
                            <h1>Sign Up</h1>
                            Email <input type="email" onChange={updateEmail} />
                            Password <input type="password" onChange={updatePassword} />
                            <button onClick={register}>Create Account</button>
                            <div className="login">
                                <button onClick={() => nav("/login")}>Already have an account? Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { SignUp };
