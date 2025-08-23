import React, { useEffect } from "react";
import BgAuth from "/assets/public/images/bg-auth.svg";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
export const meta = () => [
  {
    title: "ResumeAi | Auth",
    name: "description",
    content: "Log into your account",
  },
];
const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();

  const next = location.search.split("next=")[1];

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);
  return (
    <main
      className="bg-cover min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${BgAuth})` }}
    >
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-6 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Log In to Continue Your Job Journey</h2>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                Signing You in....
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={auth.signOut}>
                    <p>Log Out</p>
                  </button>
                ) : (
                  <button className="auth-button" onClick={auth.signIn}>
                    <p>Log In</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default auth;
