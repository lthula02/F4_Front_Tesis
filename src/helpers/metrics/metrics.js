import {
  putMetrics,
  combineMetrics,
  compositeComponents,
} from '../../api/metrics/metrics.js';

const ManageMetrics = async (user, selectedProject, umbralName) => {
    // setReloadSidebar(true);
        await putMetrics(user,
        selectedProject.projectIndex,
        selectedProject.arcIndex,
        selectedProject.verIndex,
        umbralName);

      // ModalMessage(
      //   "¡Metricas calculadas con exito!",
      //   " ",
      //   "success",
      //   false,
      //   4000
      // );
    //window.location.reload()
  };


  const ManageCombineMetrics = async (user, selectedProject, weighing) => {
    await combineMetrics(
      user,
      selectedProject.projectIndex,
      selectedProject.arcIndex,
      selectedProject.verIndex,
      weighing
    );
  }

  const ManageCreateCompositeComponent = async (user, selectedProject, umbral_q) => {
    await compositeComponents (
      user,
      selectedProject.projectIndex,
      selectedProject.arcIndex,
      selectedProject.verIndex,
      umbral_q
    )
  }

  export { ManageMetrics, ManageCombineMetrics, ManageCreateCompositeComponent};
