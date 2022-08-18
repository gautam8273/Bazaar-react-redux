import React, { useState } from 'react';
// import Autosuggest from 'react-autosuggest/dist/Autosuggest';
import Autosuggest from 'react-autosuggest';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../store/actions/action';
import { Link, useNavigate } from 'react-router-dom';


// const allItems = [{
//     name: 'Sandeep'
// }]
const AutosuggestComp = () => {
    const navigate = useNavigate();

    // const [SearchInput, SetSearchInput] = useState('')


    const dispatch = useDispatch();

    let allItems = useSelector(state => state.reducerSearch?.searchItems);
    // console.log("allItems==>", allItems)


    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selected, setSelected] = useState("");

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            navigate(`/product-listing-pages/${e.target.value}`)
        }
    }

    const getSuggestionValue = suggestion => suggestion.Title;

    const getSuggestions = value => {
        // const inputValue = value.trim().toLowerCase();
        // const inputLength = inputValue.length;

        // return inputLength === 0
        //     ? []
        //     : allItems.filter(
        //         item => item.Title.toLowerCase().slice(0, inputLength) === inputValue
        //     );

        return allItems;
    };



    const renderSuggestion = suggestion => <Link to={`/product-listing-pages/${suggestion.Title}?category=${suggestion.categoryData.slug}&searchValue=${suggestion.Title}`}
    > <div>{suggestion.Title}</div> </Link>;

    const onChange = (event, { newValue }) => {
        setValue(newValue);
        // SetSearchInput(event.target.value?.toLowerCase());
        searchProducts(dispatch, { searchValue: newValue })

    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => setSuggestions([]);

    const onSuggestionSelected = (event, { suggestion }) => {
        setSelected(suggestion.Title);
    };

    // const shouldRenderSuggestions = (value) => {
    //     return value && value.length > 1;
    // }


    const inputProps = {
        placeholder: "Search",
        value,
        onChange,
        onKeyPress
    };




    return (
        <>
            <Autosuggest
                // suggestions={suggestions}
                suggestions={allItems ? allItems : []}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                onSuggestionSelected={onSuggestionSelected}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                // shouldRenderSuggestions={shouldRenderSuggestions}
                inputProps={inputProps}

            />

        </>
    )
}

export default AutosuggestComp;
