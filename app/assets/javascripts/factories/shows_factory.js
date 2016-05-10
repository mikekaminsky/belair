belAir.factory('Shows', ['$http', function ($http) {
  var url = '/api/shows/';

  shows = {
    index: function (params) {
      return $http.get(url, {params: params});
    },
    show: function (id) {
      return $http.get(url + id);
    },
    update: function (id, show) {
      var updateURL = url + id;
      return $http.patch(updateURL, show);
    },
    create: function (show) {
      return $http.post(url, show);
    },
    delete: function (id, episode) {
      return $http.delete(url + id);
    }
  };

  return shows
}]);
