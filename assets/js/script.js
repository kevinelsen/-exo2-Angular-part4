var app = angular.module('testApp', []);
app.controller('marqueCtrl', function($scope){
      $scope.voiture = [
		{"marque":"Renault", "couleur":"verte"},
		{"marque":"Citroen", "couleur":"grise"},
		{"marque":"Opel", "couleur":"or"},
		{"marque":"Ferrari", "couleur":"rouge"},
		{"marque":"Peugeot", "couleur":"bleu"},
		{"marque":"Nissan", "couleur":"verte"}
  ];
});
