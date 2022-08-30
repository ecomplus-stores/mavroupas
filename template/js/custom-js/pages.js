// Add your custom JavaScript for storefront pages here.
  storefront.on('widget:@ecomplus/widget-minicart', function () {
    setTimeout(function () {
      if(document.querySelectorAll('.product__customization--bordado input').length) {
        document.querySelector('.product__customization--bordado input').maxLength = 20 
      }
    }, 800);
  });
