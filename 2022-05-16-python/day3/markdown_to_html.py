# markdown_string = "# Important packages\n\n- requests\n- numpy\n- sqlalchemy"

import markdown

markdown_string = """
# Important packages

- requests
- numpy
- sqlalchemy
"""

html_string = markdown.markdown(markdown_string)

print(html_string)

# task: turn this markdown string into an HTML string

# result could look something like this:
# <h1>Important packages</h1>
# <ul>
#   <li>requests</li>
# </ul>
