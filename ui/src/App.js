import React from 'react';
import './App.css'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Message from './components/Message';

console.log("key", process.env.REACT_APP_CLERK_PUB_KEY)
if (!process.env.REACT_APP_CLERK_PUB_KEY) throw new Error('Missing Publishable Key');
const clerkPubKey = process.env.REACT_APP_CLERK_PUB_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <div className="App">
          <Message></Message>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;
