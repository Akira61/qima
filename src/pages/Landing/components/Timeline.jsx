import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import timeline1 from "../assets/timeline1.webp";
import timeline2 from "../assets/timeline2.webp";
import timeline3 from "../assets/timeline3.webp";

import "../style.css"

function Timeline() {
    const timeline = [
        {id: 1, title: "الخطوة الأولى", description: "تحديد الخدمة او النشاط المراد، واظهار عدد من المعلومات والارشادات المناسبة للمستخدم.", img: timeline1},
        {id: 2, title: "الخطوة الثانية", description: "اختيار خدمة المسارات لتحديد المسار المناسب للفئة الممارسة للرياضة ، مع مراعاة وعورة المسار ووجود مواقع سياحية جاذبة", img: timeline2},
        {id: 3, title: "الخطوة الثالثة", description: "توفير أفضل ممارسات الاسعافات الأولية في حالة حدوث إصابات وتلافيها بشكل مباشر حتى حين وصول الجهات المعنية", img: timeline3},
    ]
  return (
    <div className="timeline">
        <div className="timeline-desc">
            <h1>واجهات المستخدم</h1>    
        </div>
      <VerticalTimeline>
        {
            timeline.map(element => {
                return (
                    <>
                        <VerticalTimelineElement
                        key={element.id}
                        iconStyle={{ background: "#0096a1"}}
                        contentStyle={{ backgroundColor: "#FFD65A" }}
                        >
                            <h1 className="vertical-timeline-element-title">{ element.title }</h1>
                            <p className="description">{element.description}</p>
                            <img src={element.img} alt=""  width={200} style={{ paddingTop: "15px" }}/>
                        </VerticalTimelineElement>
                    </>
                )
            })
        }
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
