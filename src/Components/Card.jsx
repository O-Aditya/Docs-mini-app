/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
    return (
        <motion.div 
            drag 
            dragConstraints={reference} 
            whileDrag={{ scale: 1.2 }} 
            className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/80 text-white px-8 py-10 overflow-hidden"
        >
            <FaRegFileAlt />
            <p className="text-sm mt-5 font-semibold leading-tight">
                {data.desc}
            </p>
            <div className="footer absolute w-full left-0 bottom-0">
                <div className="flex items-center justify-between py-3 px-8 mb-3">
                    <h5>{data.filesize}</h5>
                    <span className="w-7 h-7 flex items-center justify-center bg-zinc-600 rounded-full">
                        {data.close ? <IoClose size="0.9em" color="#ffff" /> : <LuDownload size="0.9em" color="#ffff" />}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`flex justify-center items-center w-full py-3 ${data.tag.tagColor}`}>
                        <h3 className="text-md font-semibold">{data.tag.tagTitle}</h3>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Card;
