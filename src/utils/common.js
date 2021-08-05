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

export function randomGen(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const result = [...Array(length).keys()].reduce((accumulator) => {
    const code = accumulator + characters.charAt(Math.floor(Math.random() * characters.length));
    return code;
  }, '');
  return result;
}
