$('button').on('click', function(e) {
  e.stopPropagation()
  if($('.floating').is(':hidden')){
    			$('.floating').show()
    			}else{
    				$('.floating').hide()
    				}
                })
$(document).on('click',function(){
  $('.floating').hide()
})
  $('.floating').on('click', function(e) {
   e.stopPropagation()
  })