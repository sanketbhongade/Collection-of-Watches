

const ProductData=[
    {
        id : 1, 
        name : "White Golden Strip",
        cover : "https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop03_8db7d667-9b21-4a7a-b771-7ee390df2e0a_600x.jpg?v=1653894711",
        color : "black", 
        price : "999.00" , 
        description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
    },


    {
        id : 2, 
        name : "Black Dial Watch", 
        cover : "https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop04_093538b9-095a-42bf-87db-1b46397ad9c4_600x.jpg?v=1653894874" , 
        color : "red", 
        price : "599.00" , 
        description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
    },


    {
        id : 3, 
        name : "Classic Brown Strip", 
        cover : "https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop05_9d0fa58d-e3cb-4306-b1f6-2c3c229fc4ff_600x.jpg?v=1653894910 ", 
        color : "green", 
        price : "799.00" , 
        description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
    },


    // {
    //     id: 4 , 
    //     name: "Black Dial Classic" , 
    //     cover: "https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop06_626a7bf7-3cce-4f05-b0c8-3cf604bc4e35_600x.jpg?v=1653894965" , 
    //     color: "green" , 
    //     price : "999.00" , 
    //     description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
    // },


    // {
    //     id: 5 , 
    //     name: "White Dial Watch" , 
    //     cover: "https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop01_0efdce1e-9bd4-4645-9bca-1621d76a2106_600x.jpg?v=1653894641"  , 
    //     color: "green" , 
    //     price : "899.00" , 
    //     description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
    // },


    // {
    //     id: 6 , 
    //     name: "White Dial Watch" , 
    //     cover: "https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop02_c8e0c0f0-de7f-401b-81eb-e93bd8d7b84d_600x.jpg?v=1653894676" , 
    //     color: "green" , 
    //     price : "799.00" , 
    //     description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
    // },

    // {
    //     id:7,
    //     name:"Black Wrist Watch",
    //     cover:'https://s.alicdn.com/@sc04/kf/H2fa52367fe184bf5a4abccc85018b68bC.jpg_720x720q50.jpg',
    //     color:"black",
    //     price:"999.00",
    //     description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
    // },

    // {
    //     id:8,
    //     name:"Blue Dail Watch",
    //     cover:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/7461713/2.jpg?9603",
    //     color:"black",
    //     price:"899.00",
    //     description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
    // },

    // {
    //     id:9,
    //     name:"white Smart Watch",
    //     cover:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fsmart-watch-on-white&psig=AOvVaw0LbHf8t46eKQFahxiN5es0&ust=1722749947838000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiKzIqN2IcDFQAAAAAdAAAAABAp",
    //     color:"black",
    //     price:"999.00",
    //     description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
    // },

    // {
    //     id:10,
    //     name:"white Dail Watch",
    //     cover:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fwrist-watch-on-white&psig=AOvVaw0LbHf8t46eKQFahxiN5es0&ust=1722749947838000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiKzIqN2IcDFQAAAAAdAAAAABA5",
    //     color:"black",
    //     price:"799.00",
    //     description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
    // },

    // {
    //     id:11,
    //     name:"Marble Dail Watch",
    //     cover:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.made-in-china.com%2Fproduct%2FNew-Fashion-Unisex-Watches-Men-s-Marble-Dial-Waterproof-Wrist-Watches-706895711.html&psig=AOvVaw0LbHf8t46eKQFahxiN5es0&ust=1722749947838000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiKzIqN2IcDFQAAAAAdAAAAABBJ",
    //     color:"marble black",
    //     price:"999.00",
    //     description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
    // },

    // {
    //     id:12,
    //     name:"Black Dail Watch",
    //     cover:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fjustintime.in%2Fproducts%2Ffossil-black-digital-men-smart-watch-ftw4060&psig=AOvVaw3siAOUX2QJR_XjOKKvuFyh&ust=1722750856999000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOinqbqQ2IcDFQAAAAAdAAAAABAE",
    //     color:"silver",
    //     price:"899.00",
    //     description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
    // }



]

export default ProductData;