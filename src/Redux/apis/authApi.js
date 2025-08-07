import { baseApi } from "@/Redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
        headers: {
          "content-type": "application/json",
        },
      }),
      invalidatesTags: ["user"],
    }),
    ForgetPassword: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/forget-password",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
    // Verify Otp
    VerifyChangePasswordOtp: builder.mutation({
      query: (data) => {
        //  console.log("vetifyOtpToken", token);
        console.log("otp compare data", data);
        return {
          url: "/auth/otp-compare",
          method: "post",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),

    // Reset Password
    ResetPassword: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("resetToken");
        console.log(token);
        console.log("ResetPassword", data);
        return {
          url: "/auth/reset-password",
          method: "post",
          body: data,
          headers: {
            // "content-type": "application/json",
            authorization: token,
          },
        };
      },
      invalidatesTags: ["user"],
    }),

    // Resend Otp
    ResendOtp: builder.mutation({
      query: (email) => {
        const token = localStorage.getItem("createUserToken");
        console.log("Resend OTP mail", email);
        return {
          url: `/auth/otp-resend/${email}`,
          method: "post",
          // body: email,
          headers: {
            "content-type": "application/json",
            token: token,
          },
        };
      },
    }),

    // sign up
    signUp: builder.mutation({
      query: (data) => {
        console.log("Data inside mutation signUp:", data);
        return {
          url: "/users/register",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),

    // Verify Otp
    UserOtpVerify: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("createUserToken");
        console.log("api otp data", data);
        return {
          url: "/users/create-user",
          method: "POST",
          body: data,
          headers: {
            "content-type": "application/json",
            authorization: token,
          },
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useLogInMutation,
  useForgetPasswordMutation,
  useVerifyChangePasswordOtpMutation,
  useResendOtpMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUserOtpVerifyMutation,
} = authApi;
