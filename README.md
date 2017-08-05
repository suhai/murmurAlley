# murmurAlley

The Application is deployed here: [murmurAlley](https://murmuralley.herokuapp.com/)

murmurAlley is a simple clone of the NYT except that murmurAlley is a fake city with fake news. The application was made as a practice for page organization and formatting. It is basically a Ruby / Rails project with a bunch of partial pages that are reused and within bigger pages as necessary. By splitting the pages into partials I was able to write fewer code, making use of rendering the partials inside bigger pages.


## Features

### User Authentication
  There is currently no feature beyond just reading static content. I did however threw in a call to weather API and a live clock on the header section. Those two are the only dynamic content but I plan to build the site up further with features for a user to have a paid subscription.


### 

```rb
<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Subscribe Today</button>

<div id="id01" class="modal">
  <form class="modal-content animate" action="/action_page.php">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>

    <div class="container">
      <div class="welcome">
        <h3>Welcome to Murmur Alley!</h3>
      </div>
      <label><b>Email</b></label>
      <input type="text" placeholder="Enter Email" email="email" required>

      <label><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>

      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <button class="btn-signup" type="submit">Sign Up</button>
      <input type="checkbox" checked="checked"> Remember me
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>

```


# assets/javascript/components/sidebar

```js
$(function () {
	return $('#sections-sidebar').mouseleave(toggleSideBarIfExpanded);
});

$(window).on('load', function() {
	setInterval( function(){
		$('#today').text(new Date);
	}, 2000);	
});


var getWeather = function() {
	var output = new XMLHttpRequest();
	output.open("GET", "https://api.wunderground.com/api/c8b187186bb5b42c/conditions/q/CA/San_Francisco.json", false);
	output.send(null);;
	var x = JSON.parse(output.response)
	var weatherTime = x.current_observation.observation_time;
	var weatherTemp = x.current_observation.feelslike_string;
	var weather = x.current_observation.weather;
	
	document.getElementById("weather1").innerHTML = weatherTemp;
	document.getElementById("weather2").innerHTML = weather;
}

 $(window).on('load', function() {
	getWeather();
	setInterval( function() {
	getWeather();	
	}, 600000)
 });

```


## Homepage

![Alt text](https://res.cloudinary.com/swy/image/upload/v1501895992/murmur1_i6zdm2.png "homepage")


## Homepage Signup

![Alt text](https://res.cloudinary.com/swy/image/upload/v1501895991/murmur2_kwvrrt.png "homepage signup")



### Plans For The Future

* I plan to migrate the entire app to a React/Redux framework in teh future, as well as add features to allow online payments.



