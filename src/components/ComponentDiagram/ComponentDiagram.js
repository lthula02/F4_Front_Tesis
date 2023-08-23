import axios from "axios";

const ComponentDiagram = (user, projectIndex) => {
    axios
        .put("/create_comp_diagram/", {
            data: {
                user_id: user.uid,
                project_index: projectIndex,
            },
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    return null;
};

export default ComponentDiagram;
