// 🔥 MOCK FRONTEND AUTH SYSTEM

let users = [];

export const registerUser = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const exists = users.find(
        (u) => u.username === data.username
      );

      if (exists) {
        resolve({ msg: "User already exists" });
      } else {
        users.push(data);
        resolve({ msg: "User registered successfully" });
      }
    }, 800);
  });
};

export const loginUser = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(
        (u) =>
          u.username === data.username &&
          u.password === data.password
      );

      if (user) {
        resolve({ access_token: "mock-token-123" });
      } else {
        resolve({ error: "Invalid credentials" });
      }
    }, 800);
  });
};

export const detectFire = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        fire_detected: true,
        confidence: 0.87,
      });
    }, 1000);
  });
};