const mongoose = require('mongoose');
const uri = 'mongodb://localhost/article';

mongoose.connect(uri, function(err) {
    if (err) {
        console.log(err);
        console.log('connect failed');
        return;
    }

    console.log('conect success');
});

const ArticleSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    publishTime: Date
});

mongoose.model('Article', ArticleSchema);

const Article = mongoose.model('Article');

Article.find({}, function(err, docs) {
    if (err) {
        console.log('error');
        return;
    }

    if (docs) {
        docs.forEach(element => {
            element.remove();
        });
    }
});

