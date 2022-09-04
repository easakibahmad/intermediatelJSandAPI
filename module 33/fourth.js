const searchSomething = () =>
{
    const inValue = document.getElementById( 'search-field' )
    const inValueInner = inValue.value
    loadMeals( inValueInner )
    inValue.value = ''
}
const loadMeals = ( search ) =>
{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${ search }`
    fetch( url )
        .then( res => res.json() )
        .then( data => displayMeals( data.meals ) )
}
const displayMeals = data =>
{
    // console.log( data )
    const parentDiv = document.getElementById( 'main-div' )
    parentDiv.innerHTML = ''
    data.forEach( da =>
    {
        // console.log( da )
        const newElement = document.createElement( 'div' )
        newElement.classList.add( 'col' )
        newElement.innerHTML = `<div onclick='displayDetail(${ da.idMeal })' class="card">
        <img src="${ da.strMealThumb }" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${ da.strMeal }</h5>
            <p class="card-text">${ da.strInstructions.slice( 0, 100 ) }</p>
        </div>
    </div>`
        parentDiv.appendChild( newElement )
    } );
}
const displayDetail = data =>
{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ data }`
    fetch( url )
        .then( res => res.json() )
        .then( data => loadDetail( data.meals[ 0 ] ) )
    // console.log( url )
}

const loadDetail = ( data ) =>
{
    const parentDiv = document.getElementById( 'main-top-div' )
    parentDiv.innerHTML = ''
    const newElement = document.createElement( 'div' )
    newElement.classList.add( 'col' )
    newElement.innerHTML = `<div class="card">
    <img src="${ data.strMealThumb }" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">${ data.strMeal }</h5>
        <p class="card-text">${ data.strInstructions.slice( 0, 100 ) }</p>
    </div>
</div>`
    parentDiv.appendChild( newElement )
}
// loadMeals( '' )
