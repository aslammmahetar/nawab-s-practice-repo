import { patchTodo } from "../api";
import { Todo, patch } from "../constant";

const TodoItem = ({ id, title, status }: Todo) => {
  const handleToggle = (id?: number | undefined) => {
    const obj: patch = {
      status: !status,
    };
    patchTodo(obj, id);
  };

  return (
    <div>
      <h3>
        {title} - {status ? "Completed" : "Pending"}
      </h3>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </div>
  );
};

export default TodoItem;
