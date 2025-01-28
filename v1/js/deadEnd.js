//const deadEnd = document.querySelector('#deadEndContainer')
//const deadEndCloseButton = document.querySelector('#deadEndCloseButton')

const deadEndDHTML = `
<div id="deadEndContent">
    <a id="deadEndCloseButton"></a>
    <div class="deadEndInner">
        <h3>Sorry, this feature is under construction.</h3>
        <p>We only defined tasks that are fully achievable. This means that you can continue looking elsewhere.</p>
       
    </div>
</div>

`


/*deadEndCloseButton.addEventListener('click', function() {
    hideDeadEnd();
})

const showDeadEnd = () => {
    deadEnd.style.display = 'flex'
}*/

export const addDeadEnd = (element) => {
    let child = document.createElement('div')
    child.id = 'deadEndContainer'
    child.innerHTML = deadEndDHTML
    element.appendChild(child)

    const deadEnd = document.querySelector('#deadEndContainer')
    const deadEndCloseButton = document.querySelector('#deadEndCloseButton')

    deadEnd.style.display = 'flex'

    const hideDeadEnd = () => {
        deadEnd.style.display = 'none'
    }

    deadEndCloseButton.addEventListener('click', function() {
        hideDeadEnd();
        element.removeChild(element.lastChild)
    })
}
//
// const hideDeadEnd = () => {
//     deadEnd.style.display = 'none'
// }