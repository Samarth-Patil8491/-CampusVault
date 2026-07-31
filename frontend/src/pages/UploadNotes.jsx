import { useState } from "react";
import { uploadNote } from "../services/NoteService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Upload.css";

function UploadNotes() {

    const [formData, setFormData] = useState({
        title: "",
        subject: "",
        department: "",
        semester: "",
        uploadedBy: ""
    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = new FormData();

        data.append("title", formData.title);
        data.append("subject", formData.subject);
        data.append("department", formData.department);
        data.append("semester", formData.semester);
        data.append("uploadedBy", formData.uploadedBy);
        data.append("file", file);

        try {

            const response = await uploadNote(data);

            toast.success(response.data.message);

        } catch (error) {

            toast.error("Upload Failed");

        }

    };

    return (

        <div className="upload-container">

            <ToastContainer />

            <div className="upload-box">

                <h2>Upload Notes</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="subject"
                        placeholder="Subject"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="department"
                        placeholder="Department"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="semester"
                        placeholder="Semester"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="uploadedBy"
                        placeholder="Uploaded By"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                    />

                    <button type="submit">
                        Upload
                    </button>

                </form>

            </div>

        </div>
    );
}

export default UploadNotes;