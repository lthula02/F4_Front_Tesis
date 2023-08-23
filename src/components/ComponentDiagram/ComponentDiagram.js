import axios from "axios";

const ComponentDiagram = (user, selectedProject) => {
    axios
        .put("/create_comp_diagram/", {
            data: {
                user_id: user.uid,
                project_index: selectedProject.projectIndex,
                arch_index: selectedProject.arcIndex,
                ver_index: selectedProject.verIndex,
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
