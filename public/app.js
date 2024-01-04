
document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }

  if (event.target.dataset.type === 'edit') {
    const id = event.target.dataset.id
    const note = event.target.dataset.value
    const editedNote = prompt('Введите новое значение',note)
    if (editedNote) {

      editNote(id, editedNote).then(() => {
        event.target.closest('li').children[0].textContent = editedNote
      })
    }
  }

})

async function remove(id) {
  await fetch(`/${id}`, {
    method: 'DELETE'
  })
}


async function editNote(id, title) {
  const body = JSON.stringify({id: id, title})

  await fetch(`/${id}`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT',
    body
  })
}