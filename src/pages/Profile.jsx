import {useState, useEffect} from "react";
import {getAuth} from "firebase/auth";

function Profile(){
    const [user, setUser] = useState(null);

    const auth = getAuth();
    useEffect(() => {
        setUser(auth.currentUser);
    },[]);

    return user ? <h1>{user.displayName}</h1> : "로그인 되지 않음"
}

export default Profile;