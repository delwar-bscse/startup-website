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
        // const accessToken = localStorage.getItem("accessToken");
        ////  console.log("forgot pass accessToken", token);
        return {
          url: "/auth/forgot-password-otp",
          method: "POST",
          body: data,
          // headers: {
          //   "content-type": "application/json",
          //   Authorization: `Bearer ${accessToken}`,
          // },
        };
      },
      invalidatesTags: ["forgotPasswordEmail"],
    }),
    // Verify Otp
    VerifyOtp: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("otpToken");
        //  console.log("vetifyOtpToken", token);
        return {
          url: "/auth/forgot-password-otp-match",
          method: "PATCH",
          body: data,
          headers: {
            "content-type": "application/json",
            token: token,
          },
        };
      },
      invalidatesTags: ["user"],
    }),

    // Reset Password
    ResetPassword: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("verifiedOtpToken");
        console.log({ token });
        return {
          url: "/auth/forgot-password-reset",
          method: "PATCH",
          body: data,
          headers: {
            // "content-type": "application/json",
            token: token,
          },
        };
      },
      invalidatesTags: ["user"],
    }),

    // Resend Otp
    ResendOtp: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("createUserToken");
        console.log("Resend OTP Data", data);
        return {
          url: "/otp/resend-otp",
          method: "PATCH",
          body: data,
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
        console.log("Data inside mutation query:", data);
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
  useVerifyOtpMutation,
  useResendOtpMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUserOtpVerifyMutation,
} = authApi;
