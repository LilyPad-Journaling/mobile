import React, { useState, useEffect } from 'react';

const useJournal = props => {
    const { data, userID, updateJournal } = props;

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    // Is called when Journal is opened
    useEffect(() => {
        console.log("useJournal", data)
        // setTitle(data.title);
        // setBody(data.body);
    }, []);

    // Called when Journal is closed
    // componentWillUnmount equivalent https://stackoverflow.com/questions/55139386/componentwillunmount-with-react-useeffect-hook
    useEffect(() => {
        return () => {
            updateJournal(userID, data.id, title, body);
        }
    }, [props.current]);

    return {
        title,
        body,
        setTitle,
        setBody
    }
}

export default useJournal;