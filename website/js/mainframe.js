$(document).ready(function(){

  cap_log_list = ['<li class="caplog"><span class="log_date">T22:29:01.888Z</span><span class="log_info">Situation normal, everything is working as expected.</span></li>',
  '<li class="caplog"><span class="log_date">T22:29:01.888Z</span><span class="log_info">Situation normal, everything is working as expected.</span></li>',
  '<li class="caplog log_warning"><span class="log_date">T22:29:01.888Z</span><span class="log_info">There is a fire on the cargo bay.</span></li>',
  '<li class="caplog log_plant"><span class="log_date">T22:29:01.888Z</span><span class="log_info">Plant 20 has hatched.</span></li>',
  ];

  newsfeed_list = ['<li class="newsfeed"><span class="log_info">Aqua: Aqua, Latin for water, is a NASA Earth Science satellite mission named for the large amount of information that the mission will be collecting about the Earth\'s water cycle.</span></li>',
'<li class="newsfeed"><span class="log_info">Shuttle 04 lands on Mars. They are now part of our Hall of Fame!</span></li>',
'<li class="newsfeed"><span class="log_info">Astro-E2/Suzaku: The Suzaku mission is a joint effort of JAXA and NASA designed to discover more about the x-ray universe.</span></li>',
'<li class="newsfeed log_warning"><span class="log_info">Shuttle 18 just exploded due to an oxygen leakage and a short circuit.</li>',
'<li class="newsfeed log_warning"><span class="log_info">Shuttle 23 evacuated from their ship.</span></li>',
'<li class="newsfeed"><span class="log_info">AIM: Aeronomy of Ice in the Mesosphere\'s two-year mission is to study Polar Mesospheric Clouds, the Earth\'s highest clouds, which form an icy membrane 50 miles above the surface at the edge of space</span></li>.']



  function append_caplog(ele){
    $('#caplog').append(ele);
  }

  for (var i = cap_log_list.length - 1; i >= 0; i--) {
    setTimeout(append_caplog, i * 10000, cap_log_list[i]);
  };


  function append_newsfeed(ele){
    $('#newsfeed').append(ele);
  }

  for (var i = newsfeed_list.length - 1; i >= 0; i--) {
    setTimeout(append_newsfeed, i * 10000, newsfeed_list[i]);
  };



});