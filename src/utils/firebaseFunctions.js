import { auth, provider } from './firebaseInit'

export const email = 'alexxaandr.m@gmail.com'

export const firebaseLogout = () => {
  auth.signOut()
}

export const firebaseAuth = async () => {
  const {user} = await auth.signInWithPopup(provider)

  if (user.email !== email) {
    firebaseLogout()
    return ({
      isAuth: false
    })
  }

  return ({
    isAuth: true,
    userName: user.displayName,
    userEmail: user.email,
    photoUrl: user.photoURL
  })
}