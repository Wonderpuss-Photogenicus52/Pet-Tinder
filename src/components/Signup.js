import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div className="d-flex justify-content-center mt-5 ">

      <form action='http://localhost:4000/signup'>
        {/* submit the form to ending point 4000/signup */}
        <div className="p-3 d-flex flex-column justify-content-center border border-dark p-2 bg-light signupbox" style={{ maxWidth: '600px', borderRadius: '20px' }}>

          <div className='d-flex '><img src="http://www.akuziti.com/cache/166040868483808.png" alt="" /></div>
          <img className='w-10 ' src="https://www.alphapaw.com/wp-content/uploads/2020/08/photo_2020-11-05_16-20-12.jpg" alt="" />
          <input className="form-control form-control-lg mt-5" type="text" name='username' placeholder="username" aria-label=".form-control-lg example" />
          {/* username input box  */}
          <input className="form-control form-control-lg mt-1" type="text" password='password' placeholder="password" aria-label=".form-control-lg example" />
          {/* password input box */}
          <div className='fs-3 fw-bold mb-3 mt-3'>

            <img src="https://cdn3.iconfinder.com/data/icons/biology-15/96/Biology_Icon_Animal-512.png" style={{ maxWidth: '50px' }} alt="" />
            BIO
          </div>
          <textarea className='form-control-lg mb-4 bio-text' rows="" cols=""></textarea>
          <button className='btn btn-lg btn-primary mb-5' type="submit">SUBMIT</button>
          {/* this is submit button to submit all the form above */}
        </div>
      </form>
    </div>
  )
}

export default Signup