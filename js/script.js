

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

  // console.log(videoItemTemplate());

  const	$actionContainer = document.querySelector('#action');

  actionList.data.movies.forEach((movie) => {
  	// debugger
  	const HTMLString = videoItemTemplate(movie);
  	const html = document.implementation.createHTMLDocument();
  	html.body.innerHTML = HTMLString;
  	// debugger
  	$actionContainer.append(html.body.children[0]);
  	console.log(HTMLString);

  })
  
  const	$animationContainer = document.getElementById('#animation');    
	const	$dramaContainer = document.getElementById('#drama');


  // let dramaList;
  // getData('https://yts.am/api/v2/list_movies.json?genre=drama')
  // 	.then(function (data) {
  // 		console.log('dramaList', data);
  // 		dramaList = data;
  // 	})

  // console.log('dramaList', dramaList);
	

  const $home = document.getElementById('home');


})()