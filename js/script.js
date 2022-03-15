class Bookmarklets

  constructor: ->
    bindUIActions()
    optimiseForTouch()

  touch = document['ontouchstart'] isnt undefined
  links = document.querySelectorAll('.bookmarklet a')
  networks = document.querySelectorAll('.network')
  searchBox = document.getElementById('search')

  bindUIActions = ->
    for link in links
      if touch
        link.href = "#{window.location}/////#{link}.href"
          
      link.addEventListener('click', (e) ->
        if touch
          alert 'Please tap and hold the bookmarklet to add it to your bookmarks.'
        else
          alert 'Please drag the bookmarklet to the bookmarks bar.'

        e.preventDefault()
        return
      , false)

    searchBox.addEventListener('input', search, false)
    window.addEventListener('scroll', stickySearch, false)
    return
      
  optimiseForTouch = ->
    if touch
      document.body.classList.add 'touch'

  search = ->
    query = new RegExp(searchBox.value, 'i')

    for network in networks
      network.style.display = if query.test(network.firstElementChild.textContent) or query.test(network.getAttribute('data-category')) then 'block' else 'none'
    return

  stickySearch = ->
    top = if window.pageYOffset then pageYOffset else document.documentElement.scrollTop or document.body.scrollTop
    elementTop = searchBox.parentNode.parentNode.offsetTop
    hasClass = searchBox.classList.contains 'fixed'

    if top > elementTop and not hasClass
      searchBox.classList.add 'fixed'
    else if top < elementTop and hasClass
      searchBox.classList.remove 'fixed'

Bookmarklets()
