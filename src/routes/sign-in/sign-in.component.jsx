import { signinWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const Signin = () => {

    const logGoogleUser = async () => {
        const {user} = await signinWithGooglePopup();
        createUserDocumentFromAuth(user)
    }


    return(
        <div>
            <h1>Signin</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Play
            </button>
        </div>
    )
}

export default Signin;