

import Typewriter from "typewriter-effect";

const Typed= () => {
  return (
    <div>
            <h2>

                <span  className="type_Effect">
                  <Typewriter
                    options={{
                      autoStart: true,
                      delay: 30,
                      pauseFor:1500,
                      loop: true,
                      strings: [
                        '<span id="typ">Welcome to <span style="color: coral;">Our Gym </span>Explore Excellence</span>',
                        '<span id="typ"> Join Us to  <span style="color: coral;">Transform</span>   Your Body fitness </span>',
                        '<span id="typ">Embark on a Fitness <span style="color: coral;">Revolution</span> Today </span>',
                    ],
                    
                      devMode: false,
                      wrapperClassName: "typed-wrapper",
                      cursorClassName: "typed-cursor",
                    }}
                  />
                </span>
              </h2>

    </div>
  )
}

export default Typed