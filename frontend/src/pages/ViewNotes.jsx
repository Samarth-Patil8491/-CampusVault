import { useEffect, useState } from "react";
import { getAllNotes } from "../services/NoteService";

function ViewNotes() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        try {
            const response = await getAllNotes();
            setNotes(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ padding: "30px" }}>

            <h1>All Notes</h1>

            <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>

                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Subject</th>
                        <th>Department</th>
                        <th>Semester</th>
                        <th>Uploaded By</th>
                        <th>Download</th>
                    </tr>
                </thead>

                <tbody>

                    {notes.map((note) => (

                        <tr key={note.id}>

                            <td>{note.title}</td>

                            <td>{note.subject}</td>

                            <td>{note.department}</td>

                            <td>{note.semester}</td>

                            <td>{note.uploadedBy}</td>

                            <td>
                                <a
                                    href={`http://localhost:8080/api/files/download/${note.fileName}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Download
                                </a>
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default ViewNotes;