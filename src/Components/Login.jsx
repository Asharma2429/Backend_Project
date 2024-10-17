import React, { useState } from "react";
import shop from "../image/Amazon_logo.svg (1).png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPass(e.target.value);

    const check = async () => {
        if (!email || !pass) {
            alert("Please enter your email and password");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password: pass }),
            });

            const data = await response.json();
            if (response.ok) {
                nav("/home");
                Swal.fire({
                    icon: "success",
                    title: "Sign in successfully",
                    toast: true,
                    position: "top-end",
                    timer: 3000,
                    timerProgressBar: true,
                });
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred during login");
        }
    };

    return (
        <div className="login" id="login">
            <div className="container">
                <div className="login-in">
                    <div className="img">
                        <img src={shop} alt="shop" />
                    </div>
                    <div className="box">
                        <div className="box-in">
                            <h1>Sign in</h1>
                            Email or mobile phone number <input type="email" onChange={updateEmail} />
                            Password <input type="password" onChange={updatePassword} />
                            <button onClick={check}>Sign in</button>
                            <div className="create">
                                <button onClick={() => nav("/")}>Create an account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Login };
