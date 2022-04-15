import { Auth } from 'aws-amplify';

async function checkAuthState() {
  var auth = []
  try {
    auth = await Auth.currentAuthenticatedUser()
    console.log("logging from authcheck: ", auth); 
  } catch (err) {
    console.log("Error from authcheck", err)
  }
  return auth
}

export default checkAuthState;