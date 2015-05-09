describe('makeEditable', function() {
    var scope,
        compiled,
        element,
        html,
        editableContent;
    beforeEach(module('makeEditableApp'));
    beforeEach(module('makeEditableTemplate.html'));
    beforeEach(inject(function($rootScope, $compile) {
        editableContent = '<p>Content that will become editable when the directive rendered.</p>';
        html = '';
        html += '<div make-editable>';
        html += editableContent;
        html += '</div>'
       scope = $rootScope.$new();
        compiled = $compile(html)
        element = compiled(scope);
        scope.$digest();
    }));

    it('should render the element correctly', function(){

            console.log(element.find('div.card'));

        // expect(element.find('div.card').length).toBe(1);

// http://fdietz.github.io/recipes-with-angular-js/directives/testing-directives.html
    })


//     '<div make-editable="" class="ng-scope"><div class="card">
//     <div class="content" ng-transclude="" contenteditable="false" ng-class="{editActive: isEditable}">
//                 <p class="ng-scope">Content that will become editable when the directive rendered.</p>
//             </div>
//     <div class="buttons">
//         <button ng-click="edit()"><span ng-hide="isEditable" class="">Edit</span><!-- ngIf: isEditable --></button>
//     </div>
// </div></div>'
})