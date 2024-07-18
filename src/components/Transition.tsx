import { motion } from "framer-motion";
import React, {ReactElement} from "react";


interface ITransition {
    children: ReactElement
}

const Transition: React.FC<ITransition> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: [0.17, 0.67, 0.83, 0.67] }}
        >
            {children}
        </motion.div>
    );
}

export default Transition;
