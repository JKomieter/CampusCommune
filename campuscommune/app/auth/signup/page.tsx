"use client";
import signup from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CollegeStudents, Logo } from "@/components/svgs";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "@/firebase/config";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [user] = useAuthState(auth);
  const userCollectionRef = collection(db, "user");

  const onSubmit = async (data: Record<string, string>) => {
    try {
      const { email, password, confirmedPassword, major, firstName, lastName } =
        data;

      if (password !== confirmedPassword) {
        // show message to user that passwords do not match
        setErrorMsg("Passwords do not match");
        return;
      }

      const { userCredential, error } = await signup(email, password);

      if (!userCredential) {
        setErrorMsg("Something went wrong. Please try again later.");
      }
      console.log(user);
      // Store user in database
      await createUserInDB(email, major, firstName, lastName);
    } catch (error) {
      console.log(error);
      setErrorMsg("Something went wrong. Please try again later.");
    }
  };

  const createUserInDB = async (
    email: string,
    major: string,
    firstName: string,
    lastName: string
  ) => {
    // add user to database
    const data = {
      email,
      major,
      full_name: `${firstName} ${lastName}`,
    };

    try {
      await addDoc(userCollectionRef, data);
    } catch (error) {
      console.log(error);
      setErrorMsg("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex items-center justify-center w-full gap-5 px-6 lg:flex-row flex-col">
        <div className="w-full h-full">
          <CollegeStudents className="w-full h-full" />
        </div>
        <div className="w-full h-full flex items-center flex-col gap-5 justify-center">
          <span className="w-full flex items-center justify-center gap-2">
            <Logo className="lg:text-3xl md:text-2xl text-xl text-[#FF725E]" />
            <p className="font-sans lg:text-3xl md:text-2xl text-xl text-[#FF725E] font-bold">
              Campus <span className="text-neutral-700">Commune</span>
            </p>
          </span>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-3 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="firstName" className="text-neutral-800 ">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-neutral-700 p-1 basis-[40px] focus:border-[#FF725E]"
                    style={{ borderWidth: "1px" }}
                    id="firstName"
                    required
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && <span>This field is required</span>}
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="lastName" className="text-neutral-800 ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-neutral-700 p-1 basis-[40px] focus:border-[#FF725E]"
                    style={{ borderWidth: "1px" }}
                    id="lastName"
                    required
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && <span>This field is required</span>}
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="email" className="text-neutral-800 ">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border-neutral-700 p-1 basis-[40px] focus:border-[#FF725E]"
                  style={{ borderWidth: "1px" }}
                  id="email"
                  required
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="major" className="text-neutral-800 ">
                  College Major
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border-neutral-700 p-1 basis-[40px] focus:border-[#FF725E]"
                  style={{ borderWidth: "1px" }}
                  id="major"
                  required
                  {...register("major", { required: true })}
                />
                {errors.major && <span>This field is required</span>}
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="password" className="text-neutral-800 ">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border-neutral-700 p-1 basis-[40px] focus:border-[#FF725E]"
                  style={{ borderWidth: "1px" }}
                  id="password"
                  required
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="password" className="text-neutral-800 ">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border-neutral-700 p-1 basis-[40px] focus:border-[#FF725E]"
                  style={{ borderWidth: "1px" }}
                  id="confirmedPassword"
                  required
                  {...register("confirmedPassword", { required: true })}
                />
                {errors.confirmedPassword && (
                  <span>{errorMsg || "This field is required"}</span>
                )}
              </div>
              <span className="text-sm text-red-500 w-full flex items-center justify-center">
                {errorMsg}
              </span>
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="items-center w-full flex justify-center bg-neutral-700 py-2 rounded-lg transition duration-500 hover:bg-[#ff533c]"
              >
                <span className="text-white font-semibold text-lg">
                  Sign Up
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
