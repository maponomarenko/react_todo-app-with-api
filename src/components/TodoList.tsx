import { Todo } from '../types/Todo';
import { TodoItem } from '../components';
import { CSSTransition } from 'react-transition-group';

interface Props {
  visibleTodos: Todo[];
  handleDeleteTodo: (todoId: number) => void;
  updateTodo: (todo: Todo) => Promise<void>;
  todosBeingProcessed: number[];
  setErrorMessage: (arg: string) => void;
}

export const TodoList: React.FC<Props> = ({
  visibleTodos,
  handleDeleteTodo,
  updateTodo,
  todosBeingProcessed,
  setErrorMessage,
}: Props) =>
  visibleTodos.map(todo => (
    <CSSTransition key={0} timeout={300} classNames="item">
      <TodoItem
        todo={todo}
        key={todo.id}
        handleDeleteTodo={handleDeleteTodo}
        updateTodo={updateTodo}
        todosBeingProcessed={todosBeingProcessed}
        setErrorMessage={setErrorMessage}
      />
    </CSSTransition>
  ));
