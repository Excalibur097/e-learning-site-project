const AboutCourses = ()=>{
  return(
    <section className="about-courses">
      <div className="header1">
        <h2>Search Courses</h2>
        <form className="course-search" action="">
          <input className="input" placeholder="Search for over 50+ courses" type="text" />
          <button className="btn2">Search</button>
        </form>
      </div>
      <div className="body">
        <div className="about-img">
          <img src="img/whoshouldjoin_image.webp" alt="" />
        </div>
        <div className="about-desc">
          <div className="header">
            <h2><span>Benefit</span> From Our Online</h2>
            <h2>Learning</h2>
          </div>
          <div className="icon-desc">
            <div className="icon-child">
              <i class="fa-solid fa-graduation-cap dark"></i>
              <div className="child-desc">
                <h4>Online Degrees</h4>
                <p>
                  Earn accredited degrees from the comfort of your home, opening
                  doors to a world of possibilities
                </p>
              </div>
            </div>
            <div className="icon-child">
              <i class="fa-solid fa-book-open light"></i>
              <div className="child-desc">
                <h4>Short Courses</h4>
                <p>
                  Enhance your skills with our concised and focused short coursesdesigned 
                  for quick and effective learning
                </p>
              </div>
            </div>
            <div className="icon-child">
              <i class="fa-solid fa-user dark"></i>
              <div className="child-desc">
                <h4>Training From Experts</h4>
                <p>
                  Immerse yourself in knowledge from industry experts, guiding you through
                  hands-on experience
                </p>
              </div>
            </div>
            <div className="icon-child">
              <i class="fa-solid fa-play light"></i>
              <div className="child-desc">
                <h4>1.5k+ Videos</h4>
                <p>
                  Dive into a vast library of over 1.5k videos courses covering many subjects,
                  offering a visual learning experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCourses;