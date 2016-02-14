angular.module('App').factory('d', function() {
    var service = {};

    var goods = [
        {
            title: 'Bread',
            description: 'Lorem ipsum dolor sit amet, ius omnesque qualisque principes ne, at usu insolens assueverit conclusionemque.',
            price: 10,
            id: 1
        },
        {
            title: 'Milk',
            description: 'Lorem ipsum dolor sit amet, ius omnesque qualisque principes ne, at usu insolens assueverit conclusionemque.',
            price: 15,
            id: 2
        },
        {
            title: 'Apple',
            description: 'Lorem ipsum dolor sit amet, ius omnesque qualisque principes ne, at usu insolens assueverit conclusionemque.',
            price: 6,
            id: 3
        }
    ]
    service.addNew = function(data){
        goods.push(data)
    }
    service.getGoods = function() {
        return goods;
    }
    return service;
});

