import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function IndexPage() {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading")
    return <h1 className="loading"> Loading... Please wait.</h1>;
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="signin-container">
      <button className="signin-google" onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    </div>
  );
}
export default IndexPage;
