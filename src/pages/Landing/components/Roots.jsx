import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import photoarea from "../assets/photoarea.jpeg";
import rest from "../assets/rest.avif";
import camp from "../assets/camp.avif";
import ttt from "../assets/ttt.jpg";
import xxx from "../assets/xxx.jpg";

import "../style.css"

function Roots() {
    const timeline = [
        {id: 1, title: "منطقة تصوير", description: "منطقة تصوير هي مساحة مخصصة لالتقاط الصور، مجهزة بإضاءة مناسبة وخلفيات احترافية لتحقيق أفضل جودة بصرية. تُستخدم في التصوير الفوتوغرافي والفيديو، سواء للأغراض الشخصية أو التجارية.", img: photoarea},
        {id: 2, title: "منطقة راحة", description: "منطقة راحة هي مساحة مخصصة للاسترخاء واستعادة النشاط، مجهزة بمقاعد مريحة وبيئة هادئة تتيح للزوار أخذ استراحة قصيرة والاستمتاع بالراحة قبل استئناف أنشطتهم.", img: rest},
        {id: 3, title: "منطقة تخييم", description: "منطقة تخييم هي مساحة مخصصة لإقامة المخيمات، توفر بيئة طبيعية مناسبة لنصب الخيام والاستمتاع بأنشطة التخييم مثل إشعال النار، الطهي في الهواء الطلق، واستكشاف الطبيعة، مما يمنح تجربة فريدة لمحبي المغامرات في الهواء الطلق.", img: camp},
        {id: 4, title: "قصر اثري", description: "قصر أثري هو معلم تاريخي يعود إلى حقبة زمنية قديمة، يتميز بتصميمه المعماري الفريد وزخارفه التراثية، ويعكس أسلوب الحياة والثقافة السائدة في ذلك العصر. يُعد وجهة سياحية مهمة لمحبي التاريخ والتراث.", img: ttt},
        {id: 5, title: "بئر", description: "البئر هو حفرة عميقة تُحفر في الأرض للوصول إلى المياه الجوفية، ويُستخدم لاستخراج المياه للشرب والري. وقد تكون الآبار تقليدية مبنية بالحجارة أو حديثة مزودة بمضخات.", img: xxx},
    ]
  return (
    <div className="timeline map" >
        <div className="timeline-desc">
            <h1>مسار عقبة القرون</h1>    
        </div>
      <VerticalTimeline>
        {
            timeline.map(element => {
                return (
                    <>
                        <VerticalTimelineElement
                        key={element.id}
                        iconStyle={{ background: "#0096a1"}}
                        contentStyle={{ backgroundColor: "#46C798" }}
                        >
                            <h1 className="vertical-timeline-element-title">{ element.title }</h1>
                            <p className="description">{element.description}</p>
                            <img src={element.img} alt=""  width={350} style={{ paddingTop: "15px" }}/>
                        </VerticalTimelineElement>
                    </>
                )
            })
        }
      </VerticalTimeline>
    </div>
  )
}

export default Roots
