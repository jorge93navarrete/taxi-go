// import { UserModel } from "@core/models/classes/user.model";

export interface LoginRequest {
  user_name: string;
  password: string;
  platform: string;
  autoLogin: boolean;
  versionNumber: string;
}

export interface UserPermission {
  views: any[];
  modules: any[];
  groups: any[];
}
export interface LoginResponse {
  success?: boolean;
  message?: string;
  inactive?: boolean;
  token?: string;
  session_id?: number;
  // user?: UserModel;
  profile?: number;
  can_access?: UserPermission;
}

export interface IChangePasswordReq {
  password: string;
  confirm_password: string;
  new_password?: string;
}

export interface CommonResponse {
  message?: string;
  result?: boolean;
  errors?: any;
}
export interface CoUModelResponse<ModelType> extends CommonResponse {
  entity: ModelType;
}

export interface RModelResponse<ModelType> extends CommonResponse {
  entities: ModelType[];
}

export interface ROneModelResponse<ModelType> extends CommonResponse {
  entity: ModelType;
}
export interface DModelResponse {
  message?: string;
}
