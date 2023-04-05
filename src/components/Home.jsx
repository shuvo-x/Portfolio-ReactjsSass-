import React from 'react';
import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/shuvo1.png";

const Home = () => {
    const animations = {
        h1:{
            initial:{
                x:"-100%",
                opacity: 0,
            },
            whileInView:{
               x: 0,
               opacity: 1,
            }
        },
        button:{
            initial:{
                y:"-100%",
                opacity: 0,
            },
            whileInView:{
               y: 0,
               opacity: 1,
            }
        }
    }
  return (
    <div id="home">
        <section>
            <div>
                <motion.h1 {...animations.h1} >
                    Hi, I am <br /> Md.Shuvo
                </motion.h1>

                <Typewriter options={{
                    strings:["An Intermediate Developer", "A Designer",],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                    wrapperClassName: "typewriterpara",
                }}/>
                <div>
                    <a href="mail:mdarafatkhan83@gmail.com">Hire Me</a>
                     <a href="#work">Projects <BsArrowUpRight />
                    </a>
                </div>
                <article data-special>
                    <p>Contact</p>
                    <span>mdarafatkhan83@gmail.com</span>
                </article>
            </div>
        </section>
        <section>
            <img src={me} alt="Shuvo" />
        </section>
        <BsChevronDown />
    </div>
  )
}

export default Home