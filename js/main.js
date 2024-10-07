const buttons = document.querySelectorAll('.form-button'),
      fieldsets = document.querySelectorAll('.fieldset');

switchFieldsets (buttons);
function switchFieldsets (array) {
    array.forEach(sortElements)
}

function sortElements (element) {
    element.addEventListener('click', searchRolledClasses)
}

function searchRolledClasses (event) {
    const target = event.target,
        index = +target.id,
        lastIndex = fieldsets.length - 1,
        isNotClicked = !target.classList.contains('rolled'),
        isNotLastElement = fieldsets[index] !== fieldsets[lastIndex];
    if (isNotClicked) {
      fieldsets.forEach (addRolledClasses);
    }
    if (isNotLastElement)
    {
      removeRolledClass (fieldsets, index + 1);
    }
    else
    {
      removeRolledClass (fieldsets, index - 1);
    }
}

function addRolledClasses (element) {
  element.classList.add('rolled');
}

function removeRolledClass (array, index) {
  array[index].classList.remove('rolled')
}





















