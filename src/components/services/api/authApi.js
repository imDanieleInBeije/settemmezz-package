import { postApiNoAuth, putApi, deleteApi, getApiNoAuth } from "../genericServices";

export async function signInApi(email, password) {
  return await postApiNoAuth("/signin", {
    email: email,
    password: password,
  });
}

export async function signUpApi(email,psw,nick) {
  return await postApiNoAuth("/user/registration", {
    email: email,
    password: psw,
    username: nick
  });
}

// export async function updateUserApi(id, obj) {
//   return await putApi(`/user/${id}`, obj);
// }

// export async function deleteUserApi(id) {
//   return await deleteApi(`/user/${id}`);
// }

export async function getUserApi(id) {
  return await getApiNoAuth(`/getuser/${id}`);
}
