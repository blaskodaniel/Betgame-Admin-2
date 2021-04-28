import jwtDecode from 'jwt-decode';

export default function tokenChecker() {
  const user = localStorage.getItem(process.env.REACT_APP_JWTTOKEN);

  if (user) {
    const decodedToken = jwtDecode(user);
    return decodedToken;
  }
  return false;
}
