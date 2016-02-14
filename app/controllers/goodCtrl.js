angular.module('App').controller('goodCtrl', goodCtrl);

function goodCtrl(d, cardFactory, $rootScope) {
    console.log('good');
    this.goods = d.getGoods();

    this.toCard = function(good) {
        cardFactory.toCard(good);
        $rootScope.$emit('setSize');
    };
}
