import { Todo } from '../types/Todo';
import { TodoItem } from '../components';

interface Props {
  visibleTodos: Todo[];
  handleDeleteTodo: (todoId: number) => void;
  todosBeingDeleted: number[];
  updateTodo: (todo: Todo) => Promise<void>;
  todosBeingLoaded: number[];
  setErrorMessage: (arg: string) => void;
}

export const TodoList: React.FC<Props> = ({
  visibleTodos,
  handleDeleteTodo,
  todosBeingDeleted,
  updateTodo,
  todosBeingLoaded,
  setErrorMessage,
}: Props) =>
  visibleTodos.map(todo => (
    <TodoItem
      todo={todo}
      key={todo.id}
      handleDeleteTodo={handleDeleteTodo}
      todosBeingDeleted={todosBeingDeleted}
      updateTodo={updateTodo}
      todosBeingLoaded={todosBeingLoaded}
      setErrorMessage={setErrorMessage}
    />
  ));
