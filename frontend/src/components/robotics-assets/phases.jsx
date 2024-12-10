import PropTypes from "prop-types";
import simpleLedCircuit from './Simple-LED-Circuit.jpg';
import blinkLedWokwi from './Blink-LED-Wokwi.png';
import digitalInputOutput from './digitalInputOutput.png';
import hCWokwi from './HC-SR04.png';

const LineComponent = ({title, description}) => {
    return (
      <div className='flex'>
        <h3 className="font-semibold text-md flex-1 mb-2 gap-2">
          {title}:   
        </h3>
        <p className='mb-2 w-[80%]'>
          {description}
        </p>
      </div>
    );
  };
  
  LineComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

export const phases = {
    0: {
      title: "General Introduction to Robotics",
      description: "Learn the basics of robotics and its applications",
      lessons: [
        {
          title: "What is Robotics?",
          content: `
            Robotics is the interdisciplinary branch of engineering and science that includes mechanical engineering, electrical engineering, computer science, and others. Robotics deals with the design, construction, operation, and use of robots, as well as computer systems for their control, sensory feedback, and information processing.
          `
        },
        {
          title: "Applications of Robotics",
          content: (
            <>
            <h3>Robotics has a wide range of applications, including: </h3>
            <ul className='list-inside list-disc pl-12 pb-3'>
              <li>Industrial automation</li>
              <li>Medical robotics</li>
              <li>Autonomous vehicles</li>
              <li>Military applications</li>
              <li>Space exploration</li>
              <li>Home automation</li>
            </ul>
            </>
          )
        },
        {
          title: "Robot Components",
          content: (
            <>
              <LineComponent
                title="Manipulator/rover"
                description="The main body of the robot. It consists of links, joints, and other structural elements of the robot." 
              />
              <LineComponent
                title="Actuators"
                description="The components that provide motion to the robot. Examples include motors, pneumatic cylinders, and hydraulic actuators."
              /> 
              <LineComponent
                title="Sensors"
                description="Devices that provide feedback to the robot about its environment. Examples include cameras, ultrasonic sensors, and encoders."
              />
              <LineComponent
                title="Controller"
                description="The brain of the robot. It processes sensor data and sends commands to the actuators to control the robot's behavior."
              />
              <LineComponent
                title="Power Supply"
                description="Provides electrical power to the robot's components. It can be a battery, power adapter, or other power source."
              />
              <LineComponent
                title="End Effector"
                description="The tool or device attached to the robot's manipulator to perform specific tasks. Examples include grippers, welding torches, and sensors."
              />
            </>
          )
        },
        {
          title: "Robotics Intro in a Video",
          content: (
            <>
              <h3 className='pt-3'> 
                Watch this video to get a general introduction to robotics:
              </h3>
              <div className='flex justify-center pt-6'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/pwwVOpXrazs?si=bD918wvcbmTpviQh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </>
          )
        }
      ],
      quiz: [
        {
          question: "What is the main body of a robot called?",
          options: [
            "Actuator",
            "Controller",
            "Manipulator",
            "Sensor"
          ],
          correct: 2
        },
        {
          question: "From the next options, Which is NOT a part of a robot?",
          options: [
            "Power Supply",
            "End Effector",
            "Controller",
            "Spark"
          ],
          correct: 3
        },
        {
          question: "What is the purpose of sensors in a robot?",
          options: [
            "To provide motion to the robot",
            "To process sensor data",
            "To provide feedback about the environment",
            "To control the robot's behavior"
          ],
          correct: 2
        },
        {
          question: "Which of the following is NOT an application of robotics?",
          options: [
            "Industrial automation",
            "Medical robotics",
            "Software development",
            "Agriculture"
          ],
          correct: 2
        },
        {
          question: "What is the main function of the controller in a robot?",
          options: [
            "To provide power to the robot",
            "To send data to the sensors",
            "To move the robot's body",
            "To control the robot's behavior"
          ],
          correct: 3
        }
      ] 
    },
    1: {
      title: "Resources and Tools for Robotics",
      description: "Discover the tools and platforms used in robotics",
      lessons: [
        {
          title: "Introduction to Wokwi",
          content: (
            <>
              <h3>What is Wokwi?</h3>
              <p>
                Wokwi is an online platform for learning and simulating electronics and robotics. With Wokwi, you can:
              </p>
              <ul className='list-inside list-disc pl-8 pb-3'>
                <li>Create and simulate circuits</li>
                <li>Program Arduino and other micro-controllers</li>
                <li>Learn electronics and robotics concepts</li>
                <li>Share your projects with others</li>
              </ul>
              <p>
                Let's start by creating an account on Wokwi and exploring the platform.
              </p>
              <p> Go to this link to create an account: <a
              className='text-blue-500 font-bold pl-3' href="https://wokwi.com/" target="_blank">Wokwi
              </a></p>
            </>
          )
        },
        {
          title: "Getting Started with Arduino IDE",
          content: (
            <>
              <h3>What is Arduino IDE?</h3>
              <p>
                Arduino IDE is the official software for programming Arduino micro-controllers. With Arduino IDE, you can:
              </p>
              <ul className='list-inside list-disc pl-8 pb-3'>
                <li>Write and upload code to Arduino boards</li>
                <li>Use libraries for additional functionality</li>
                <li>Monitor serial output for debugging</li>
                <li>Create projects with Arduino boards</li>
              </ul>
              <p>
                Let's start by downloading and installing Arduino IDE on your computer.
              </p>
              <p>go to this link to download the software: <a
              className='text-blue-500 font-bold pl-3' href="https://www.arduino.cc/en/donate/newsletter" target="_blank">Arduino IDE
              </a></p>

            </>
          )
        },
        {
          title: "(Optional) Robotics Materials and Kits for a better learning experience",
          content: (
            <>
              <h3>Robotics Materials and Kits</h3>
              <p>
                To get hands-on experience with robotics, you can purchase robotics kits and materials. Some popular kits include:
              </p>
              <div className='pl-8 pb-3'>
                  <LineComponent
                    title=" Arduino Uno"
                    description="A popular micro-controller board for beginners. It is easy to use and has a large community."
                  />
                  <LineComponent
                    title="Breaboard"
                    description="A prototyping board for building circuits. It allows you to quickly test and modify circuits."
                  />
                  <LineComponent
                    title="Jumper Wires"
                    description="Wires used to connect components in a circuit. They come in different lengths and colors."
                  />
                  <LineComponent
                    title="LEDs and Resistors"
                    description="Basic components for learning electronics. LEDs emit light, while resistors control current flow."
                  />
                  <LineComponent
                    title="DC Motors"
                    description="Components for building moving robots. Motors provide motion."
                  />
                  <LineComponent
                    title="Motor Drivers"
                    description="Circuits that control the speed and direction of motors. They are essential for robot movement."
                  />
                  <LineComponent
                    title="Ultrasonic Sensors"
                    description="Sensors that measure distance using sound waves. They are perfect for obstacle avoidance."
                  />
                  <LineComponent
                    title="Servo Motors"
                    description="Motors that can rotate to a specific angle. They are ideal for robotic arms and wheels."
                  />
                  <LineComponent
                    title="Power Supply (Two 18650 Batteries) and a Battery Holder"
                    description="Provides electrical power to the robot. It can be a battery pack or power adapter."
                  />
              </div>
              <div>
                <p>Here are two links where you can purchase robotics kits and materials:</p>
                <ul className='list-inside list-disc pl-8 pb-3'>
                  <li>
                    <a className='text-blue-500 font-bold pl-3' href="https://tuni-smart-innovation.com/" target="_blank">Tuni Smart Innovation
                    </a>
                  </li>
                  <li>
                    <a className='text-blue-500 font-bold pl-3' href="https://www.little-son.com/" target="_blank">Little Son
                    </a>
                  </li>
                  <li>
                    <a className='text-blue-500 font-bold pl-3' href="https://2btrading.tn/" target="_blank">2B Trading
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )
        }
      ],
    },
    2: {
        title: "Introduction to Electronics",
        description: "Learn the basics of electronics and circuits",
        lessons: [
          {
            title: "Basic Electronics Components",
            content: (
              <>
                <h3>Essential Electronic Components</h3>
                <div className='space-y-4'>
                  <div>
                    <LineComponent
                      title="Resistors"
                      description="Components that limit current flow in a circuit. Come in different values measured in ohms (Ω)."
                    />
                    <div className='pl-8 pt-2'>
                      <img 
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyJLfSwgyvsIgo9_-m87u_tKPbyBsoOjLPiUVcaveEvadFMjcYT4MkKPRHxRVAvadmxDaXHIfeHReyDBQLJrBZMyXMX5dZl0p1lNKq5p3d1ebyf_0m59ONnqrctqLmMowKFznkBXqdWC4/s16000/Resistor-color-code-table.webp" 
                        alt="Resistor types and color codes" 
                        className='rounded-lg shadow-md'
                      />
                    </div>
                  </div>
    
                  <div>
                    <LineComponent
                      title="Capacitors"
                      description="Store and release electrical charge. Essential for filtering and timing circuits."
                    />
                    <div className='pl-8 pt-2'>
                      <img 
                        src="https://www.etechnophiles.com/wp-content/uploads/2022/08/types-of-capacitors-new-1024x623.png?ezimgfmt=rs:735x447/rscb44/ng:webp/ngcb43" 
                        alt="Capacitor types" 
                        className='rounded-lg shadow-md'
                      />
                    </div>
                  </div>
    
                  <div>
                    <LineComponent
                      title="LEDs (Light Emitting Diodes)"
                      description="Semiconductor devices that emit light when current flows through them."
                    />
                    <div className='pl-8 pt-2 flex w-full gap-2'>
                        <img 
                            src={simpleLedCircuit} 
                            alt="LED circuit diagram" 
                            className='rounded-lg shadow-md w-[48%]'
                        />
                        <img 
                            src="https://circuitdigest.com/sites/default/files/circuitdiagram/simple-led-ckt_0.png" 
                            alt="LED circuit diagram" 
                            className='rounded-lg shadow-md w-[48%]'
                        />
                    </div>
                  </div>
    
                  <div>
                    <LineComponent
                      title="Switches"
                      description="Control the flow of electricity by making or breaking circuit connections."
                    />
                  </div>
    
                  <div className='bg-blue-50 p-4 rounded-lg mt-6'>
                    <h4 className='font-bold mb-2'>Practical Exercise:</h4>
                    <p>Build this simple LED circuit in Wokwi:</p>
                    <img 
                      src="https://roboticsbackend.com/wp-content/uploads/2021/09/arduino_led_circuit.png" 
                      alt="Wokwi LED circuit project" 
                      className='rounded-lg shadow-md my-4'
                    />
                    <a 
                      href="https://wokwi.com/projects/new/arduino-uno" 
                      target="_blank" 
                      className='text-blue-600 hover:text-blue-800'
                    >
                      Open Wokwi to start the project →
                    </a>
                  </div>
                </div>
              </>
            )
          },
          {
            title: "Understanding Voltage, Current, and Resistance",
            content: (
                <div className='space-y-6'>
                  <div>
                    <h3>Core Electrical Concepts</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                      <div className='bg-white p-4 rounded-lg shadow'>
                        <h4 className='font-bold'>Voltage (V)</h4>
                        <p>Electrical pressure that pushes current through a circuit</p>
                      </div>
                      <div className='bg-white p-4 rounded-lg shadow'>
                        <h4 className='font-bold'>Current (I)</h4>
                        <p>Flow of electricity measured in amperes (A)</p>
                      </div>
                      <div className='bg-white p-4 rounded-lg shadow'>
                        <h4 className='font-bold'>Resistance (Ω)</h4>
                        <p>Opposition to current flow measured in ohms</p>
                      </div>
                    </div>
                  </div>
    
                  <div className='bg-white-50 p-4 rounded-lg flex flex-col gap-4 justify-center'>
                    <h4 className='font-bold'>Ohm's Law: V = I × R</h4>
                    <img 
                      src="https://cdn.shopify.com/s/files/1/0823/6200/7871/files/what-is-ohms-law-calculation_1.webp?v=1710796764" 
                      alt="Ohm's Law triangle" 
                      className='my-4 rounded'
                    />
                  </div>
                </div>
            )
          }
        ],
        quiz: [
            {
                question: "What is the main function of a resistor in a circuit?",
                options: [
                "Store electrical charge",
                "Limit current flow",
                "Control voltage",
                "Generate light"
                ],
                correct: 1
            },
            {
                question: "Which component emits light when current flows through it?",
                options: [
                "Capacitor",
                "Switch",
                "LED",
                "Transistor"
                ],
                correct: 2
            },
            {
                question: "What is the unit of measurement for current?",
                options: [
                "Volts",
                "Watts",
                "Amps",
                "Ohms"
                ],
                correct: 2
            },
            {
                question: "What is the relationship between voltage, current, and resistance in a circuit?",
                options: [
                "V = I + R",
                "V = I / R",
                "V = I * R",
                "V = I - R"
                ],
                correct: 2
            }
        ]
    },
    3: {
    title: "Introduction to Arduino",
    description: "Getting started with Arduino programming",
    lessons: [
        {
        title: "Arduino Basics and Setup",
        content: (
            <div className='space-y-6'>
                <div>
                <h3>Getting Started with Arduino</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                    <div className='bg-white p-4 rounded-lg shadow'>
                    <h4 className='font-bold'>Arduino Board Layout</h4>
                    <img 
                        src="https://polynoteshub.co.in/wp-content/uploads/2024/04/polynoteshub-2024-04-08T112920.721.jpg" 
                        alt="Arduino board layout" 
                        className='mt-2 rounded'
                    />
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow'>
                    <h4 className='font-bold'>Pin Types</h4>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li>Digital Pins (0-13)</li>
                        <li>Analog Pins (A0-A5)</li>
                        <li>Power Pins (5V, 3.3V, GND)</li>
                        <li>PWM Pins (~)</li>
                    </ul>
                    </div>
                </div>
                </div>

                <div className='bg-gray-50 p-4 rounded-lg'>
                <h4 className='font-bold'>Basic Arduino Program Structure</h4>
                <pre className='bg-gray-800 text-white p-4 rounded mt-2'>
                    {
                    `
        int ledPin = 2;

        void setup() {
            // Runs once at startup
            pinMode(ledPin, OUTPUT);
        }

        void loop() {
            // Runs repeatedly
            digitalWrite(ledPin, HIGH);
            delay(1000);
            digitalWrite(ledPin, LOW);
            delay(1000);
        }`
    }
                </pre>
                </div>

                <div className='bg-blue-50 p-4 rounded-lg'>
                <h4 className='font-bold'>Your First Project: Blinking LED</h4>
                <img 
                    src={blinkLedWokwi} 
                    alt="Blinking LED project" 
                    className='mt-4 rounded'
                />
                <a 
                    href="https://wokwi.com/projects/new/arduino-uno" 
                    target="_blank" 
                    className='text-blue-600 hover:text-blue-800 block mt-4'
                >
                    Try it on Wokwi →
                </a>
                </div>
            </div>
        )
        },
        {
        title: "Digital Input/Output",
        content: (
            <div className='space-y-6'>
                <div>
                <h3>Working with Digital Signals</h3>
                <div className='flex gap-6 mt-4'>
                    <div className='bg-white p-4 rounded-lg shadow'>
                    <h4 className='font-bold'>Digital Output and digital Input Example Code</h4>
                    <pre className='bg-gray-800 text-white p-2 rounded mt-2'>
                    {
                    `
int pushButtonPin = 4; 
int LedPin = 2; 


void setup() {
  pinMode(LedPin, OUTPUT);
  pinMode(pushButtonPin, INPUT_PULLUP);
}

void loop() {
  int value = digitalRead(pushButtonPin);
  digitalWrite(LedPin, value * 255);
  delay(200);
} `
    }
                </pre>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow'>
                    <h4 className='font-bold'>Digital Input and OutPut Example Circuit</h4>
                    <img 
                        src={digitalInputOutput} 
                        alt="Digital input circuit" 
                        className='mt-2 rounded'
                    />
                    </div>
                </div>
                </div>

                <div className='bg-green-50 p-4 rounded-lg'>
                <h4 className='font-bold'>Project: Traffic Light System</h4>
                <p className='mt-2'>Build an interactive traffic light with pedestrian crossing button:</p>
                <div className='mt-4 space-y-2'>
                    <p className='font-semibold'>Components needed:</p>
                    <ul className='list-disc pl-5'>
                    <li>3 LEDs (Red, Yellow, Green)</li>
                    <li>1 Push button</li>
                    <li>4 Resistors (220Ω)</li>
                    <li>Jumper wires</li>
                    <li>Breadboard</li>
                    </ul>
                </div>
                <a 
                    href="https://wokwi.com/projects/new/arduino-uno" 
                    target="_blank" 
                    className='text-blue-600 hover:text-blue-800 block mt-4'
                >
                    Build the Traffic Light on Wokwi →
                </a>
                </div>
            </div>
        )
        }   
    ],
    quiz: [
        {
            question: "What is the purpose of the setup() function in Arduino?",
            options: [
            "To declare variables",
            "To run code repeatedly",
            "To initialize the program",
            "To read sensor data"
            ],
            correct: 2
        },
        {
            question: "What is the purpose of the loop() function in Arduino?",
            options: [
            "To declare variables",
            "To run code repeatedly",
            "To initialize the program",
            "To read sensor data"
            ],
            correct: 1
        },
        {
            question: "What is the function of pinMode(pin, mode) in Arduino?",
            options: [
            "Read the value of a pin",
            "Set the value of a pin",
            "Set the mode of a pin",
            "Set the frequency of a pin"
            ],
            correct: 2
        },
        {
            question: "What does digitalWrite(pin, value) do in Arduino?",
            options: [
            "Read the value of a pin",
            "Set the value of a pin",
            "Set the mode of a pin",
            "Set the frequency of a pin"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of the delay(ms) function in Arduino?",
            options: [
            "Delay the program for a specified time",
            "Set the value of a pin",
            "Set the mode of a pin",
            "Set the frequency of a pin"
            ],
            correct: 0
        }
    ]
    },
    4: {
        title: "Sensors and Actuators",
        description: "Learn about different types of sensors and how to use them",
        lessons: [
          {
            title: "Digital Sensors",
            content: (
                <div className='space-y-6'>
                  <h3>Common Digital Sensors in Robotics</h3>
                  
                  <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h4 className='font-bold text-xl mb-4'>IR Proximity Sensors</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div>
                        <LineComponent
                          title="Specifications"
                          description="Detection range: 2-6cm, Perfect for line following robots and obstacle detection"
                        />
                        <img 
                          src="https://osoyoo.com/wp-content/uploads/2017/07/track-sensor-pinout-1.jpg" 
                          alt="IR sensor pin out" 
                          className='mt-4 rounded-lg'
                        />
                      </div>
                      <div className='bg-gray-50 p-4 rounded-lg'>
                        <h5 className='font-semibold mb-2'>Example Code:</h5>
                        <pre className='bg-gray-800 text-white p-4 rounded text-sm'>
                          {`
int irPin = 7;

void setup() {
    pinMode(irPin, INPUT);
    Serial.begin(9600);
}

void loop() {
    if(digitalRead(irPin) == LOW) {
    Serial.println("Object detected!");
    } else {
    Serial.println("No object");
    }
    delay(100);
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
    
                  <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h4 className='font-bold text-xl mb-4'>Ultrasonic Distance Sensors (HC-SR04)</h4>
                    <div className="flex gap-6 pb-6">
                        <h4 >
                            You can read more about the HC-SR04 sensor here:
                        </h4>
                        <a className="text-blue-400" href="https://howtomechatronics.com/tutorials/arduino/ultrasonic-sensor-hc-sr04/"> HC-SR04 </a>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div>
                        <div className="flex flex-col gap-6 pb-6">
                            <h4 className="text-bold text-xl">
                                Key Features:
                            </h4>
                            <p>Range: 2-200cm, Uses echo location principle, Requires Trigger and Echo pins</p>
                        </div>
                        <img 
                          src="https://howtomechatronics.com/wp-content/uploads/2022/02/HC-SR04-Ultrasonic-Sensor-Pinout.png?ezimgfmt=rs:417x436/rscb2/ng:webp/ngcb2" 
                          alt="HC-SR04 wiring" 
                          className='mt-4 rounded-lg'
                        />
                      </div>
                      <div>
                        <div className='bg-blue-50 p-4 rounded-lg'>
                          <h5 className='font-semibold mb-2'>Practice Project: Distance Meter</h5>
                          <p>Build this circuit on Wokwi:</p>
                          <img 
                            src={hCWokwi} 
                            alt="Distance meter project" 
                            className='mt-2 rounded-lg'
                          />
                          <a 
                            href="https://wokwi.com/projects/new/arduino-uno" 
                            target="_blank" 
                            className='text-blue-600 hover:text-blue-800 block mt-2'
                          >
                            Start Project on Wokwi →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )
          },
          {
            title: "Analog Sensors",
            content: (
                <div className='space-y-6'>
                    <h3>Essential Analog Sensors</h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h4 className='font-bold text-xl mb-4'>Light Dependent Resistors (LDR)</h4>
                        <a className="text-blue-400" href="https://theorycircuit.com/arduino-projects/ldr-light-sensor-arduino-interfacing/" target="_blank"> Read More About LDR </a> 
                        <img 
                            src="https://theorycircuit.com/wp-content/uploads/2024/04/LDR-Light-Sensor-Arduino-Interface-1024x609.png" 
                            alt="LDR characteristics" 
                            className='rounded-lg mb-4'
                        />
                        <LineComponent
                        title="Applications"
                        description="Light-following robots, Automatic lighting systems, Light-based triggers"
                        />
                        <LineComponent
                        title="Connection"
                        description="Analog pins (A0-A5), Voltage divider configuration required"
                        />
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h4 className='font-bold text-xl mb-4'>Temperature Sensors (DHT11)</h4>
                        <a className="text-blue-400" href="https://www.circuitbasics.com/how-to-set-up-the-dht11-humidity-sensor-on-an-arduino/" target="_blank"> Read More About DHT11 </a>
                        <img 
                        src="https://www.circuitbasics.com/wp-content/uploads/2015/10/Arduino-DHT11-Tutorial-3-Pin-DHT11-Wiring-Diagram.png" 
                        alt="DHT11 connections" 
                        className='rounded-lg mb-4'
                        />
                        <LineComponent
                        title="Specifications"
                        description="10mV per degree Celsius, Linear output, Operating range: 0°C to 40°C"
                        />
                    </div>
                    </div>

                    <div className='bg-green-50 p-6 rounded-lg'>
                    <h4 className='font-bold text-xl mb-4'>Practice Project: Temperature-Controlled LED System</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                        <h5 className='font-semibold mb-2'>Project Requirements:</h5>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li>RGB LED changes color based on temperature</li>
                            <li>Temperature thresholds for color changes</li>
                            <li>Serial monitor output for debugging</li>
                        </ul>
                        </div>
                        <div className='bg-white p-4 rounded-lg'>
                        <h5 className='font-semibold mb-2'>Implementation Steps:</h5>
                        <ol className='list-decimal pl-5 space-y-2'>
                            <li>Connect LM35 to analog pin</li>
                            <li>Wire RGB LED with current-limiting resistors</li>
                            <li>Write code for temperature reading</li>
                            <li>Implement color mapping logic</li>
                        </ol>
                        <a 
                            href="https://wokwi.com/projects/new/arduino-uno" 
                            target="_blank" 
                            className='text-blue-600 hover:text-blue-800 block mt-4'
                        >
                            Build on Wokwi →
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            )
          }
        ],
        quiz: [
            {
                question: "What is the main application of an IR proximity sensor in robotics?",
                options: [
                "Temperature measurement",
                "Obstacle detection",
                "Line following",
                "Light sensing"
                ],
                correct: 1
            },
            {
                question: "What is the function of an ultrasonic distance sensor?",
                options: [
                "Detect light intensity",
                "Measure distance",
                "Detect temperature",
                "Detect humidity"
                ],
                correct: 1
            },
            {
                question: "What is the main application of an LDR in robotics?",
                options: [
                "Temperature measurement",
                "Obstacle detection",
                "Light sensing",
                "Distance measurement"
                ],
                correct: 2
            },
            {
                question: "What is the purpose of a DHT11 temperature sensor?",
                options: [
                "Detect light intensity",
                "Measure distance",
                "Detect temperature",
                "Detect humidity"
                ],
                correct: 2
            },
            {
                question: "What is the main function of an LM35 temperature sensor?",
                options: [
                "Detect light intensity",
                "Measure distance",
                "Detect temperature",
                "Detect humidity"
                ],
                correct: 2
            }
        ]
    },
    5: {
    title: "Motors and Motion Control",
    description: "Master different types of motors and motion control techniques",
    lessons: [
        {
        title: "DC Motors and Motor Drivers",
        content: (
            <div className='space-y-6'>
                <h3>Understanding DC Motor Control</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h4 className='font-bold text-xl mb-4'>Basic DC Motors</h4>
                    <a className="text-blue-400" href="https://www.iqsdirectory.com/articles/electric-motor/dc-motors.html" target="_blank"> Read More About DC Motors </a>
                    <img 
                    src="https://www.iqsdirectory.com/articles/electric-motor/dc-motors/dc-motor-construction-parts.jpg" 
                    alt="DC motor components" 
                    className='rounded-lg mb-4'
                    />
                    <LineComponent
                    title="Specifications"
                    description="Operating voltage: 3-12V, Requires H-Bridge for direction control"
                    />
                </div>

                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h4 className='font-bold text-xl mb-4'>L298N Motor Driver</h4>
                    <a className="text-blue-400" href="https://dali-keyelectronics.tn/en/product/l298n-module-pilote-moteur-pas-a-pas/" target="_blank"> Read More About L298N </a>
                    <img 
                    src="https://dali-keyelectronics.tn/storage/2022/10/Module-L298N-595x595.jpg" 
                    alt="L298N pinout" 
                    className='rounded-lg mb-4'
                    />
                    <LineComponent
                    title="Control Pins"
                    description="IN1/IN2: Direction control, ENA: Speed control (PWM)"
                    />
                </div>
                </div>

                <div className='bg-gray-50 p-6 rounded-lg'>
                <h4 className='font-bold text-xl mb-4'>Motor Control Code</h4>
                <pre className='bg-gray-800 text-white p-4 rounded text-sm'>
                    {`const int IN1 = 7;
const int IN2 = 8;
const int ENA = 9;

void setup() {
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);
    pinMode(ENA, OUTPUT);
}

void forward(int speed) {
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(ENA, speed);
}

void backward(int speed) {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    analogWrite(ENA, speed);
}

void stop() {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    analogWrite(ENA, 0);
}`}
                </pre>
                </div>
            </div>
        )
        },
        {
        title: "Servo Motors and Position Control",
        content: (
            <div className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h4 className='font-bold text-xl mb-4'>Standard Servo Motors</h4>
                    <img 
                    src="https://circuitspedia.com/wp-content/uploads/2020/04/servo-motor-pin-diagram-1024x802.jpg" 
                    alt="Servo motor diagram" 
                    className='rounded-lg mb-4'
                    />
                    <LineComponent
                    title="Features"
                    description="0-180 degree rotation, Built-in position control, 3-wire interface"
                    />
                </div>

                <div className='bg-white p-6 rounded-lg shadow-md'>
                <h4 className='font-bold text-xl mb-4'>
                    Continuous Servo Motor Code
                </h4>

                    <a className="text-blue-400" href="https://fmuser.net/content/?18260.html" target="_blank"> Read More About servo </a>
            
                    <img 
                    src="https://farm6.staticflickr.com/5488/12174104774_a89e238bcc_o.png" 
                    alt="kalman filter" 
                    className='rounded-lg mb-4'
                    />
                    <LineComponent
                    title="Applications"
                    description="Wheel drive, Conveyor systems, Continuous rotation needs"
                    />
                </div>
                </div>

                <div className='bg-yellow-50 p-6 rounded-lg'>
                <h4 className='font-bold text-xl mb-4'>Project: 2-DOF Robotic Arm</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                    <h5 className='font-semibold mb-2'>Components Needed:</h5>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li>2x Standard servo motors</li>
                        <li>Arduino Uno</li>
                        <li>Potentiometers for control</li>
                        <li>3D printed or laser-cut arm parts</li>
                    </ul>
                    </div>
                    <div className='bg-white p-4 rounded-lg'>
                    <h5 className='font-semibold mb-2'>Implementation Steps:</h5>
                    <ol className='list-decimal pl-5 space-y-2'>
                        <li>Assemble the mechanical structure</li>
                        <li>Connect servos to Arduino</li>
                        <li>Wire potentiometers for control</li>
                        <li>Program basic movements</li>
                        <li>Add position memory function</li>
                    </ol>
                    <a 
                        href="https://wokwi.com/projects/new/arduino-uno" 
                        target="_blank" 
                        className='text-blue-600 hover:text-blue-800 block mt-4'
                    >
                        Simulate on Wokwi →
                    </a>
                    </div>
                </div>
                </div>
            </div>
            )
        }
    ]
    },
    6: {
    title: "Advanced Robot Programming",
    description: "Master complex algorithms and robot behavior programming",
    lessons: [
        {
        title: "PID Control Systems",
        content: (
            <>
            <h3>Understanding PID Control</h3>
            <p className='pb-3'>
                PID (Proportional-Integral-Derivative) control is fundamental in robotics for precise motion control and stability.
            </p>
            <div className='pl-8 pb-3'>
                <LineComponent
                title="Proportional Control (P)"
                description="Responds in proportion to the current error. Like pushing harder when you're further from your goal."
                />
                <LineComponent
                title="Integral Control (I)"
                description="Accumulates past errors to eliminate steady-state error. Like remembering how long you've been off target."
                />
                <LineComponent
                title="Derivative Control (D)"
                description="Responds to the rate of error change. Like slowing down as you approach your target."
                />
            </div>
            
            <h4 className='pt-3'>Implementation Example:</h4>
            <div className='bg-gray-100 p-4 rounded-md my-3'>
                <pre className='overflow-x-auto'>
                {`class PIDController {
private:
    float kp, ki, kd;
    float prevError = 0;
    float integral = 0;
    unsigned long lastTime = 0;

public:
    PIDController(float p, float i, float d) : kp(p), ki(i), kd(d) {}
    
    float calculate(float setpoint, float measured) {
    unsigned long now = millis();
    float dt = (now - lastTime) / 1000.0;
    lastTime = now;
    
    float error = setpoint - measured;
    integral += error * dt;
    float derivative = (error - prevError) / dt;
    prevError = error;
    
    return kp * error + ki * integral + kd * derivative;
    }
};`}
                </pre>
            </div>
            
            <div className='pl-8 pb-3'>
                <LineComponent
                title="Visualization"
                description="TODO: Add interactive PID tuning visualization"
                />
            </div>
            </>
        )
        },
        {
        title: "Robot Kinematics and Path Planning",
        content: (
            <>
            <h3>Advanced Motion Planning</h3>
            <div className='pl-8 pb-3'>
                <LineComponent
                title="Forward Kinematics"
                description="Calculate end-effector position from joint angles using DH parameters and transformation matrices."
                />
                <LineComponent
                title="Inverse Kinematics"
                description="Calculate required joint angles to reach a desired end-effector position."
                />
                <LineComponent
                title="Path Planning"
                description="Generate smooth trajectories while avoiding obstacles and singularities."
                />
            </div>

            <h4 className='pt-3'>2R Planar Arm Implementation:</h4>
            <div className='bg-gray-100 p-4 rounded-md my-3'>
                <pre className='overflow-x-auto'>
                {`struct Point2D {
float x, y;
};

class RoboticArm {
private:
    float l1, l2; // Link lengths
    
public:
    Point2D forwardKinematics(float theta1, float theta2) {
    Point2D pos;
    pos.x = l1 * cos(theta1) + l2 * cos(theta1 + theta2);
    pos.y = l1 * sin(theta1) + l2 * sin(theta1 + theta2);
    return pos;
    }
    
    bool inverseKinematics(Point2D target, float& theta1, float& theta2) {
    float d = sqrt(target.x * target.x + target.y * target.y);
    if (d > (l1 + l2)) return false; // Point unreachable
    
    // Calculate angles using cosine law
    float cos_theta2 = (d*d - l1*l1 - l2*l2) / (2*l1*l2);
    theta2 = acos(cos_theta2);
    theta1 = atan2(target.y, target.x) - 
            atan2(l2 * sin(theta2), l1 + l2 * cos(theta2));
    return true;
    }
};`}
                </pre>
            </div>

            <div className='pl-8 pb-3'>
                <LineComponent
                title="Kinematics Visualization"
                description="TODO: Add interactive 2R arm visualization"
                />
            </div>
            </>
        )
        },
        {
        title: "Advanced Motion Control",
        content: (
            <>
            <h3>Complex Motion Control Algorithms</h3>
            <div className='pl-8 pb-3'>
                <LineComponent
                title="Trajectory Generation"
                description="Create smooth, time-optimal paths between points while respecting velocity and acceleration constraints."
                />
                <LineComponent
                title="Dynamic Control"
                description="Account for robot dynamics, inertia, and external forces in motion planning."
                />
                <LineComponent
                title="Compliance Control"
                description="Implement force-sensitive behaviors for safe human-robot interaction."
                />
            </div>
        
            </>
        )
        }
    ],
    quiz: [
        {
        question: "Which PID term helps reduce steady-state error?",
        options: [
            "Proportional",
            "Integral",
            "Derivative",
            "None of the above"
        ],
        correct: 1
        },
        {
        question: "What is a singularity in robot kinematics?",
        options: [
            "A software bug",
            "A mechanical failure",
            "A configuration where the robot loses one or more degrees of freedom",
            "A power surge"
        ],
        correct: 2
        },
        {
        question: "In a PID controller, what does the derivative term primarily help with?",
        options: [
            "Steady-state error",
            "System overshoot",
            "Initial response speed",
            "Error accumulation"
        ],
        correct: 1
        },
        {
        question: "Which of the following is NOT part of forward kinematics calculations?",
        options: [
            "DH parameters",
            "Transformation matrices",
            "Joint angles",
            "Motor current"
        ],
        correct: 3
        },
        {
        question: "What is the main challenge in inverse kinematics?",
        options: [
            "High computational cost",
            "Multiple possible solutions",
            "Hardware limitations",
            "Power consumption"
        ],
        correct: 1
        },
        {
        question: "Which control parameter would you adjust to reduce oscillations in a PID system?",
        options: [
            "Increase proportional gain",
            "Increase integral gain",
            "Decrease derivative gain",
            "Increase sampling rate"
        ],
        correct: 2
        }
    ]
    },
    7: {
    title: "Robot Intelligence and Integration",
    description: "Implement computer vision and advanced sensing capabilities",
    lessons: [
        {
        title: "Computer Vision Integration",
        content: (
            <>
            <h3>Advanced Vision Processing</h3>
            <p className="pb-4">
                Computer vision is a crucial component in modern robotics, enabling robots to understand and interact with their environment through visual data.
            </p>
            
            <LineComponent
                title="OpenCV with Arduino"
                description="Learn how to integrate computer vision capabilities with Arduino using OpenCV and serial communication"
            />
            
            <div className="pl-8 pb-4">
                <h4 className="font-bold pt-3">Key Components:</h4>
                <ul className="list-inside list-disc pl-4">
                <li>Serial communication protocol setup</li>
                <li>Image processing pipeline implementation</li>
                <li>Object detection and tracking algorithms</li>
                <li>Color-based object recognition</li>
                </ul>
            </div>
    
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold">Practice Project: Color Tracking Robot</h4>
                <p>Build a robot that can:</p>
                <ul className="list-inside list-disc pl-4">
                <li>Track specific colored objects</li>
                <li>Follow objects maintaining a set distance</li>
                <li>Respond to basic color-based gestures</li>
                </ul>
            </div>
    
            <div className='flex justify-center pt-6 pt-6'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/G78WBb5mOls?si=GluglFUtNEkL2eqa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>              </div>
            </>
        )
        },
        {
        title: "Multi-Sensor Fusion and AI",
        content: (
            <>
            <h3>Implementing Sensor Fusion</h3>
            <p className="pb-4">
                Sensor fusion combines data from multiple sensors to achieve more accurate and reliable measurements than using a single sensor.
            </p>
    
            <LineComponent
                title="Kalman Filter Implementation"
                description="Learn to implement a Kalman filter for accurate state estimation and sensor fusion"
            />
    
                    <a className="text-blue-400" href="https://blog.quantinsti.com/kalman-filter/" target="_blank"> Read More About Kalman Filter </a>
                    
                    <img 
                        src="https://d1rwhvwstyk9gu.cloudfront.net/2024/05/Kalman-filter-output.png" 
                        alt="kalman filter" 
                        className='rounded-lg mb-4'
                    />
                    
    
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold">Final Integration Project</h4>
                <p>Create an autonomous navigation robot featuring:</p>
                <ul className="list-inside list-disc pl-4">
                <li>SLAM implementation using multiple sensors</li>
                <li>Machine learning for obstacle recognition</li>
                <li>Web interface for monitoring and control</li>
                <li>Real-time sensor data visualization</li>
                </ul>
            </div>
    
            <div className="pt-4">
                <h4 className="font-bold">Project Resources:</h4>
                <ul className="list-inside list-disc pl-4">
                <li>
                    <a className="text-blue-500 hover:underline" href="https://wokwi.com/" target="_blank">
                    Wokwi Simulation Template
                    </a>
                </li>
                <li>
                    <a className="text-blue-500 hover:underline" href="#" target="_blank">
                    GitHub Repository with Sample Code
                    </a>
                </li>
                </ul>
            </div>
            </>
        )
        }
    ],
    quiz: [
        {
        question: "What is the primary purpose of a Kalman filter in robotics?",
        options: [
            "To control motor speed",
            "To process images",
            "To estimate state from noisy sensor measurements",
            "To establish wireless communication"
        ],
        correct: 2
        },
        {
        question: "Which library is commonly used for computer vision in robotics?",
        options: [
            "TensorFlow",
            "OpenCV",
            "PyTorch",
            "Matplotlib"
        ],
        correct: 1
        },
        {
        question: "What is SLAM in robotics?",
        options: [
            "Simultaneous Localization And Mapping",
            "Sequential Learning Algorithm Method",
            "Sensor Logic And Management",
            "System Linear Automation Module"
        ],
        correct: 0
        },
        {
        question: "Which of these is NOT a typical component in a computer vision system?",
        options: [
            "Camera",
            "Image processing algorithm",
            "Motor driver",
            "Frame buffer"
        ],
        correct: 2
        },
        {
        question: "What is sensor fusion?",
        options: [
            "Replacing broken sensors",
            "Combining data from multiple sensors",
            "Converting analog to digital signals",
            "Wireless sensor communication"
        ],
        correct: 1
        },
        {
        question: "Which color space is commonly used in computer vision for color detection?",
        options: [
            "RGB",
            "HSV",
            "CMYK",
            "Grayscale"
        ],
        correct: 1
        },
        {
        question: "What is the main advantage of using multiple sensors in robotics?",
        options: [
            "Lower cost",
            "Simpler programming",
            "Increased accuracy and reliability",
            "Faster processing speed"
        ],
        correct: 2
        },
        {
        question: "Which of these is a key component of an autonomous navigation system?",
        options: [
            "LED display",
            "Bluetooth module",
            "Path planning algorithm",
            "Sound sensor"
        ],
        correct: 2
        }
    ]
    }   
  };