export default function Home() {
  let name = "seon";
  let link = "http";
  return (
    <div>
      <h4 style={{ color: "red", fontSize: "30px" }}>애플후레시</h4>
      <p className="title-sub">by dev {name}</p>
      <a href={link}>링크</a>
    </div>
  );
}
