function main(){

$('#js-shopping-list-form').on('submit', function(evt){
    evt.preventDefault();
  let listItem = $(evt.currentTarget).find('input[name="shopping-list-entry"]').val();
  let template = `<li>
  <span class="shopping-item">${listItem}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`;
  $('.shopping-list').append(template)
  handleToggle()
})

function handleToggle(){
$('.shopping-item-toggle').on('click', function(evt){
  
  evt.preventDefault();
  let chosen = $(evt.currentTarget).parent().parent().children('span').first()
  chosen.toggleClass('.shopping-item shopping-item__checked');

})


$('.shopping-item-delete').on('click', function(evt){
  evt.preventDefault();
  $(evt.currentTarget).parent().parent().remove()

})
}
handleToggle()
}
$(main)