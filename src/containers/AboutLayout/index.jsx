import { motion } from "framer-motion"


const AboutLayout = () =>{
    return(
        <section className="relative w-full mx-auto mb-10px">
             <motion.div
                animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
            >
                <h2>Introduction.</h2>
            </motion.div>
        </section>
    )
}

export default AboutLayout;