import video from "../assets/video.mp4"
export function Video() {
  return (
    <>
      <section className="explan-video-root">
      <div className="explan-video">
        <div className="desc">
          <h1>📽️فيديو توضيحي</h1>
        </div>
        <div className="video">
          <video src={video} controls></video>
        </div>
      </div>
    </section>
    </>
  )
}
