import api from './api';


// Interface representando os dados das tarefas
export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

// Função para buscar todas as tarefas
export const getAllTasks = async (): Promise<Task[]> => {
    const response = await api.get<Task[]>('/tasks'); // GET all tasks
    return response.data;
};

// Função para buscar uma tarefa pelo ID
export const getTaskById = async (id: string): Promise<Task> => {
    const response = await api.get<Task>(`/tasks/${id}`); // GET task by ID
    return response.data;
};

// Função para criar uma nova tarefa
export const createTask = async (newTask: Omit<Task, 'id'>): Promise<Task> => {
    const response = await api.post<Task>('/tasks', newTask); // POST new task
    return response.data;
};

// Função para atualizar uma tarefa pelo ID
export const updateTask = async (id: string, updatedTask: Partial<Task>): Promise<Task> => {
    const response = await api.put<Task>(`/tasks/${id}`, updatedTask); // PUT task by ID
    return response.data;
};

// Função para deletar uma tarefa pelo ID
export const deleteTask = async (id: string): Promise<void> => {
    await api.delete(`/tasks/${id}`); // DELETE task by ID
};
