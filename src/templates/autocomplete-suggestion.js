const autocompleteSuggestion = hit => `<div class="autocomplete-suggestion">
<div class="autocomplete-suggestion__details">
    <p class="autocomplete-suggestion__name">${
      hit._highlightResult.query.value
    }</p>
    </div>
</div>`;

export default autocompleteSuggestion;
