angular.module('App').controller('addCtrl', addCtrl);

function addCtrl(d) {
    this.addGood = function() {
        newGood = {
            title: this.title,
            description: this.description,
            price: this.price,
            id: _.uniqueId()
        };
        d.addNew(newGood);
        alert('New good added!');
    };
}
