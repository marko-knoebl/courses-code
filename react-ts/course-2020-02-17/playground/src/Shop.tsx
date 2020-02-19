import React, { useEffect } from "react";

export default () => {
  useEffect(
    () => {
      const requestBody = {
        query:
          'query '
          'mutation addTodo($title: String!) { add(title: $title) { id } }',
        variables: '{"title": "test"}',
      };
      
      const requestBodyStr = JSON.stringify(requestBody);
      
      fetch('https://todo-mongo-graphql-server.herokuapp.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: requestBodyStr,
      }).then(console.log);
      fetch("https://fakeql.com/graphql/562f1f11f09f43f279b55c602009f8bb")
    },
    []
  )
}