// Start of Selection
export interface LoginCredentials {
  username: string;
  password: string;
  captchaToken: string; // 添加滑动校验的令牌
}

export interface LoginResponse {
  token: string;
  expiresIn: number;
  refreshToken: string; // 添加刷新令牌
}

export interface LoginState {
  isLogin: boolean;
  user?: {
    id: string;
    username: string;
  };
  captchaRequired: boolean; // 是否需要滑动校验
}

export interface ErrorType {
  code: string;
  msg: string;
  errorCodeHigherLevel: string;
  errorMsgHigherLevel: string;
  originErrorCode: string;
  originErrorMsg: string;
  appVersion: string;
}
