describe( 'makeEditable', function () {
	var scope,
		element,
		html,
		elem,
		editableContent;
	beforeEach( module( 'makeEditableApp' ) );
	beforeEach( module( 'makeEditableTemplate.html' ) );
	beforeEach( inject( function ($rootScope, $compile) {
		elem = angular.element(
			'<div make-editable>' +
			editableContent +
			'</div>'
		)

		scope = $rootScope;
		$compile( elem )( scope );
		scope.$digest();


	} ) );

	it( 'should render the element correctly', function () {
		var card = elem[0].querySelectorAll( '.card' ),
			content = elem[0].querySelectorAll( '.content' ),
			buttons = elem[0].querySelectorAll( '.buttons' );

		expect( card.length ).toBe( 1 ); // check if it has .card class
		expect( content.length ).toBe( 1 ); // check if it has .content class
		expect( elem.find( content ).attr( 'contenteditable' ) ).toBeFalsy(); // check if contenteditable attribute is false
		expect( buttons.length ).toBe( 1 ); // check if it has .buttons class
		expect( elem.find( 'button' ).attr( 'ng-click' ) ).toBeTruthy();
		expect( elem.find( 'span' ).attr( 'ng-hide' ) ).toBeFalsy();

	} );


} )