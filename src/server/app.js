const express = require("express");
const app = express();
const fs = require("fs");
const indexHtml = fs.readFileSync(`${__dirname}/index.html`, "utf8");

const { Header } = require("./components/cg-header");

function pageBuilder(page) {
  return {
    page,
    replace(holder, replacement) {
      this.page = this.page.replace(holder, replacement);
    },
    addHeader() {
      this.replace("<!-- ::HEADER:: -->", Header.component());
      return this;
    },
    // addCommentForm() {
    //   this.replace('<!-- ::COMMENT_FORM:: -->', CommentForm.component());
    //   return this;
    // },
    // addCommentList(state) {
    //   const comments = state.map(c => Comment.component(c, c.id)).join('');
    //   this.replace('<!-- ::COMMENT_LIST:: -->', CommentList.component(comments));
    //   return this;
    // },
    build() {
      return this.page;
    }
  };
}

app.get("/", (req, res) => {
  //res.set("Cache-Control", "s-maxage=1200, max-age=600");
  const page = pageBuilder(indexHtml)
    .addHeader()
    // .addCommentForm()
    // .addCommentList(state)
    .build();
  res.send(page);
});

app.get("/test", (req, res) => {
  //res.set("Cache-Control", "s-maxage=1200, max-age=600");
  res.send("test it's working! from src");
});

module.exports = app;
