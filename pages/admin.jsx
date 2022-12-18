import { useSession, signIn, signOut } from "next-auth/react";
export default function Admin(props) {
  const { data: session } = useSession();
  return (
    <div className="container">
      <div className="blockel">
        {!session && (
          <div>
            <button onClick={() => signIn()}>Sign In</button>
          </div>
        )}
        {session && (
          <div>
            <button onClick={() => signOut()}>Sign Out</button>{" "}
            {session.user.name}
          </div>
        )}
      </div>
      {session && session.user.role === "admin" && (
        <div className="blockel">GAMER DETECTED</div>
      )}
    </div>
  );
}
