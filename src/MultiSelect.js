import React, { useState } from 'react';
import Select from 'react-select';
import './MultiSelect.css';


function MultiSelect() {


    var Question = [
        { value: 1, label: "Budget"},
        { value: 2, label: "Food allergies" },
        { value: 3, label: "Number of people" },
        { value: 4, label: "Special restirtions" },
    ]

    var [DisplayValue, getValue] = useState();
    var addhandle = (e) => {

        getValue(Array.isArray(e) ? e.map(x => x.label) : [])

    }
    return (
        <div>
            <div class="container">
                <Select class="select" isMulti placeholder="search question" options={Question}  onChange={addhandle} components={{DropdownIndicator:()=>null,IndicatorSeparator:()=>null}}>
                    <Question class="Question"/>
                </Select>

            </div>
            
            <h3 class="options">{DisplayValue + " "}</h3>
           
        </div>
    )
}

export default MultiSelect;