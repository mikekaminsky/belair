belAir.factory('Shows', ['$http', function ($http) {
  var url = '/api/shows/';

  shows = {
    index: function () {
      return $http.get(url);
    },
    show: function (id) {
      return $http.get(url + id);
    }
  };

  return shows
}]);
