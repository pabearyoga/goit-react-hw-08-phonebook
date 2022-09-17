import React from "react";

const Filter = ({value, onChange}) => (
            <label>Find contacts by name
                <input
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                    required
                />
        </label>
)

export default Filter