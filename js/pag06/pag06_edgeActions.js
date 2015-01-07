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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1}", "click", function(sym, e) {
         //Clique na texto
         
         parent.APP.FancyBox.openText ("txt06_01_01");
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_01_02}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("pag06_01_02");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_01_03}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("pag06_01_03");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_01_04}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("pag06_01_04");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_02_02}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("pag06_02_02");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6385, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "click", function(sym, e) {
         //Clique na texto
         
         parent.APP.FancyBox.openText ("txt06_02_01");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_03_01}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_03_03}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("pag06_03_03");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9795, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13595, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_04_02}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("pag06_04_02");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_04_03}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("pag06_04_03");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_04_04}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("pag06_04_04");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_04_05}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("pag06_04_05");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_04_06}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("pag06_04_06");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem06_04_07}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("pag06_04_07");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avancar}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${voltar}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.playReverse();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'texto01'
   (function(symbolName) {   
   
   })("texto01");
   //Edge symbol end:'texto01'

   //=========================================================
   
   //Edge symbol: 'imagens07_04_01'
   (function(symbolName) {   
   
   })("imagens07_04_01");
   //Edge symbol end:'imagens07_04_01'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-17725635");