class TaskModel {
    constructor() {
      this.tasks = [];
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    notifyObservers() {
      this.observers.forEach(observer => observer.update(this.tasks));
    }
  
    async fetchTasks() {
      try {
        const response = await axios.get('/api/tasks');
        this.tasks = response.data;
        this.notifyObservers();
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }
  
    async createTask(taskData) {
      try {
        const response = await axios.post('/api/tasks', taskData);
        this.tasks.push(response.data);
        this.notifyObservers();
      } catch (error) {
        console.error('Error creating task:', error);
      }
    }
  
    async updateTaskStatus(taskId, status) {
      try {
        await axios.patch(`/api/tasks/${taskId}`, { status });
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
          task.status = status;
          this.notifyObservers();
        }
      } catch (error) {
        console.error('Error updating task status:', error);
      }
    }
  }
  