import { useState } from "react";
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const DocumentForm = ({ onAddDocument, onClose }) => {
    const [desc, setDesc] = useState("");
    const [filesize, setFilesize] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (desc && filesize) {
            onAddDocument({ desc, filesize, close: true, tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-green-600' } });
            setDesc("");
            setFilesize("");
            onClose(); // Close the form after submission
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <form onSubmit={handleSubmit} className="relative bg-zinc-900/80 text-white p-8 rounded-[45px] shadow-lg w-96">
               <span className="  w-7 h-7 flex items-center justify-center bg-zinc-600 rounded-full">
                <IoClose  onClick={onClose}/>
                </span>

                <h2 className="text-lg font-semibold mb-8 text-center">Add Document</h2>
                <input
                    type="text"
                    placeholder="Document Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="p-3 border border-gray-500 rounded w-full mb-4 bg-zinc-800 text-white"
                />
                <input
                    type="text"
                    placeholder="File Size"
                    value={filesize}
                    onChange={(e) => setFilesize(e.target.value)}
                    className="p-3 border border-gray-500 rounded w-full mb-6 bg-zinc-800 text-white"
                />
                <button type="submit" className="p-3 bg-blue-500 text-white rounded w-full">
                    Add Document
                </button>
            </form>
        </div>
    );
};

export default DocumentForm;
