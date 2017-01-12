import { AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyCs5Ln9JlXMLIcNyQzccmy77CtmUfRbg-k',
  authDomain: 'testappdomain.firebaseapp.com',
  databaseURL: 'https://testappdomain.firebaseio.com',
  messagingSenderId: '000000000000',
  storageBucket: 'testappdomain.appspot.com'
};

export const firebaseAuthConfig = {
  method: AuthMethods.Redirect,
  provider: AuthProviders.Google
};
