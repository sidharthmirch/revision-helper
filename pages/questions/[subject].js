import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Questions() {
  const router = useRouter();
  const { subject } = router.query;

  const mathematicsLength = 187;
  const economicsLength = 0;
  const biologyLength = 0;
  let randomIndex;

  switch (subject) {
    case "Mathematics":
      randomIndex = Math.floor(Math.random() * mathematicsLength);
      break;
    case "Economics":
      randomIndex = Math.floor(Math.random() * economicsLength);
      break;
    case "Biology":
      randomIndex = Math.floor(Math.random() * biologyLength);
      break;
    default:
      randomIndex = "ERROR_NOT_VALID_SUBJECT";
      break;
  }

  const path =
    randomIndex === "ERROR_NOT_VALID_SUBJECT"
      ? `/404`
      : `/images/${subject}/${randomIndex}.png`;
  return (
    <div className={styles.container}>
      <Head>
        <title>{subject}</title>
        <meta name="description" content="IAL Revision questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.center}>
        <div className={styles.navigation}>
          <Link href="/">
            <button>home</button>
          </Link>{" "}
          <Link href={`/questions/${subject}`}>
            <button>new question</button>
          </Link>
        </div>
        <div className={styles.question}>
          <Image src={path} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.navigation}>
          <p>src: {path}</p>
        </div>
      </div>
    </div>
  );
}
