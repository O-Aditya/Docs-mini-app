import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import Card from "./Card";
import DocumentForm from "./DocumentForm";

function Foreground() {
    const ref = useRef();
    const [documents, setDocuments] = useState([
        { desc: 'Lorem ipsum dolor sit amet ', filesize: "0.9MB", close: true, tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-green-600' },},
        { desc: 'Lorem ipsum dolor sit amet ', filesize: "0.9MB", close: true, tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-green-600' },}
    ]);
    const [isFormVisible, setFormVisible] = useState(false);

    const addDocument = (newDocument) => {
        setDocuments([...documents, newDocument]);
    };

    const toggleFormVisibility = () => {
        setFormVisible(!isFormVisible);
    };

    return (
        <div ref={ref} className='w-full h-full flex flex-col items-center gap-10 fixed top-0 left-0 z-[3] p-8'>
            <FaPlus 
                className="absolute top-5 right-5 text-2xl cursor-pointer"
                onClick={toggleFormVisibility}
            />
            {isFormVisible && <DocumentForm onAddDocument={addDocument} onClose={toggleFormVisibility} />}
            <div  className='flex flex-wrap justify-center items-start gap-8'>
                {documents.map((item, index) => (
                    <Card key={index} data={item} reference={ref} />
                ))}
            </div>
        </div>
    );
}

export default Foreground;
