

import Typed from './Typed'


const HeroSection = () => {
    return (
        <> 
              
        <div className="container">
            
            <div className="row ">
      
               <div className='col-sm-6  mt-5'>
                <div className='mt-2 mb-2 d-flex justify-content-start fw-bold h1 mt-5' > Hi Fitness Fans!</div>

                    <div className='mt-3 mb-3 ' >  < Typed /></div>
                    <div className='mt-3 mb-3 fw-bold text-center' >  
                    Elevate your fitness journey with us. Our state-of-the-art gym, top-notch trainers, and dynamic classes create an empowering environment to conquer your aspirations.
                     Join us to unleash your full potential and embrace a vibrant lifestyle of vitality and achievement
                    </div>

                    
                    <div className='mt-1 mb-3 fw-bold text-center text-danger ' >  
                      Train, Transform, Triumph – Unleash Your Fitness Journey     
                             </div>


                    <div className='mt-1 mb-2 ' >  
           <button className='btn btn-dark m-4'>Explore Exercise</button>  
               
            <button className='btn btn-dark '>Explore Plans</button>
                    </div>
                </div> 

                <div className='col-sm-6 main'>

                    <div id='main1'>
                        <img id='img' src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                    </div>

                </div>




            </div>


        </div>
        </>

    )
}

export default HeroSection