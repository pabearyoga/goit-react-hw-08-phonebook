import React from "react";
import PropTypes from 'prop-types';
import css from "./Filter.module.css"

const Filter = ({value, onChange}) => (
            <label className={css.filterLabel}>Find contacts by name:
                <input
                    type="text"
                    className={css.inputFilter}
                    name="filter"
                    value={value}
                    onChange={onChange}
                    required
                />
        </label>
)

export default Filter

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};