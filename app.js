const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine','ejs');
app.set('views','views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController  = require('./controllers/error');

require('./util/database');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);

/*mongoConnect((client)=> {
    console.log(client);
 app.listen(3000);
})
*/
app.listen(PORT, () => {
    console.log(`**Server is running on ${PORT}**`);
});
