import { auth, provider } from './firebaseInit'
import { usersApi } from './api'

export const firebaseLogout = () => {
  auth.signOut()
}

export const firebaseAuth = async () => {
  const {user} = await auth.signInWithPopup(provider)

  return usersApi.get().then( users => {

    if ( users.data.filter(userData => userData.email === user.email).length ) {
        return ({
          isAuth: true,
          userName: user.displayName,
          userEmail: user.email,
          photoUrl: user.photoURL
        })
      } else {
        firebaseLogout()
        return ({
          isAuth: false
        })
      }
  })
  
}