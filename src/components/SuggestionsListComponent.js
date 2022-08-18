import React, { useState, useEffect } from 'react'


const SuggestionsListComponent = () => {

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [input, setInput] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);



    const onClick = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };


    return filteredSuggestions.length ? (
        <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
                let className;
                // Flag the active suggestion with a class
                if (index === activeSuggestionIndex) {
                    className = "suggestion-active";
                }
                return (
                    <li className={className} key={suggestion} onClick={onClick}>
                        {suggestion}
                    </li>
                );
            })}
        </ul>
    ) : (
        <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
        </div>
    );
};

export default SuggestionsListComponent;