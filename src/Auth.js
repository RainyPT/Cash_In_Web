import Cookies from "universal-cookie";
import axios from "axios";
const AuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    AuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback) {
    AuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { AuthProvider };
/*export default function useAuth(){
    let isUserLogged=false;
    function checkTokenValidity(token){
        const tokenOBJ = { token: token };
        axios.post('ENDPOINT', tokenOBJ).then(response =>{
            if(response.length>0){
                isUserLogged=true;
            }
        });
    }
    const cookies = new Cookies();
    let accessToken=cookies.get('access-token');
    if(accessToken!==undefined){
        checkTokenValidity(accessToken);
    }
    return isUserLogged ? console.log("Loggado") : console.log("Não loggado")
}*/
