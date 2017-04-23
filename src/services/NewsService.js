import $ from 'jquery';

function getNewsFor(source) {
    var BASE_URL = 'https://newsapi.org/v1';
    var url = BASE_URL + `/articles?source=${source}&sortBy=latest&apiKey=332a312b3deb4defb5afc063eb760803`;
    $.getJSON(url, function(result){
        if (result.status !== 'ok') {
            return;
        }
        return result.articles;
    }).then(function(result){
        return result;
    });
}

export {getNewsFor};