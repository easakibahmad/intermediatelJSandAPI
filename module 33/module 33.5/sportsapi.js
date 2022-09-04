const dataLoad = () =>
{
    const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`
    fetch( url )
        .then( res => res.json() )
        .then( data => dataDetail( data.sports ) )
}
const dataDetail = data =>
{
    data.forEach( val =>
    {
        console.log( val )
        const parent = document.getElementById( 'parent' )
        const child = document.createElement( 'div' )
        child.classList.add( 'child' )
        child.innerHTML = `<h4>${ val.strSport }</h4>
        <img src='${ val.strSportThumb ? val.strSportThumb : 'picture not found' }'>`
        parent.appendChild( child )
    } );
}
dataLoad()