(function () {
    const elementToObserve = document.querySelector('.answerChoices + div');

    if (!elementToObserve) {
        return;
    }

    let pastId;

    const observer = new MutationObserver(function () {
        const currentId = document.querySelector('.rsbtnParent + div').id;
        if (pastId !== currentId) {
            addLinks();
            pastId = currentId;
        }
    });

    observer.observe(elementToObserve, {childList: true});

    function addLinks() {
        document.querySelectorAll('.rsbtnParent + div > p').forEach(el => {
            el.innerHTML = `<a href="https://www.google.com/search?q=${encodeURIComponent(el.innerText)}" target="_blank">${el.innerHTML}</a>`
        });
    }

})();
