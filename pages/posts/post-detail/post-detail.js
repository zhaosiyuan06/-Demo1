var postsData = require("../../../data/posts-data.js");
Page({
  onLoad: function (options) {
    var postid=options.id;
    var postData = postsData.postList[postid];
    this.data.postData = postData;
  }
})