// Simple demo auth utilities using localStorage.
// NOT for production. For demo purposes only.

const USERS_KEY = 'demo_users_v1';
const CURRENT_KEY = 'demo_current_user_v1';

async function hashPassword(password) {
  if (!password) return '';
  const enc = new TextEncoder();
  const data = enc.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

function loadUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export async function createUser({ username, email, password }) {
  const users = loadUsers();
  if (users.find(u => u.username === username || u.email === email)) {
    throw new Error('User already exists');
  }
  const pwdHash = await hashPassword(password);
  const user = { id: Date.now(), username, email, passwordHash: pwdHash, createdAt: new Date().toISOString() };
  users.push(user);
  saveUsers(users);
  setCurrentUser({ id: user.id, username: user.username, email: user.email });
  return { id: user.id, username: user.username, email: user.email };
}

export async function authenticateUser({ usernameOrEmail, password }) {
  const users = loadUsers();
  const pwdHash = await hashPassword(password);
  const user = users.find(u => (u.username === usernameOrEmail || u.email === usernameOrEmail) && u.passwordHash === pwdHash);
  if (!user) throw new Error('Invalid credentials');
  setCurrentUser({ id: user.id, username: user.username, email: user.email });
  return { id: user.id, username: user.username, email: user.email };
}

export function setCurrentUser(user) {
  if (user) {
    localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_KEY);
  }
}

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(CURRENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function signOut() {
  localStorage.removeItem(CURRENT_KEY);
}

export default {
  createUser,
  authenticateUser,
  setCurrentUser,
  getCurrentUser,
  signOut,
};
