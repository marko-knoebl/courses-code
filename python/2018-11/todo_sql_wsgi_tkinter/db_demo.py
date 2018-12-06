import db_interface

print(db_interface.get_all_todos())

# db_interface.add_todo("gardening")
# db_interface.add_todo("taxes")

db_interface.toggle_todo(10)

print(db_interface.get_all_todos())
