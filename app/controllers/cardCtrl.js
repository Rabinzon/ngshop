angular.module('App').controller('cardCtrl', cardCtrl);

function cardCtrl(cardFactory) {
    this.setSize = function() {
        return cardFactory.getSize();
    };
    this.data = cardFactory.getData();
}
