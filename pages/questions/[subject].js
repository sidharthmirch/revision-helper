import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export default function Questions() {
  const router = useRouter();
  const { subject } = router.query;

  const mathematicsLength = 215;
  const economicsLength = 0;
  const biologyLength = 0;
  let randomIndex;

  switch (subject) {
    case "Mathematics":
      if (!localStorage.getItem("Mathematics"))
        localStorage.setItem(
          "Mathematics",
          JSON.stringify(Array.from(Array(mathematicsLength).keys()))
        );
      randomIndex = Math.floor(
        Math.random() * JSON.parse(localStorage.getItem("Mathematics")).length
      );
      break;
    case "Economics":
      if (!localStorage.getItem("Economics"))
        localStorage.setItem(
          "Economics",
          JSON.stringify(Array.from(Array(economicsLength).keys()))
        );
      randomIndex = Math.floor(
        Math.random() * JSON.parse(localStorage.getItem("Economics")).length
      );
      break;
    case "Biology":
      if (!localStorage.getItem("Biology"))
        localStorage.setItem(
          "Biology",
          JSON.stringify(Array.from(Array(biologyLength).keys()))
        );
      randomIndex = Math.floor(
        Math.random() * JSON.stringify(localStorage.getItem("Biology")).length
      );
      break;
    default:
      randomIndex = "ERROR_NOT_VALID_SUBJECT";
      break;
  }

  const setCompleted = () => {
    let indexArray = JSON.parse(localStorage.getItem(subject));
    indexArray = indexArray.filter((index) => index !== randomIndex);
    localStorage.setItem(subject, JSON.stringify(indexArray));
    router.reload();
  };

  const clearStorage = () => {
    localStorage.clear();
    router.reload();
  };

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
          </Link>
          <Link href={`/questions/${subject}`}>
            <button>new question</button>
          </Link>
          <button className="lower" onClick={clearStorage}>
            reset completed questions
          </button>
        </div>
        <div className={styles.question}>
          <Image src={path} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.navigation}>
          <p>src: {path}</p>{" "}
          <button className="lower" onClick={setCompleted}>
            mark as completed
          </button>
        </div>
      </div>
    </div>
  );
}
