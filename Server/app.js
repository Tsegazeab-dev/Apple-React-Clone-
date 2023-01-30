const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const app = express();
app.use(express.urlencoded({extended:true}));
require('dotenv').config()

// This is to allow resource sharing for only our react application address 
const corsOption = {
    origin: [
        "http://localhost:3000",
        "http://localhost:1111"
    ]
}
app.use(cors(corsOption))

const connectDB = mysql.createConnection({
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    host:'localhost',
    database: process.env.DATABASE
});

connectDB.connect((err)=>{
    if(err) throw err;
    console.log('connected to myDB');
});


app.get('/install', (req, res)=>{
    const table1 = `CREATE TABLE if not exists Products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        product_name varchar(255) not null,
        PRIMARY KEY(product_id)
    )`
    connectDB.query(table1, (err)=>{
        if(err) throw err;
        console.log('Table created');
    })
    const table2 = `CREATE TABLE if not exists ProductDescription(
        description_id int auto_increment,
        product_id int,
        product_brief_description varchar(255) not null,
        product_description Text not null,
        product_img varchar(255) not null,
        product_link varchar(255) not null,
        PRIMARY KEY(description_id),
        FOREIGN KEY(product_id) REFERENCES Products(product_id)
    )`
    connectDB.query(table2, (err)=>{
        if(err) throw err;
        console.log('Table created');
    })
    const table3 = `CREATE TABLE if not exists ProductPrice(
        price_id int auto_increment,
        product_id int,
        starting_price varchar(255) not null,
        price_range varchar(255) not null,
        PRIMARY KEY(price_id),
        FOREIGN KEY(product_id) REFERENCES Products(product_id)
    )`
    connectDB.query(table3, (err)=>{
        if(err) throw err;
        console.log('Table created');
    })
    const table4 = `CREATE TABLE if not exists User(
        user_id int auto_increment,
        User_name varchar(255) not null,
        User_password varchar(255) not null,
        PRIMARY KEY(user_id)
    )`
    connectDB.query(table4, (err)=>{
        if(err) throw err;
        console.log('Table created');
    })
    const table5 = `CREATE TABLE if not exists Orders(
        order_id int auto_increment,
        product_id int,
        user_id int,
        PRIMARY KEY(order_id),
        FOREIGN KEY(product_id) REFERENCES Products(product_id),
        FOREIGN KEY(user_id) REFERENCES User(user_id)
    )`
    connectDB.query(table5, (err)=>{
        if(err) throw err;
        console.log('Table created');
    })
    res.send('Table created')
})


app.post('/add-iphone', (req, res)=>{
    // object distructure method
const {url, name, img, link, price, range, user, pass, brief, description} = req.body
let insertProducts = `INSERT INTO Products(product_url, product_name) VALUES ("${url}", "${name}")`
connectDB.query(insertProducts, (err, productResult)=>{
    if(err) throw err;
    console.log("Products inserted");
})

let insertUser = `INSERT INTO user(User_name, User_password) VALUES ("${user}", "${pass}")`
connectDB.query(insertUser, (err, userResult )=>{
    if(err) throw err;
    console.log("Users inserted");
})

connectDB.query(`SELECT 
product_id, user_id FROM Products JOIN user WHERE product_name = "${name}" AND User_name = "${user}"`,
(err, rows)=>{
    if(err) throw err;
    // console.log(rows);

    let insertproductDes = `INSERT INTO productDescription(product_id, product_brief_description, product_description, product_img, product_link) VALUES ("${rows[0].product_id}","${brief}", "${description}", "${img}", "${link}")`
   

    let insertproductPrice = `INSERT INTO productprice(product_id, starting_price, price_range) VALUES ("${rows[0].product_id}","${price}", "${range}")`

    let insertproductOrders = `INSERT INTO orders(product_id, user_id) VALUES ("${rows[0].product_id}","${rows[0].user_id}")`
    

    connectDB.query(insertproductDes, (err)=>{
        if(err) throw err;
        console.log("product description inserted");
    })
    connectDB.query(insertproductPrice, (err)=>{
        if(err) throw err;
        console.log("product price inserted");
    })
    connectDB.query(insertproductOrders, (err)=>{
        if(err) throw err;
        console.log("product order inserted");
    })	
})
res.end('Inserted')
})

// Another insert method
app.post('/addiphone', (req, res)=>{
    // object distructure method
const {url, name, img, link, price, range, user, pass, brief, description} = req.body
let insertProducts = `INSERT INTO Products(product_url, product_name) VALUES ("${url}", "${name}")`
connectDB.query(insertProducts, (err, productResult)=>{
    if(err) throw err;
    console.log("Products inserted");

let insertUser = `INSERT INTO user(User_name, User_password) VALUES ("${user}", "${pass}")`
connectDB.query(insertUser, (err, userResult )=>{
    if(err) throw err;
    console.log("Users inserted");

    let insertproductDes = `INSERT INTO productDescription(product_id, product_brief_description, product_description, product_img, product_link) VALUES ("${productResult.insertId}","${brief}", "${description}", "${img}", "${link}")`

    let insertproductPrice = `INSERT INTO productprice(product_id, starting_price, price_range) VALUES ("${productResult.insertId}","${price}", "${range}")`

    let insertproductOrders = `INSERT INTO orders(product_id, user_id) VALUES ("${productResult.insertId}","${userResult.insertId}")`

    connectDB.query(insertproductDes, (err)=>{
        if(err) throw err;
        console.log("product description inserted");
    })
    connectDB.query(insertproductPrice, (err)=>{
        if(err) throw err;
        console.log("product price inserted");
    })
    connectDB.query(insertproductOrders, (err)=>{
        if(err) throw err;
        console.log("product order inserted");
    })	
})
})
res.end('Inserted')
})


app.get("/iphones", (req, res) => {
    connectDB.query(
      "SELECT * FROM Products p JOIN ProductDescription pd JOIN ProductPrice pp ON p.product_id = pd.product_id AND p.product_id = pp.product_id",
      (err, rows, fields) => {
        let iphones = { products: [] };
        iphones.products = rows;
        var stringIphones = JSON.stringify(iphones);
        if (!err) res.end(stringIphones);
        else console.log(err);
      }
    );
  });
  

app.listen(1224, ()=>{
    console.log(`server running on http://localhost:1224`);
})