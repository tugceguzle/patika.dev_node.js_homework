// index, hakkimda ve iletisim sayfaları oluşturalım.
// Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
// port numarası olarak 3000'i kullanalım.

const Koa = require('koa');
const app = new Koa();
app.use(ctx => {
    if(ctx.path === "/"){
      ctx.type = "text/html"
      ctx.body = '<h1>INDEX SAYFASINA HOSGELDINIZ</h1>';
    }
    else if(ctx.path === "/hakkimda"){
      ctx.type = "text/html"
      ctx.body = '<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>';
    }
    else if(ctx.path === "/iletisim"){
      ctx.type = "text/html"
      ctx.body = '<h1>İLETİSİM SAYFASINA HOSGELDINIZ</h1>';
    }
    else {
      ctx.type = "text/html"
      ctx.body = '<h1>404 UHU SAYFA BULUNAMADI</h1>';
    }
  
  });

app.listen(3000);