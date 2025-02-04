const Teacheradvert =()=>{
  return(
    <div className="teacher-advert">
      <div className="text-notice">
        <div className="header1">
          <h2>If You Are A Certified Teacher Then <span>Become An Instructor</span></h2>
        </div>
        <p>
          Unlock the opportunity to inspire and educate by joining our team of instructors.
          If you are a certified teacher, elevate your impact and share your expertise with
          learners worldwide
        </p>
        <div className="header2"><h2>Enjoy Many Perks</h2></div>
        <div className="perks-lists">
          <div className="list list1">
            <li><span>Global Impact</span></li>
            <li><span>Flexible Schedule</span></li>
            <li><span>Innovative Teaching Tools</span></li>
            <li><span>Recognition And Reputation</span></li>
          </div>
          <div className="list">
            <li><span>creative freedom</span></li>
            <li><span>Moneytize Your Expertise</span></li>
            <li><span>Proffesional Development</span></li>
            <li><span>Networking Opportunites</span></li>
          </div>
        </div>
        <button className="btn2">Become an Instructor</button>
      </div>
      <div className="notice-img">
        <img src="img/tutor.png" alt="" />
      </div>
    </div>
  )
}

export default Teacheradvert;