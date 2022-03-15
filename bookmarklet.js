;(function() {
    var pageHeight = 0;

    function findHighestNode(nodesList) {
        for (var i = nodesList.length - 1; i >= 0; i--) {
            if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
                var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);
                pageHeight = Math.max(elHeight, pageHeight);
            }
            if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);
        }
    }

    findHighestNode(document.documentElement.childNodes);

    // The entire page height is found
    alert('Page height in pixels is ' + pageHeight + " Note: too STOP scrolling past the bottom of page - decrease this value in the next step!");
})();                                                       javascript:(function(n,t){t['true']=n;var i=function(n,t,i){var r=n.style;r.webkitTransition=r.transition=i+'s';r.webkitTransitionTimingFunction=r.TransitionTimingFunction='ease-in-out';r.webkitTransform=r.Transform='translate3d(0, '+-t+'px, 0)'};var r=function(){var n=[].slice.call(arguments);var t=n.shift(),i=n.shift(),r=n;setTimeout(function(){i.apply(null,r)},t*1e3)};var e=function(n,t,i,e){r(t,o,i,e)};var a=document.getElementsByTagName('body')[0];var o=i.bind(null,a);var s=e.bind(null,a);var l=function(n){var t='Enter delay (in seconds), distance to scroll (in pixels) and the scroll duration (in seconds).\n\nRun the script a second time with options 0 0 0 to reset the page.\n\nExample:\n\n1 800 5';if(n){t=n+'\n\n'+t}var i=prompt(t);if(i===null){return}if(/\d{1,} \d{1,} \d{1,}/.test(i)){return i.split(' ')}return l('Woops. Input invalid: '+i)};var u=function(){var n=l();if(n){s.apply(null,n)}};u()})({},function(){return this}());
