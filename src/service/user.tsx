import { server } from ".";

export const HandleUserRegister = async ({
  username,
  password,
  email,
  role,
}: {
  username: string;
  password: string;
  email: string;
  role: string;
}) => {
  try {
    const result = await server.post(`/users/register`, {
      username,
      password,
      email,
      role,
    });
    alert("Register-Success!");
    return { data: result, status: "success", code: 200 };
  } catch (error: any) {
    console.log(error);
    alert(error.response.data.message);
    return { data: error.message, status: "fail" };
  }
};

export const HandleUserLogin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const result = await server.post(`/auth/login`, {
      username,
      password,
    });

    alert("Login Success");
    return { data: result.data, status: "success", code: 200 };
  } catch (error: any) {
    console.log("erroooooo: ", error.response.data.message);
    alert(error.response.data.message);
    return { data: error.response.data, status: "fail" };
  }
};

export const HandleCheckRole = async (role: string) => {
  try {
    const token = localStorage.getItem("accessToken");
    const result = await server.post(`/users/me`, {
      // headers: { Authorization: `Bearer ${token}` },
    });
    console.log("result:", result);
    return true;
  } catch (error: any) {
    console.log(error);
    return { data: error.message, status: "fail" };
  }
};

export const HandleCheckAccessToken = async (token: string) => {
  try {
    const result = await server.get(`/users/me`, {
      // headers: { Authorization: `Bearer ${token}` },
    });
    console.log("result:", result);
    return result;
  } catch (error: any) {
    console.log(error);
    alert(error.response.data.message);
    throw new Error(error.message);
  }
};

export const GetListUserRequireActive = async (token: string) => {
  try {
    const result = await server.get(`/users/getListUserToBeAdmin`, {
      // headers: { Authorization: `Bearer ${token}` },
    });
    console.log("result:", result);
    return result;
  } catch (error: any) {
    console.log(error);
    alert(error.response.data.message);
    throw new Error(error.message);
  }
};

export const HandleSetActiveUser = async (username: string, token: string) => {
  try {
    console.log("useranemeeeee: ", username);
    const result = await server.put(`/users/updateRole/${username}`, {
      // headers: { Authorization: `Bearer ${token}` },
    });
    console.log("result:", result);
    return result;
  } catch (error: any) {
    console.log(error);
    alert(error.response.data.message);
    throw new Error(error.message);
  }
};
