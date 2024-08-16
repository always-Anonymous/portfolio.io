function openModal(projectId) {
  document.getElementById(`${projectId}-modal`).style.display = 'block';
}

function closeModal(projectId) {
  document.getElementById(`${projectId}-modal`).style.display = 'none';
}

// Close the modal when the user clicks anywhere outside of the modal content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}
