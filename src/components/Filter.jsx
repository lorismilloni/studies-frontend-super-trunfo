import React, { Component } from 'react';
import PropTypes from 'prop-types';

// esse componente possui os filtros para exibir os cards criados

class Filter extends Component {
  render() {
    const { onInputChange } = this.props;

    return (
      <div>
        <h4>Busque sua carta</h4>
        <input
          name="filterName"
          type="text"
          placeholder="Nome da carta"
          data-testid="name-filter"
          onChange={ onInputChange }
        />
        <select
          name="filterRare"
          type="select"
          data-testid="rare-filter"
          onChange={ onInputChange }
          defaultValue="todas"
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <input
          name="filterTrunfo"
          type="checkbox"
          data-testid="trunfo-filter"
          onChange={ onInputChange }
        />
      </div>
    );
  }
}

// componente Filter criado com base no PR do Leonardo Vogel

Filter.propTypes = {
  onInputChange: PropTypes.func,
}.isRequired;

export default Filter;
