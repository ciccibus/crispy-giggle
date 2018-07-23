const express = require("express");
const app = express();
const fs = require("fs");

const indexHtml = fs.readFileSync(`${__dirname}/index.html`, "utf8");

const { Header } = require("./components/cg-header");
const { Login } = require("./components/cg-login");

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
    addLogin() {
      const html = [3, 9, 10].map(item => {
        return Login.component(item);
      });
      this.replace("<!-- ::LOGIN:: -->", html.join(""));
      return this;
    },
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
    .addLogin()
    // .addCommentList(state)
    .build();
  res.send(page);
});

module.exports = app;
