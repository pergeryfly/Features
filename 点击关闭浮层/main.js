$('button').on('click', function() {
    $('.floating').show()
    console.log('show')
    setTimeout(function() {
      console.log('添加 one click')
      $(document).one('click', function() {
        console.log('我觉得这里不会执行')
        console.log('hide')
        $('.floating').hide()
      })
    }, 0)
  })
  $('.floating').on('click', function(e) {
   e.stopPropagation()
  })