/// ============================ Request types ============================
export type LoginRequest = {
  email: string;
  password: string;
};
///============================ Response types ============================

export type LoginResponse = {
  success: boolean;
  token: string;
};
