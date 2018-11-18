function loadSlider(elementSelector) {
    axios.get('./_components/slider/slider.html')
        .then(function (response) {
            document.querySelector(elementSelector).innerHTML = response.data;
            var slider = tns({
                container: '.my-slider',
                items: 3,
                slideBy: 1,
                autoplay: true
            });
        })
}

