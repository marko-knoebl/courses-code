import React from 'react';

interface FetchTodosProps {
  onFetchTodosStart: () => void;
  isFetching: boolean;
}

const FetchTodos = (props: FetchTodosProps) => {
  return (
    <div>
      <button onClick={(clickEvent) => {props.onFetchTodosStart()}}>fetch todos from API</button>
      {props.isFetching && 'fetching...'}
    </div>
  );
};

export default FetchTodos;
