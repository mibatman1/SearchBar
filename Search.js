const icon=document.querySelector('.icon');
const search=document.querySelector('.search');

icon.addEventListener('click',wide);

function wide()
{
    search.classList.toggle('active');
}