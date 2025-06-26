import React, { useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [email, setemail] = useState("");
    const [pwd, setpwd] = useState("");
    const [msg, setmsg] = useState('')
    const [showpwd, setshowpwd] = useState(false)

    const handellogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/ejob5/login', {
                email: email,
                pwd: pwd
            })

            if (response.status === 200) {
                setmsg('Login successful')
            }
            else {
                setmsg('Login failed')
            }

        }
        catch (err) {
            if (err.response) {
                setmsg(err.response.data.msg || 'Login failed')
            }
            else {
                setmsg('Error in login')
            }
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login Page</h1>
                <form onSubmit={handellogin} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setemail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className="relative">
                        <input
                            type={showpwd ? "text" : "password"}
                            placeholder="Password"
                            onChange={(e) => setpwd(e.target.value)}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="button"
                            className="absolute top-1/2 right-4 transform -translate-y-1/2"
                            onClick={() => setshowpwd(!showpwd)}
                        >
                            {showpwd ? (
                                <FontAwesomeIcon icon={faEye} />
                            ) : (
                                <FontAwesomeIcon icon={faEyeSlash} />
                            )}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                {msg && <p className="mt-4 text-center text-red-500">{msg}</p>}
            </div>
        </div>
    )
}

export default Login
