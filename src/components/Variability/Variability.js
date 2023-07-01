import React, { useContext, useEffect } from "react";
import AppContext from "../../auth/context/context";
import axios from "axios";
import { dividerClasses } from "@mui/material";

function Variability(user, selectedProject) {
    //const { user, selectedProject } = useContext(AppContext);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Entre en la línea antes de res");
            const res = await axios.put("/create_var_diagram/", {
                data: {
                    user_id: user.uid,
                    project_index: selectedProject.projectIndex,
                },
            });
        };

        fetchData();
    }, [user.uid, selectedProject.projectIndex]);

    return <div></div>;
}

export default Variability;

/*import React, { useContext, useEffect } from "react";
import AppContext from "../../auth/context/context";
import axios from "axios";

function Variability() {
    console.log("Llegue a Variability");
    const { user, selectedProject } = useContext(AppContext);

    useEffect(() => {
        fetchData();
    }, [user.uid, selectedProject.projectIndex]);

    const fetchData = async () => {
        console.log("Entre en la línea antes de res");
        const res = await axios.put("/create_var_diagram/", {
            data: {
                user_id: user.uid,
                project_index: selectedProject.projectIndex,
            },
        });
    };

    return null;
}

export default Variability;
*/
