
import {SignInWithGooglePopup} from "../../utils/firebase/firebase.utils"

function SignIn ()
{
    const logGoogleUser = async () => {
        const response = await SignInWithGooglePopup()
        console.log(response);
    }
    return(
        <>
            <h2>Sign In</h2>
            <button onClick={logGoogleUser}>Sign In with GooglePopup</button>
        </>
    )
};

export default SignIn;