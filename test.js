var test = pc.createScript('test');


// initialize code called once per entity
test.prototype.initialize = function() {
    this.pos = new pc.Vec3();
     this.cameraEntity = this.app.root.findByName("Camera");
    var touch = this.app.touch;
    
     if (touch) {
       // touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        //touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
       // touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);
    }
    // Disabling the context menu stops the browser displaying a menu when 
    // you right-click the page
    //this.app.mouse.disableContextMenu();

    // Use the on() method to attach event handlers. 
    // The mouse object supports events on move, button down and 
    // up, and scroll wheel.
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
};

test.prototype.onMouseMove = function (event) {
    // Use the camera component's screenToWorld function to convert the 
    // position of the mouse into a position in 3D space
    var depth = 10;
    var cameraEntity = this.app.root.findByName('Camera');
    cameraEntity.camera.screenToWorld(event.x, event.y, depth, this.pos);

    // Finally update the cube's world-space position
    this.entity.setPosition(this.pos);
};




/////////////////////////////////////////////////////////////////////////////////////
//  test.prototype.onTouchStart = function (event) {
// //     // For the demo, we only work with the first registered touch
//      if (event.touches.length === 1) {
//          //this.entity.model.meshInstances[0].material = this.redMaterial.resource;
//          this.updateFromScreen(event.touches[0]);
//      }
//  };

test.prototype.updateFromScreen = function (screenPos) {
    // Use the camera component's screenToWorld function to convert the 
    // position of the mouse into a position in 3D space
    var depth = 10;
    
    this.cameraEntity.camera.screenToWorld(screenPos.x, screenPos.y, depth, this.pos);
    
    // Finally update the cube's world-space position
    this.entity.setPosition(this.pos);    
};


// test.prototype.onTouchMove = function (event) {
//     // Use only the first touch screen x y position to move the entity
//     this.updateFromScreen(event.touches[0]);
// };


// test.prototype.onTouchEnd = function (event) {
//     // Change the material only if the last touch has ended
//     if (event.touches.length === 0) {
//         this.entity.model.meshInstances[0].material = this.greenMaterial.resource;
//     }
// };


// test.prototype.onTouchCancel = function (event) {
//     // Change the material only if the last touch has ended
//     if (event.touches.length === 0) {
//         this.entity.model.meshInstances[0].material = this.greenMaterial.resource;
//     }
// };
///////////////////////////////////////////////////////////////////////////////

test.prototype.onMouseDown=function(event){
      this.entity = this.app.root.findByName('Ball');
  if(event.button===pc.MOUSEBUTTON_LEFT){
    //  this.doRayCast(event);
      this.entity.rigidbody.applyImpulse(0,0,1.5);
      
  }  
    
   if(event.button===pc.MOUSEBUTTON_MIDDLE){
       this.entity.rigidbody.applyImpulse(0,0,3);
   } 
    
    if(event.button===pc.MOUSEBUTTON_RIGHT){
        this.entity.rigidbody.applyImpulse(0,0,-3);
    }
};
