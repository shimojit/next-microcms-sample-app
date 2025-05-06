import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビッド・チャン",
      position: "CEO",
      profile:
        "デイビッド・チャンは、当社のCEOであり、ビジョンと戦略をリードしています。彼は業界での豊富な経験を持ち、革新的なアイデアを推進しています。",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "サラ・ジョンソン",
      position: "CTO",
      profile:
        "サラ・ジョンソンは、当社のCTOであり、技術戦略と製品開発を監督しています。彼女は技術革新に情熱を注いでいます。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "マイケル・スミス",
      position: "CFO",
      profile:
        "マイケル・スミスは、当社のCFOであり、財務戦略とリスク管理を担当しています。彼は財務の専門家であり、企業の成長を支えています。",
    },
  ],
}

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録させていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}