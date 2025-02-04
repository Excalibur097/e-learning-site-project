const Hero = ()=>{
  return(
    <section className="hero">
      <div className="hero-text">
        <h1 className="header">
          Develop your skills in a new and unique way
        </h1>
        <p className="body">
          Explore a transformative approach to skill development in our online
          learning platform. Uncover a new realm of learning experiences and elevate your
          expertise in a unique way.
        </p>
        <div className="hero-buttons">
          <button className="btn2">Enroll Now</button>
          <button className="btn1">What is Etech</button>
        </div>
      </div>
      <div className="hero-display">
        <div className="circle-background"></div>
        <div className="main-display">
          <img src="img/student1.png" alt="" />
          <div className="display-banner bn1">
            <h4>50+</h4>
            <p>Online Courses</p>
          </div>
          <div className="display-banner bn2">
            <h5>Ui Design Class</h5>
            <button className="btn2">Join Now</button>
          </div>
          <div className="display-banner bn3">
            <h4>10k+</h4>
            <p>Online Students</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero