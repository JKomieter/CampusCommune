"use client";
import signin from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { CollegeStudents2 } from "@/app/components/svgs";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = useCallback(async (data: Record<string, string>) => {
    try {
      const { email, password } = data;
      const results = await signin(email, password);

      // check if user is signed up successfully
    } catch (error) {
      console.log(error);
      // show message to user that something went wrong
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex items-center justify-center w-full gap-5 px-6 lg:flex-row flex-col">
        <div className="w-full h-full">
          <CollegeStudents2 className="w-full h-full" />
        </div>
        <div className="w-full h-full flex items-center flex-col gap-5 justify-center">
          <span className="w-full font-sans flex items-center justify-center lg:text-3xl md:text-2xl text-xl text-[#FF725E] font-bold text-center">
            Campus Commune
          </span>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="email" className="text-neutral-800 ">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border-neutral-700 p-1 basis-[40px] focus:border-[#FF725E]"
                  style={{ borderWidth: "1px" }}
                  id="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="password" className="text-neutral-800 ">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border-neutral-700 p-1 basis-[40px] focus:border-[#FF725E]"
                  style={{ borderWidth: "1px" }}
                  id="email"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
              <button className="items-center w-full flex justify-center bg-[#FF725E] py-2 rounded-lg transition duration-500 hover:bg-[#ff533c]">
                <span className="text-white font-semibold text-lg">
                  Log In
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
