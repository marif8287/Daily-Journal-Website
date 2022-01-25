//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const homeStartingContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure sit fugiat. Odit consectetur necessitatibus id quasi itaque accusamus magni deleniti doloremque cum eos, aperiam in quas commodi temporibus placeat sed dolore beatae ex nisi perspiciatis error maiores exercitationem. Officiis fugiat suscipit minus nisi provident quam qui error, modi voluptas tempora corporis a. Nemo harum accusantium atque, ad cumque quidem. Mollitia saepe nulla quo optio eligendi molestiae, voluptatem cupiditate expedita reprehenderit. Debitis hic ratione necessitatibus. Error quidem ab beatae nobis ipsam cumque nemo eligendi ex autem earum officiis quia laboriosam, assumenda quam fuga neque. Aliquid autem est possimus quae saepe necessitatibus similique veritatis quia. Illum dolor reiciendis maiores id, officia et, eveniet quos, eius pariatur ducimus sapiente similique veritatis suscipit tempore quia esse minima aspernatur. ";

const aboutContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tempora voluptatibus voluptatem itaque! Ducimus officia possimus esse adipisci ullam sit nihil reprehenderit sint ea temporibus error ipsa odio non ipsam, at officiis iure nisi dicta aliquam voluptates harum provident quas corporis! Molestias praesentium amet accusantium unde voluptate, eaque ea iusto quas, et sapiente asperiores, nostrum quaerat? Inventore, excepturi. Ad, magni qui animi harum, ducimus omnis enim explicabo porro dolorem assumenda, ex eligendi nobis itaque fuga perspiciatis! Laboriosam nostrum velit laborum, officia itaque ipsam! Est iusto minima dolor. Nulla distinctio sint, necessitatibus ad aut iusto deleniti facere placeat rerum blanditiis molestiae.";

const contactContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, similique sed atque ullam libero omnis? Necessitatibus, veritatis quos! Molestiae tempora totam qui? Dicta voluptatem deserunt quas perspiciatis saepe laboriosam optio officiis provident doloremque eaque cupiditate, amet esse totam ipsum aspernatur.";

const app = express();

let postArray = []  // making let i think we will have to load data from our database for that purpose we can't make it const 

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){

  res.render("home",{firstPost : homeStartingContent,postArray : postArray} );
  
})


app.get("/about", function(req,res){


  res.render("about",{about : aboutContent});

})

app.get("/contact",function(req,res){

  res.render("contact",{contact : contactContent});
})

app.get("/compose", function(req,res){

    res.render("compose");
})


app.post("/newpost", function(req,res){

  res.redirect("/compose")

})

app.post("/compose",function(req,res){

    const post = {
               postTitle : req.body.postTitle,
               postText : req.body.postText
          };

    postArray.push(post);

    res.redirect("/");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

