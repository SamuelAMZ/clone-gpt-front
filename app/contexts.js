"use client";

import React, { useEffect } from "react";

// firebase
import { auth } from "../utils/firebase";

// react firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";

// react query
import { QueryClient, QueryClientProvider } from "react-query";

// contexts imports

function Contexts({ children }) {
  // keep check for the user session status and set the id in the localstorage for the extension
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      // set actuall userid in the sessionstorage with a false term in the begining
      sessionStorage.setItem("ext_user_sess", user.uid);
    }

    if (!user) {
      sessionStorage.removeItem("ext_user_sess");
    }
  }, [user]);

  // react query
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </>
  );
}

export default Contexts;
