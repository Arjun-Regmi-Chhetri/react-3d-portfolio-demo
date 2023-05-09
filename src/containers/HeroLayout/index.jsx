import {Styles} from '../../styles'
import Itype from '../../hooks/itype';
import {ComputerCanvas} from "../../components/canvas";
const HeroLayout =()=>{
    return(
       <section className={`relative w-full h-screen mx-auto mb-10px gradient-bg `} style={{
        height:'130vh',
       }}>

        <div className={`absolute inset-0 md:top-[180px] top-[160px] md:max-w-7xl  max-w-full mx-auto  ${Styles.paddingX} flex flex-row items-start gap-5 justify-center md:justify-start `}>
        
            <div className='itypeIntro md:text-start text-center'>
                <p className='cursive text-secondary text-[23px] mt-5 tracking-normal '>Hi, my name  is</p>
                <div className='mt-5 text-blue-light'>
                    <span className='font-bold md:text-[55px] text-[25px] '>
                        <Itype />
                    </span>
                </div>
                <h2 className='text-white-light font-bold txt-green-gradient' style={{
                    fontSize:'clamp(40px, 7vw, 60px)',
                }}>
                    I build things for the web.
                </h2>
            </div>

        </div>

        <ComputerCanvas/>
      
        
       </section>
    )
}

export default HeroLayout;