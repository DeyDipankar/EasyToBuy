
import {SignInWithGooglePopup, createuserDocument} from "../../utils/firebase/firebase.utils"

function SignIn ()
{
    const logGoogleUser = async () => {
        const {user} = await SignInWithGooglePopup()
        console.log(user);
        createuserDocument(user);
    }
    return(
        <>
            <h2>Sign In</h2>
            <button onClick={logGoogleUser}>Sign In with GooglePopup</button>
        </>
    )
};

export default SignIn;