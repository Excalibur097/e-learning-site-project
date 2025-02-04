const Popularcourses = ()=>{
  return(
    <div className="popular-courses">
      <div className="pop-header">
        <h2>Our Popular Courses</h2>
        <p>
          Discover our most sought after courses carefully curated to
          meet the demands of today's learners. Dive into engaging content
          curated for success in every step of your educational journey 
        </p>
      </div>
      <div className="pop-body">
        <div className="course-card">
          <img src="img/courses/cp1.jpg" alt="" />
          <div className="card-title1">
            <p className="name">Web Design</p>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <p>4.8</p>
            </div>
          </div>
          <div className="card-title2">
            <h3>Web Design &</h3>
            <h3>Development</h3>
          </div>
          <div className="card-icons">
            <div className="card-icon-con">
              <i class="fa-solid fa-book-open"></i>
              <p>25 Courses</p>
            </div>
            <div className="card-icon-con">
              <i class="fa-solid fa-user"></i>
              <p>185 Students</p>
            </div>
          </div>
          <div className="card-footer">
            <h3>$560.00</h3>
            <div className="tutor">
              <div className="tutor-img">
                <img src="img/profile/client-1.jpg" alt="" />
                <div className="online"></div>
              </div>
              <p>J.Morgan</p>
            </div>
          </div>
        </div>
        <div className="course-card">
          <img src="img/courses/cp2.jpeg" alt="" />
          <div className="card-title1">
            <p className="name">UI/UX Design</p>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <p>5.0</p>
            </div>
          </div>
          <div className="card-title2">
            <h3>Wireframing &</h3>
            <h3>Prototyping</h3>
          </div>
          <div className="card-icons">
            <div className="card-icon-con">
              <i class="fa-solid fa-book-open"></i>
              <p>8 Classes</p>
            </div>
            <div className="card-icon-con">
              <i class="fa-solid fa-user"></i>
              <p>185 Students</p>
            </div>
          </div>
          <div className="card-footer">
            <h3>$160.00</h3>
            <div className="tutor">
              <div className="tutor-img">
                <img src="img/profile/client-2.jpg" alt="" />
                <div className="online"></div>
              </div>
              <p>Jordan Re</p>
            </div>
          </div>
        </div>
        <div className="course-card">
          <img src="img/courses/cp3.jpg" alt="" />
          <div className="card-title1">
            <p className="name">Data Science</p>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <p>5.0</p>
            </div>
          </div>
          <div className="card-title2">
            <h3>Data Science</h3>
            <h3>AI</h3>
          </div>
          <div className="card-icons">
            <div className="card-icon-con">
              <i class="fa-solid fa-book-open"></i>
              <p>18 Classes</p>
            </div>
            <div className="card-icon-con">
              <i class="fa-solid fa-user"></i>
              <p>400 Students</p>
            </div>
          </div>
          <div className="card-footer">
            <h3>$432.00</h3>
            <div className="tutor">
              <div className="tutor-img">
                <img src="img/profile/client-3.jpg" alt="" />
                <div className="online"></div>
              </div>
              <p>Alex Taylor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popularcourses;