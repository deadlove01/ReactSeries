import uuid from 'react-uuid'

export const todosState = [
    {
      id: uuid(),
      title: "this is title 1",
      checked: true,
    },
    {
      id: uuid(),
      title: "this is title 2",
      checked: false,
    },
    {
      id: uuid(),
      title: "this is title 3",
      checked: false,
    },
  ]