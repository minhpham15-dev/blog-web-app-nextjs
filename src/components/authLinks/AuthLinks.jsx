import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const status = "noauthenticated";
  return (
    <>
      {status === "noauthenticated" ? (
        <Link href="/">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.links}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
