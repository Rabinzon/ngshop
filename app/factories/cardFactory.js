angular.module('App').factory('cardFactory', function() {
    var service = {};

    var inCard = [];
    var cardData = {
        size: 0,
        total: 0
    };

    service.toCard = function(good) {
        if (_.find(inCard, {id: good.id})) {
            _.find(inCard, {id: good.id}).count++
            _.find(inCard, {id: good.id}).price + good.price;
        }else {
            good.count = 1;
            return inCard.push(good);
        }
        console.log(inCard);
    };
    service.getSize = function() {
        cardData.size = _.sumBy(inCard, 'count');
        cardData.total = _.sumBy(inCard,'price');
        return cardData;
    };
    service.getData = function() {
        return inCard;
    };
    return service;
});

