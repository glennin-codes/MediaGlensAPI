import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import React, { useEffect, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "../Zustand/Hooks/authStore";
import { AlertSignup } from "../components/ui/Alert/Alert-Signup";

const SignupComponent = () => {
  const { signUp, error,resetState, success, isLoading, } = useAuthStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is Required!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required!"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters!")
        .required("Password is Required!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match!")
        .required("confirm Password is Required!"),
    }),
    onSubmit: async (values) => {
      await signUp(values);
    },
  });

  return (
    <Layout>
      <div className="min-h-screen flex small-text items-center justify-center flex-col">
        <div className="max-w-md w-full p-6 card-color rounded-md shadow-md">
          <form onSubmit={formik.handleSubmit}>
            <div className="text-2xl text-center subtitle font-semibold text-primary mb-4">
              Signup
            </div>

            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block small-text text-sm font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="w-full px-3 py-3 border input-background  border-gray-400 rounded-md focus:outline-none focus:border-blue-600"
                placeholder="Enter your Name i.e John Doe"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <div className=" text-red-500 text-sm top-full left-0 mt-1 mb-2">
                  {formik.errors.name}
                </div>
              )}
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block small-text text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={{
                  border:"2px-solid-gray",
                  
                }}
                className="w-full px-3 py-3 border input-background  border-gray-400 rounded-md focus:outline-none focus:border-blue-600"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className=" text-red-500 text-sm top-full left-0 mt-1 mb-2">
                {formik.errors.email}
              </div>
            )}
            {/* Password Input */}

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block small-text text-sm font-bold mb-2"
              >
                Password:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className={`w-full px-3 py-3 border input-background rounded-md focus:outline-none ${
                    formik.errors.password && formik.touched.password
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-400 focus:border-blue-600"
                  }`}
                  placeholder="Enter your password"
                  onChange={(e) => {
                    formik.handleChange(e);
                    formik.setFieldValue("password", e.target.value.trim());
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <button
                  type="button"
                  className="absolute top-1/2 transform -translate-y-1/2 right-4 subtitle bg-transparent border-0 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
                {formik.touched.password && formik.errors.password && (
                  <div className="absolute text-red-500 text-sm top-full left-0 mt-1 mb-2">
                    {formik.errors.password}
                  </div>
                )}
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block small-text text-sm font-bold mb-2"
              >
                Confirm Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 py-3 border input-background border-gray-400 rounded-md focus:outline-none focus:border-blue-600"
                placeholder="Confirm your password"
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue(
                    "confirmPassword",
                    e.target.value.trim()
                  );
                }}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className=" text-red-500 text-sm top-full left-0 mt-1 mb-2">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>

            {/* Signup button */}
            <button
              className={`bg-blue-500 text-center cursor-pointer border-0 mx-auto w-full text-white px-4 py-3 rounded-md mb-6 hover:bg-blue-600 transition-transform ${
                isLoading ? "transform scale-95" : ""
              }`}
              type="submit"
              disabled={formik.isSubmitting}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 border-solid border-t-2 border-gray border-opacity-25 rounded-full"
                    viewBox="0 0 24 24"
                  ></svg>
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>

            {/* Social login icons */}
            <div className="flex items-center  mb-4 justify-center space-x-4">
              <FaGoogle className="text-4xl text-blue-600 hover:text-blue-800 cursor-pointer" />
              <FaGithub className="text-4xl text-gray-700 hover:text-gray-800 cursor-pointer" />
            </div>

            {/* Signup link */}
            <div className="text-right mb-2">
              <Link to="/login" className="text-blue-500 hover:underline">
                Already have an account? Login
              </Link>
            </div>
          </form>
        </div>
        {success && (
        <AlertSignup signupResult={success} oppener={Boolean(success)} />
      )}
      {error && <AlertSignup signupResult={error} oppener={Boolean(error)} />}
      </div>
     
    </Layout>
  );
};
export default SignupComponent