//update_shelf();
function update_shelf()
{      
  let counter = store.item_count;
  $('#last_clickers1').html('');
  let content = "";
  console.log("update_shelf. items="+store.item_count)

  for (let index = 1; index <= counter; index++)
  {
    store.contract.products.call(index,function(err,ress)
    {
      if(!err)
      {
        console.log(ress);
        if (ress[3])
        {
          content += '<li class="simpleCart_shelfItem"><h2 class="item_id">'+index+'</h2><h2 class="item_name">'+ress[0]+'</h2><img class="item_thumb" src="images/store/'+index+'.jpg" /><span class="item_price">'+ress[1]["c"][0]+' ETHO</span><input type="text" class="item_quantity" value="'+ress[2]["c"][0]+'" /><input type="button" class="item_add" value="add to cart" /></li>';
          $('ul.items').html(content);
        }
      }
    });
  }
} 
