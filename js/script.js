// alert('👻');

// fetch('https://randomuser.me/api/')
// 	.then(function (response) {
// 		console.log(response)
// 		return response.json()
// 	})
// 	.then(function (user) {
// 		console.log('user', user.results[0].name.first)
// 	})
// 	.catch(function() {
// 		console.log('algo falló')
// 	});


(async function load() {


	async function getData(url) {
  	const response = await fetch(url);
  	const data = await response.json();
  	return data;
  }
  const $form = document.getElementById('form');
  const $home = document.getElementById('home');

  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    $home.classList.add('search-active')
  })

  const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action');
  const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation');
  const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
  console.log(actionList, animationList, dramaList);

  function videoItemTemplate(movie) {
  	return (
			`<div class="primaryPlaylistItem">
    		<div class="primaryPlaylistItem-image">
      		<img src="${movie.medium_cover_image}">
    		</div>
    		<h4 class="primaryPlaylistItem-title">
    			${movie.title}
  			</h4>
			</div>`		
		)
  }
  function createTemplate(HTMLString) {
  	const html = document.implementation.createHTMLDocument();
  	html.body.innerHTML = HTMLString;
  	return html.body.children[0];
  }
  function addEventClick($element) {
    $element.addEventListener('click', () => {
      showModal()
    })
  }
  function renderMovieList(list, $container) {
  	$container.children[0].remove();
	  list.forEach((movie) => {
			const HTMLString = videoItemTemplate(movie);
			const movieElement = createTemplate(HTMLString);
			$container.append(movieElement);
      addEventClick(movieElement);
  	})
  }

  const	$actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer);

  const	$dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer);

  const	$animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer);

  //modal selectors
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');
	
  function showModal() {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal);
  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

})()