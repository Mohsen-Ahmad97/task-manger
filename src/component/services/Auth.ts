import { FieldTyp } from "../3-Register/ConfirmEmail";
import { Values } from "./../3-Register/Register";
import { FieldTy } from "../3-Register/completeRegister";
import { FieldValue } from "../4-Login/Login";
import { FieldT } from "../4-Login/ResetPassword";
import api from "./Api";


export interface data {
  Token: string;
  RefreshToken: string;
  Success: Boolean;
  errors: any[];
  CompleteRegister: Boolean;
}
export interface IcomonResponse {
  Code: Number;
  Message: string;
  Result?: Boolean;
  Data:any
  dateOfBirth?: null;
  data?: any;
}

export class Auth {
  static async register(mode: Values): Promise<IcomonResponse> {
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
        let result: IcomonResponse = response.data;
        console.log("result", result);
        return result;
      })
      .catch((error) => {
        console.log("errorregister", error.response.data);
        return error.response.data;
      });
  }
  static async confirmEmail(mode: FieldTyp): Promise<IcomonResponse> {
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
        let result: IcomonResponse = response.data;
        localStorage.setItem("token", response.data.Data.Token);
        localStorage.setItem("refreshToken", response.data.Data.RefreshToken);
        console.log("res", result);
        return result;
      })
      .catch(function (error) {
        let Error: IcomonResponse = error.response.data;
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
        let result: IcomonResponse = response.data;
        console.log("result", result);
        return result;
      })
      .catch(function (error) {
        console.log("errorResendCode", error);
        return error.data;
      });
  }
  static async completRegister(mode: FieldTy): Promise<IcomonResponse> {
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
  static async login(mode: FieldValue): Promise<IcomonResponse> {
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
        let result: IcomonResponse = response.data;
        localStorage.setItem("token", result.Data.Token);
        localStorage.setItem("refreshToken", result.Data.RefreshToken);
        console.log("result", result);
        return result;
      })
      .catch(function (error) {
        console.log(error.response.data);
        return error.response.data;
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
        let result: IcomonResponse = response.data;
        console.log(result);
        return result;
      })
      .catch(function (error) {
        console.log(error.response);
        return error.response;
      });
  }
  static async resetPassword(mode: FieldT): Promise<IcomonResponse> {
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
        let result: IcomonResponse = response.data;
        console.log(result);
        return result;
      })
      .catch(function (error) {
        console.log("ee", error.response);
        return error.response;
      });
  }
}
