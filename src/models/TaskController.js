class TaskController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    init() {
      this.model.addObserver(this.view);
      this.model.fetchTasks();
    }
  
    handleCreateTask = (taskData) => {
      this.model.createTask(taskData);
    }
  
    handleStatusUpdate = (taskId, status) => {
      this.model.updateTaskStatus(taskId, status);
    }
  }