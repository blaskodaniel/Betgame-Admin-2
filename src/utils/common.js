import jwtDecode from 'jwt-decode';

export function tokenChecker() {
  const user = localStorage.getItem(process.env.REACT_APP_JWTTOKEN);

  if (user) {
    const decodedToken = jwtDecode(user);
    return decodedToken;
  }
  return false;
}

export function readToken() {
  const token = localStorage.getItem(process.env.REACT_APP_JWTTOKEN);

  return token || null;
}
