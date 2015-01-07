/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_1}", "click", function(sym, e) {
         //Clique na texto
         
         parent.APP.FancyBox.openText ("txt_index_01");
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "click", function(sym, e) {
         //Clique na texto
         
         parent.APP.FancyBox.openText ("txt_index_02");
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_3}", "click", function(sym, e) {
         //Clique na texto
         
         parent.APP.FancyBox.openText ("txt_index_03");
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_4}", "click", function(sym, e) {
         //Clique na texto
         
         parent.APP.FancyBox.openText ("txt_index_04");
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1400, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'imagem03_03_01'
   (function(symbolName) {   
   
   })("imagem03_03_01");
   //Edge symbol end:'imagem03_03_01'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-3778037");