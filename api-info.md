// Press Releases ✔✔✔✔✔
method: GET
http://37.157.220.107:8880/api/press-releases?lng=ru
Query - page=:id

// Single Press Release ✔✔✔✔✔
http://37.157.220.107:8880/api/press-releases/2?lng=en

// Press release search ✔✔✔✔✔
Method: GET
http://37.157.220.107:8880/api/press-releases-filter
Query: search, date_from, date_to, magnitude

#####################################################################
#####################################################################
#####################################################################

// Home ✔✔✔✔✔
method: GET
http://37.157.220.107:8880/api/home?lng=ru
Sections: current_earthquake, news, press_releases

#####################################################################
#####################################################################
#####################################################################

// Regions
method get
http://37.157.220.107:8880/api/regions?lng=am

#####################################################################
#####################################################################
#####################################################################

// Earthquakes
method: GET
http://37.157.220.107:8880/api/current-earthquake?lng=en

// Single Earthquake
method: GET
http://37.157.220.107:8880/api/current-earthquake/2?lng=en

// Earthquakes search
Method: GET
http://37.157.220.107:8880/api/current-earthquakes-filter

#####################################################################
#####################################################################
#####################################################################

// Feedback
Method: POST
http://37.157.220.107:8880/api/feedback/create

// Contact-info
Method: GET
http://37.157.220.107:8880/api/contact-info
