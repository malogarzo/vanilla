

alert('👻');

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

  // const terrorList = getData('https://yts.am/api/v2/list_movies.json?genre=terror');
  const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action');
  const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation');

  console.log(actionList, animationList);

  let terrorList;
  getData('https://yts.am/api/v2/list_movies.json?genre=terror')
  	.then(function (data) {
  		console.log('terrorList', data);
  		terrorList = data;
  	})

  console.log('terrorList', terrorList);


})()