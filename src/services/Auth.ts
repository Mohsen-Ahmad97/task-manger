import api from "./Api";
import { IcomonResponse } from "../models/General";
import { CompleteType, ConfirmType, LoginType, RegisterType, ResetType } from "../models/Modules";

export class Auth {
  static async register(mode: RegisterType): Promise<IcomonResponse> {
    return await api
      .post(
        "/api/Auth/register",
        {
          email: mode.email,
          password: mode.password,
          confirmPassword: mode.confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        let result: IcomonResponse = response?.data;
        console.log("result", result);
        return result;
      })
      .catch((error) => {
        console.log("errorregister", error.response.data);
        return error?.response?.data;
      });
  }
  static async confirmEmail(mode: ConfirmType): Promise<IcomonResponse> {
    return await api
      .post(
        "/api/Auth/confirm-email",
        {
          email: localStorage.getItem("email"),
          verficationCode: mode.verficationCode,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(function (response) {
        let result: IcomonResponse = response?.data;
        localStorage.setItem("token", response?.data?.Data?.Token);
        localStorage.setItem(
          "refreshToken",
          response?.data?.Data?.RefreshToken
        );
        console.log("res", result);
        return result;
      })
      .catch(function (error) {
        let Error: IcomonResponse = error?.response?.data;
        console.log("err", Error);
        return Error;
      });
  }
  static async resendCode(): Promise<IcomonResponse> {
    return await api
      .post(
        "/api/Auth/resend-confirm-code",
        {
          email: localStorage.getItem("email"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        let result: IcomonResponse = response?.data;
        console.log("result", result);
        return result;
      })
      .catch(function (error) {
        console.log("errorResendCode", error);
        return error?.data;
      });
  }
  static async completRegister(mode: CompleteType): Promise<IcomonResponse> {
    return await api
      .post(
        "/api/Auth/complete-register",
        {
          firstName: mode.firstName,
          lastName: mode.lastName,
          email: localStorage.getItem("email"),
          dateOfBirth: null,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        let result: IcomonResponse = response.data;
        console.log(result);
        return result;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  }
  static async login(mode: LoginType): Promise<IcomonResponse> {
    return await api
      .post(
        "/api/Auth/login",
        {
          password: mode.password,
          email: mode.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        let result: IcomonResponse = response?.data;
        localStorage.setItem("token", result?.Data?.Token);
        localStorage.setItem("refreshToken", result?.Data?.RefreshToken);
        console.log("result", result);
        return result;
      })
      .catch(function (error) {
        console.log(error.response.data);
        return error?.response?.data;
      });
  }
  static async forgetPassword(): Promise<IcomonResponse> {
    return await api
      .post(
        "/api/Auth/forgot-password",
        {
          email: localStorage.getItem("email"),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        let result: IcomonResponse = response?.data;
        console.log(result);
        return result;
      })
      .catch(function (error) {
        console.log(error.response);
        return error?.response;
      });
  }
  static async resetPassword(mode: ResetType): Promise<IcomonResponse> {
    return await api
      .post(
        "/api/Auth/reset-password",
        {
          email: mode.email,
          verficationCode: mode.verficationCode,
          password: mode.password,
          confirmPassword: mode.confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        let result: IcomonResponse = response?.data;
        console.log(result);
        return result;
      })
      .catch(function (error) {
        console.log("ee", error?.response);
        return error.response;
      });
  }
}
