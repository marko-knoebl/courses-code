import * as React from 'react';

interface IFilterTodosProps {
  filterText: string;
  onChange: (newFilterText: string) => void;
}

class FilterTodos extends React.Component<IFilterTodosProps, {}> {
  public render() {
    return (
      <div>
        <input value={this.props.filterText} onChange={this.handleChange} />
      </div>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  };
}

export default FilterTodos;
