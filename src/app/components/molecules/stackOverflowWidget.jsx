import Image from "next/image";

export function StackOverflowWidget() {
  return (
    <div style={{ width: "100%", paddingLeft: 24, marginTop: -12 }}>
      <a href="https://stackoverflow.com/users/13111779/felipe-chernicharo" rel="nofollow" target="_blank">
        <Image
          src="https://camo.githubusercontent.com/e06649f00104c8581b84e0730c4a5eec324fe2941a4f4da98593d409155a7f58/68747470733a2f2f737461636b6f766572666c6f772e636f6d2f75736572732f666c6169722f31333131313737392e706e673f7468656d653d6461726b"
          width={208}
          height={58}
          alt="profile for Felipe Chernicharo at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
          title="profile for Felipe Chernicharo at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
          data-canonical-src="https://stackoverflow.com/users/flair/13111779.png?theme=dark"
        />
      </a>
    </div>
  );
}
