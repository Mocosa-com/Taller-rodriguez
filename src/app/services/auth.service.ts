// src/services/auth.service.ts

export async function login(
  username: string,
  password: string
) {
  // login falso temporal
  if (username === "admin" && password === "1234") {
    return { ok: true };
  }

  throw new Error("Login incorrecto");
}
