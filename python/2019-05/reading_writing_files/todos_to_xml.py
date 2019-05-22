import xml.etree.ElementTree as et


def todos_to_xml(todos):
    """Convert a list of todos to an ElementTree XML representation."""

    todos_element = et.Element("todos")

    # todo = {"id": ..., "title": ..., "completed":...}
    for todo in todos:
        todo_element = et.SubElement(todos_element, "todo")
        todo_element.text = todo["title"]
        # either "true" or "false":
        completed_value = str(todo["completed"]).lower()
        todo_element.set("completed", completed_value)
        todo_element.set("id", str(todo["id"]))

    tree = et.ElementTree(todos_element)

    return tree
