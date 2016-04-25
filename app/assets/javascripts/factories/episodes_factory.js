belAir.factory('Episodes', ['$http', function ($http) {
  var url = '/api/episodes/';

  episodes = {
    show: function (id) {
      return $http.get(url + id);
    },
    update: function (id, episode) {
      var updateURL = url + id;
      return $http.patch(updateURL, episode);
    },
    create: function (episode) {
      return $http.post(url, episode);
    },
    delete: function (id, episode) {
      return $http.delete(url + id);
    }
  };

  return episodes
}]);
