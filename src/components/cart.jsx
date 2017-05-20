import React, { Component } from 'react';

class Cart extends Component {
  render() {

<div className="alert alert-warning" role="alert" ng-show="ngCart.getTotalItems() === 0">
    Your cart is empty
</div>

<div className="table-responsive col-lg-12" ng-show="ngCart.getTotalItems() > 0">

    <table className="table table-striped ngCart cart">

        <thead>
        <tr>
            <th></th>
            <th></th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Total</th>
        </tr>
        </thead>
        <tfoot>
        <tr ng-show="ngCart.getTax()">
            <td></td>
            <td></td>
            <td></td>
            <td>Tax ({{ ngCart.getTaxRate() }}%):</td>
            <td>{{ ngCart.getTax() | currency }}</td>
        </tr>
        <tr ng-show="ngCart.getShipping()">
            <td></td>
            <td></td>
            <td></td>
            <td>Shipping:</td>
            <td>{{ ngCart.getShipping() | currency }}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td>{{ ngCart.totalCost() | currency }}</td>
        </tr>
        </tfoot>
        <tbody>
        <tr ng-repeat="item in ngCart.getCart().items track by $index">
            <td><span ng-click="ngCart.removeItemById(item.getId())" className="glyphicon glyphicon-remove"></span></td>

            <td>{{ item.getName() }}</td>
            <td><span className="glyphicon glyphicon-minus" ng-className="{'disabled':item.getQuantity()==1}"
                      ng-click="item.setQuantity(-1, true)"></span>&nbsp;&nbsp;
                {{ item.getQuantity() | number }}&nbsp;&nbsp;
                <span className="glyphicon glyphicon-plus" ng-click="item.setQuantity(1, true)"></span></td>
            <td>{{ item.getPrice() | currency}}</td>
            <td>{{ item.getTotal() | currency }}</td>
        </tr>
        </tbody>
    </table>
</div>
<style>
    .ngCart.cart span[ng-click] {
        cursor: pointer;
    }
    .ngCart.cart .glyphicon.disabled {
        color:#aaa;
    }
</style>
  }
}

export default Cart;
