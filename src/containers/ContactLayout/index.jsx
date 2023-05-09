 import { useState } from 'react';
 import {motion} from 'framer-motion'
 import {Styles} from '../../styles';
 import { slideIn } from "../../utils/motion";
 import { SectionWrapper } from '../../hoc';
 import {EarthCanvas} from '../../components/canvas'
 const ContactLayout = ()=>{
  /*ref={form} onSubmit={sendEmail}*/
  const [loading, setLoading] = useState(false);
    return(
       <section className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75]  p-8 roundex-2xl linear-bg'
        >
          <p className={Styles.sectionSubText}>Get in touch</p>
        <h3 className={` ${Styles.sectionHeadText}  txt-green-gradient`}>Contact.</h3>
                <form  className='mt-12 flex flex-col gap-8'> 
              
                      <input type="text" name="user_name" placeholder="Your Name" 
                      className="bg-transparent border border-[#9ccafa] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
                      required/>
                   
                 
                      <input type="email" name="user_email" placeholder="Your Email"
                        className="bg-transparent border border-[#9ccafa] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none  font-medium"
                      required />
                 
                     
                          <input type="text" name="from_name" placeholder="Subject" 
                            className="bg-transparent border border-[#9ccafa] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none  font-medium"
                          required/>
                     
                      
                          <textarea rows={7} type="text" name="message" placeholder="Enter your message"
                            className="bg-transparent border border-[#9ccafa] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none  font-medium"
                          required></textarea>
              
               
                            <button
                          type='submit'
                          className='bg-transparent border border-[#9ccafa] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                        >
                          {loading ? "Sending..." : "Send"}
                        </button>
                                                 
              </form>
          </motion.div>
          <motion.div 
            variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
            <EarthCanvas />
          </motion.div>
       </section>
    )
}

export default SectionWrapper(ContactLayout, "contact");