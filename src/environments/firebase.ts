import { AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyCs5Ln9JlXMLIcNyQzccmy77CtmUfRbg-k',
  authDomain: 'excelerationdesigns.firebaseapp.com',
  databaseURL: 'https://excelerationdesigns.firebaseio.com',
  messagingSenderId: '799029269719',
  storageBucket: 'excelerationdesigns.appspot.com'
};

export const firebaseAuthConfig = {
  method: AuthMethods.Redirect,
  provider: AuthProviders.Google
};
