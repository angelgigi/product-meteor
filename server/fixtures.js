//初始化mock数据
if (Products.find().count() === 0) {
    Products.insert({
        id: 1,
        product: 'tincidunt nulla mollis molestie',
        time:'9:01 PM',
        status:2,
        table:67
    });

    Products.insert({
        id: 2,
        product: 'mollis molestie',
        time:'12:22 AM',
        status:1,
        table:95
    });

    Products.insert({
        id: 3,
        product: 'tincidunt   molestie',
        time:'3:26 AM',
        status:3,
        table:83
    });
    Products.insert({
        id: 4,
        product: 'tincidunt   molestie',
        time:'3:26 AM',
        status:3,
        table:67
    });
    Products.insert({
        id: 5,
        product: 'tincidunt   molestie',
        time:'3:26 AM',
        status:2,
        table:78
    });
    Products.insert({
        id: 6,
        product: 'tincidunt   molestie',
        time:'3:26 AM',
        status:4,
        table:45
    });
    Products.insert({
        id: 7,
        product: 'tincidunt   molestie',
        time:'6:50 pM',
        status:3,
        table:34
    });
    Products.insert({
        id: 8,
        product: 'tincidunt   molestie',
        time:'4:45 pM',
        status:1,
        table:56
    });
    Products.insert({
        id: 9,
        product: 'vulputate elementum nullam',
        time:'3:19 AM',
        status:1,
        table:83
    });
    Products.insert({
        id: 10,
        product: 'erat id mauris vulputate elementum nullam',
        time:'4:26 AM',
        status:2,
        table:78
    });
}