document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('mousedown', (event) => {
      const element = event.target;
      element.style.position = 'absolute';
      element.style.zIndex = 1000;
  
      function moveAt(pageX, pageY) {
        element.style.left = pageX - element.offsetWidth / 2 + 'px';
        element.style.top = pageY - element.offsetHeight / 2 + 'px';
      }
  
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }
  
      document.addEventListener('mousemove', onMouseMove);
  
      element.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        element.onmouseup = null;
      };
    });
  
    item.ondragstart = function() {
      return false;
    };
  });
  