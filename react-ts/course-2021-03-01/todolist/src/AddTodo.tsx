import { useState } from "react";
import { TextField, Button } from "@material-ui/core";

type Props = {
  onAddTodo: (newTitle: string) => void;
};

function AddTodo(props: Props) {
  const [newTitle, setNewTitle] = useState("");
  const isValid = newTitle.length >= 3;
  const [titleTouched, setTitleTouched] = useState(false);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onAddTodo(newTitle);
        setNewTitle("");
      }}
    >
      <TextField
        value={newTitle}
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}
        onBlur={() => {
          setTitleTouched(true);
        }}
      />
      <Button
        disabled={!isValid}
        type="submit"
        variant="contained"
        color="primary"
      >
        add
      </Button>
      {!isValid && titleTouched ? <div>invalid title</div> : null}
    </form>
  );
}

export default AddTodo;
