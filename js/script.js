

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


  // const dramaList = getData('https://yts.am/api/v2/list_movies.json?genre=drama');
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
  function renderMovieList(list, $container) {
  	$container.children[0].remove();
	  list.forEach((movie) => {
			const HTMLString = videoItemTemplate(movie);
			const movieElement = createTemplate(HTMLString);
			$container.append(movieElement);
  	})
  }

  const	$actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer);

  const	$dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer);

  const	$animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer);


  // let dramaList;
  // getData('https://yts.am/api/v2/list_movies.json?genre=drama')
  // 	.then(function (data) {
  // 		console.log('dramaList', data);
  // 		dramaList = data;
  // 	})

  // console.log('dramaList', dramaList);
	

  const $home = document.getElementById('home');


})()