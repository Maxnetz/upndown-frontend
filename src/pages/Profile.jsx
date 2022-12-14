import React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext.js";
import { useNavigate } from "react-router-dom";

import Alert from "../components/Alert/Alert";
const Profile = () => {
    const {
        user,
        userName,
        showAlert,
        displayAlert,
        updateUser,
        isLoading,
        token,
    } = useAppContext();

    const [move, setMove] = useState(null);
    const [error, setError] = useState(null);
    const [values, setValues] = useState({
        name: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        // console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email } = values;

        if (!name || !email) {
            displayAlert();
            setError("All fields are required");
            return;
        }
        updateUser({ name, email });
        setMove(true);
    };

    useEffect(() => {
        if (move) {
            setTimeout(() => {
                navigate("/dashboard");
                setMove(false);
                return window.location.assign("/dashboard");
            }, 3000);
        }
    }, [move, navigate]);

    if (!token) {
        return navigate("/");
    }

    return (
        <div className="pt-32 bg-purple-200 h-screen">
            <div className="flex justify-center">
                <div className="bg-white rounded-[20px] w-3/12 px-8  md:w-7/12 md:px-8 sm:w-4/6 xs:px-4 xs:w-5/6">
                    <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Hello, {userName}!
                        </h2>
                        <h1>{showAlert && <Alert />}</h1>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 text-start py-4">
                                Name
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    value={values.name}
                                    name="name"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 text-start py-4">
                                Email
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="email"
                                    value={values.email}
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        {error && <p className="py-4 text-red-600 ">{error}</p>}
                       <div className="py-4">
                        <button className="px-4 w-full focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400 ">
                            Submit
                        </button>
                     </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
