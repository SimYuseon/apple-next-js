import Image from "next/image"; //이미지 최적화

export default function List() {
  let 상품 = ["Tomatos", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <Image
              src={`/food${i}.png`}
              alt="토마토"
              className="food-img"
              width={400}
              height={300}
            />
            {/* 외부이미지는 width, heigth속성 필요 */}
            {/* next.config.js 셋팅도 필요 */}
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
