## This is the Pokedex application that you will be working on during the next few days

Please modify the code to satisfy the following development specifications
Reference to https://pokedex.org/ for more inspiration

## DEVELOPMENT SPECS:

1. Integrate Redux 
install **redux**, **react-redux**\
create a rootReducer\
create a new store with rootReducer\
connect your React app to the Redux store with Provider component\
connect your React Component so it would be aware of Redux state updates (mapStateToProps)\
dispatch a test action and console.log a message from rootReducer upon that action to comfirm your configuration\
add an Action Creator, and move your test action there\

2. Integrate Thunk
install **redux-thunk** and import **thunk**\
Action Creator can now dispatch a function that performs asynchronous tasks

### Feature: User browses Homepage
**Given** PokeAPI https://pokeapi.co/api/v2/pokemon/ \
**Given** The API provides 1050 pokemons and takes offset, limit parameters for pagination\
**Then** Dispatch action *GET_POKEMON* together with pagination parameter\
**And** Make an API call to fetch the first 20 pokemons\
**And** Update Redux store state\
**And** Display the first 20 pokemons\
**And** Display pagination options according to the total number of pokemons available for viewing  

### Feature: User clicks on page 2 from Homepage
**Given** User is viewing the first 20 pokemons\
**Then** Dispatch action *GET_POKEMON*  with new pagination parameter to fetch the additional 20 pokemons\
**And** Make an API call to fetch the next 20 pokemons\
**And** Update Redux store state\
**And** Display those new 20 pokemons\
**And** Display pagination options according to the total number of pokemons available for viewing

### Feature: User searches for Metapod
**Then** Dispatch action *SEARCH_POKEMON*\
**And** Make an API call to fetch the pokemon details with matching names\
**And** Update Redux store state\
**And** Redirect user to /details/metapod with its information

### Feature: User views more details on Bellsprout
**Then** Dispatch action *SEARCH_POKEMON* together with payload of Bellsprout Unique ID\
**And** Make an API call to fetch the pokemon details with matching ID\
**And** Update Redux store state\
**And** Redirect user to /details/*bellsproutId* with its information

### Feature: User views more details on Bellsprout
**Then** Bellsprout abilities and other details are processed\
**And** Display Bellsprout HP, Attack, Defense, Speed, Special Attack, Special Defenses ability in bar chart\
**And** Display Bellsprout Weight (in kilogram), Catch rate, Gender Ratio (in percentage) in text format