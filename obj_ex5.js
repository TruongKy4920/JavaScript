const blog_post={
    title:'a',
    body:'b',
    author:'c',
    views: 10,
    comments: [{author:'x', body:'y'},
        {author:'z', body:'q'}] ,
    isLive: true
};

console.log(blog_post);



function blogPost(title,body,author){
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=0;
    this.comments=[];
    this.isLive=true
}

const blog1=new blogPost('a','b','c');
console.log(blog1);