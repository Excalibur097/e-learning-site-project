const Testimonial = ()=>{
  return(
    <div className="testimonial">
      <div className="header">
        <h2>Student's Testimonials</h2>
        <p>
          Here's what our students have to say about their
          transformative experience: Real stories, real growth. Discover
          firsthand the impact our courses have had on their lives
        </p>
      </div>
      <div className="students">
        <div className="student-card">
          <div className="info">
            <img src="img/profile/client-5.jpg" alt="" />
            <div className="info-text">
              <h3>Alex Rodriguez</h3>
              <p>Web Developer</p>
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="story">
            <p>Enrolling in courses at this eleaening</p>
            <p>platform was a game changer for me.</p>
            <p>Absolutely transformative experience</p>
          </div>
        </div>
        <div className="student-card">
          <div className="info">
            <img src="img/profile/client-4.jpg" alt="" />
            <div className="info-text">
              <h3>Emile Joe</h3>
              <p>UI/UX Designer</p>
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="story">
            <p>Exceptional courses! The practical insight</p>
            <p>and flexible learning structure have been</p>
            <p>instrumental in my professional growth</p>
          </div>
        </div>
        <div className="student-card">
          <div className="info">
            <img src="img/profile/client-2.jpg" alt="" />
            <div className="info-text">
              <h3>Evelyn Pete</h3>
              <p>Web Developer</p>
              <div className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="story">
            <p>Highly recomended! The personalized</p>
            <p>feedback and real-world application in the</p>
            <p>courses have elevated my understanding</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;