
import React, { useState } from 'react';
import Select from 'react-select';
import './MultiSelect.css';
import makeAnimated from 'react-select/animated';


function MultiSelect() {


    const Question = [
        { value: 1, label: "Budget" },
        { value: 2, label: "Food allergies" },
        { value: 3, label: "Number of people" },
        { value: 4, label: "Special restirtions" },
    ]
    const [DisplayValue = "", getValue] = useState();
    const handleAdd = (e) => {

        getValue(Array.isArray(e) ? e.map(x => x.label) : [])

    }
    return (
        <div>
            <div class="container">
                <h3 style={{ color: "violet" }}>Added(disabled)</h3>

                <Select
                    isMulti
                    placeholder="search question"
                    closeMenuOnSelect={false}
                    options={Question}
                    onChange={handleAdd}
                    components={{ DropdownIndicator: () => null }}
                >
                </Select>

            </div>

            <h3 class="options">{DisplayValue + ""}</h3>

        </div>
    )
}

export default MultiSelect;