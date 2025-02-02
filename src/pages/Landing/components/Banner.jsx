import map from "../assets/map.svg";
export function Banner() {
  return (
    <>
      <main>
        <div className="hero">
          <div className="hero-content">
            <h1>
            استكشف عسير بأمان<br />
            مسارات ذكية لهواة الهايكنق
            </h1>
            <p>
            منصة ذكية لتسهيل ممارسة رياضة الهايكنق للسياح من خلال توفير مسارات مخصصة وارشادات تحد من المخاطر المعتادة كما تلبي احتياجات هواة و محبي هذه الرياضة في منطقة عسير
            </p>
            {/* <a>
              <button>انقر للبدء</button>
            </a> */}
          </div>
          <div className="hero-img">
            <img src={map} alt="Banner Icon" />
          </div>
        </div>
      </main>
    </>
  );
}
