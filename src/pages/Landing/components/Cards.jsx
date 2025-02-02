import brain from "../assets/brain.svg";
import ai from "../assets/ai.svg";
import chat from "../assets/chat.svg";

export function Cards() {
  return (
    <>
      <section className="cards-container">
        <div className="cards-desc">
          <h1>ايش الأثر المتوقع من قمة</h1>
        </div>
        
        <div className="cards">
          <div className="card">
            <div className="card-img">
              <img src={brain} alt="Brain Icon" />
            </div>
            <div className="card-content">
              <h3>تعزيز السياح الرياضية ورفع نسبة الرضا 60%</h3>
              
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={ai} alt="ai icon" />
            </div>
            <div className="card-content">
              <h3> تقليل الإصابات والمخاطر 40% </h3>
              
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={chat} alt="chat icon" />
            </div>
            <div className="card-content">
              <h3> خفض معدلات الضياع وفقدان المسارات 50% </h3>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
