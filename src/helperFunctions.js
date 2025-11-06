//a file for helper functions
const removeChildren=function(parent){
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
      }
};

export {removeChildren};