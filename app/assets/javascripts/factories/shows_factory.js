belAir.factory('Shows', ['$http', function ($http) {
  var url = '/api/shows/';

  shows = {
    index: function () {
      return $http.get(url);
    },
    show: function (id) {
      return $http.get(url + id);
    },
    update: function (id, show) {
      var updateURL = url + id;
      return $http.patch(updateURL, show);
    }
  };

  return shows
}]);
