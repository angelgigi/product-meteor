
//获取数据 并做预处理
Template.productList.helpers({
    products: function () {
        var list = Products.find().fetch();//从数据集合中获取数据
        list.forEach(function (e) {
             if(e.status==1)
             {
                 e.status="Odered";
                 e.color="#5cb85c";
             }else if(e.status==2)
             {
                 e.status="Cooked";
                 e.color="#f0ad4e";
             }else if(e.status==3){
                 e.status="Done";
                 e.color="#337ab7";
             }else {
                 e.status="Cancel";
                 e.color="#c9302c";
             }
        });
        return list;
    }
});


//绑定事件
Template.productItem.events({
    'click .btn-success': function () {
        //更新数据
        Products.update(this._id, {
            $set: {status: 1}
        });

        //更改样式
        $("."+this.id).css("background-color","#5cb85c");

    },
    'click .btn-warning': function () {
        Products.update(this._id, {
            $set: {status: 2}
        });
        $("."+this.id).css("background-color","#f0ad4e");
    },
    'click .btn-primary': function () {
        Products.update(this._id, {
            $set: {status: 3}
        });
        $("."+this.id).css("background-color","#337ab7");
    },
    'click .btn-danger': function () {
        Products.update(this._id, {
            $set: {status: 4}
        });
        $("."+this.id).css("background-color","#c9302c");
    }
});

