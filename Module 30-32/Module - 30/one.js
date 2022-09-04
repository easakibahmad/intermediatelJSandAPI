document.getElementById( 'div-top-btn' ).addEventListener( 'click', function ()
{
    const di = document.getElementsByClassName( 'div-top' )
    for ( const all of di )
    {
        all.style.backgroundColor = 'skyblue'
        all.style.border = '2px solid red'
        all.style.marginTop = '10px'
    }
} )

document.getElementById( 'add' ).addEventListener( 'click', function ()
{
    const parent = document.getElementById( 'top-sec' )
    const addNew = document.createElement( 'div' )
    addNew.classList.add( 'div-top' )
    addNew.innerHTML = `<h3>hello</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, culpa.</p>
    `
    parent.appendChild( addNew )
} )

document.getElementById( 'center-third' )?.addEventListener( 'click', function ()
{
    const fr = document.getElementById( 'third-header' )
    fr.style.textAlign = 'center'
} )